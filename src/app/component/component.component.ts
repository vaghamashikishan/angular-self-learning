import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isValid: boolean = false;
  blockButtonHandler() {
    this.isValid = true;
  }

  selectedProduct: string = "";
  onChange(event: any) {
    this.selectedProduct = event.target.value;
  }

  details = [
    { name: "Product 1", price: 100, seller: 'Kishan' },
    { name: "Product 2", price: 1100, seller: 'Jay' },
    { name: "Product 3", price: 150, seller: 'Parth' },
    { name: "Product 4", price: 460, seller: 'Aarav' },
  ]
}
