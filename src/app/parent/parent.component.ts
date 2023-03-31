import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemNameParent: string = 'No item';
  checkOut: boolean = false;

  checkButtonHandler(item: string) {
    this.itemNameParent = item;
  }

  addToCartHandler(itemBool: boolean) {
    this.checkOut = itemBool;
  }
}
