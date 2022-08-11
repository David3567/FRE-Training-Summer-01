import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.scss'],
})
export class SelectAllComponent implements OnInit {
  form!: FormGroup;
  movielist!: string[];
  selectedMovies: string[] = [];

  get options(): FormGroup {
    return this.form.get('options') as FormGroup;
  }
  get selectall(): FormControl {
    return this.form.get('selectall') as FormControl;
  }

  constructor(
    private readonly dataService: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.movielist = this.dataService.itemlist;
    this.form = this.fb.group({
      selectall: false,
      options: this.fb.group(
        this.movielist.reduce((acc: any, cur: string) => {
          acc[cur] = [false];
          return acc;
        }, {})
      ),
    });
    this.selectOption();
    this.selectAll();
  }

  private selectAll() {
    this.selectall.valueChanges.subscribe((val) => {
      this.setAllOptionsValue(val);
    });
  }
  private setAllOptionsValue(bo: boolean) {
    Object.values(this.options.controls).forEach((control) => {
      control.setValue(bo);
    });
  }

  private selectOption(): void {
    this.movielist.forEach((key: string) => {
      this.options.get(key)?.valueChanges.subscribe((val) => {
        // console.log(`${key} is ${val}`);
        if (val && !this.selectedMovies.includes(key)) {
          this.selectedMovies.push(key);
        } else {
          this.selectedMovies = this.selectedMovies.filter(
            (str) => str !== key
          );
        }

        this.selectall.setValue(
          this.selectedMovies.length === this.movielist.length,
          { emitEvent: false }
        );
      });
    });
  }
}
