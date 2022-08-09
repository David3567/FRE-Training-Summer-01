import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-array',
  templateUrl: './from-array.component.html',
  styleUrls: ['./from-array.component.scss'],
})
export class FromArrayComponent {
  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup;

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });

    console.log(this.skillsForm.get('skills'));
  }

  addSkills() {
    this.skills.push(
      this.fb.group({
        skill: '',
        exp: '',
      })
    );
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
