import { Component, DoCheck, OnInit, Inject, OnChanges } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './movielist-user.component.html',
  styleUrls: ['./movielist-user.component.css']
})
export class MovielistUserComponent implements OnInit , DoCheck, OnChanges{
  // userInfo: object | any
  selected: string = '';
  form!: FormGroup
  open: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private fb: FormBuilder,
  ) {
    // this.userInfo=this.route.snapshot.data[0].userinfo;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', {
        validators: [
          Validators. required, 
        ],
        updateOn: 'change',
      }],
    });
  }

  ngOnChanges() {
    console.log('heck')
  }

  ngDoCheck(): void {
    // console.log('check')
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

  onSubmit() {
    this.authService.setRole(this.password.value, this.selected.toUpperCase()).subscribe({
      error: (e) => console.log(e.error.message)
  })
  }

}
