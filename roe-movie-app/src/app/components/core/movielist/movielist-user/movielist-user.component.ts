import { Component, DoCheck, OnInit, Inject, OnChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './movielist-user.component.html',
  styleUrls: ['./movielist-user.component.css']
})
export class MovielistUserComponent implements OnInit, DoCheck, OnChanges {
  selected: string = '';
  form!: FormGroup
  open: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', {
        validators: [
          Validators.required,
        ],
        updateOn: 'change',
      }],
    });
  }

  ngOnChanges() {
  }

  ngDoCheck(): void {
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  toggleSelect(e: MouseEvent): void {
    this.selected = (e.target as HTMLElement).innerText.toLowerCase();
    console.log(this.selected)
  }

  openModal() {
    console.log('open')
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }

  onSubmit() {
    console.log(this.route)
    this.authService.setRole(this.password.value, this.selected.toUpperCase()).subscribe({
      next: (val) => {
        localStorage.setItem('user', val.accessToken), this.router.navigate(['movielist'])
      },
      error: (e) => console.log(e.error.message)
    })
  }

}