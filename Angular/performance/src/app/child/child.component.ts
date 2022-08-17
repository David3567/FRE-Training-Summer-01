import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() todo: any;

  constructor() {}

  ngOnInit(): void {}

  // ngAfterViewChecked(): void {
  //   console.log(this.todo.id + ' child afterviewcheck');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.todo.id + ' child onchange');
  }

  showId() {
    console.log(this.todo.id);
  }
}
