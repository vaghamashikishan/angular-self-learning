import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-out-decorator',
  templateUrl: './in-out-decorator.component.html',
  styleUrls: ['./in-out-decorator.component.scss']
})
export class InOutDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentToChild: any = "I AM INEVITABLE";
  childToParent: any;

  gettingData(data: any) {
    this.childToParent = data;
  }
}
