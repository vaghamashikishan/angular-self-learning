import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  constructor() { }

  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
      }),
      'course': new FormControl(null),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })
  }

  onFormSubmit() {
    console.log(this.myForm);
  }
}
