import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse: string = '';
  username: string = '';
  password: string = '';


  onFromSubmit() {
    console.log(this.selectedCourse);
    console.log(this.username);
    console.log(this.password);


  }


}
