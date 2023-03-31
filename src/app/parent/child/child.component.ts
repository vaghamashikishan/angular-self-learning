import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() placeHolderText: string = 'name';

  @Input() itemName: string = 'No item';
  @Output() checkOutChild = new EventEmitter<boolean>();


  AddToCartButtonHandler() {
    if (this.itemName !== 'No item') {
      this.checkOutChild.emit(true);
    }
  }



}
