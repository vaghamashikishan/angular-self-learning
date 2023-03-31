import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() parentData: any;
  @Output() sendingData = new EventEmitter<any>();
  childToParent: any;

  onClick() {
    this.childToParent = 'I AM IRON MAN 2';
    this.sendingData.emit(this.childToParent);
  }
}
