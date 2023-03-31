import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value: string = "I am Kishan vaghamashi"

  nameArray: string[] = [
    'Kishan Vaghamashi',
    'Parth',
    'Pritesh Baldaniya',
    'Jayeshbhai Jordaar',
    'Jay'
  ];

  searchtext: any = '';

  productArray: any[] = [
    {
      id: 1,
      name: 'Mobile MI',
      price: 20000,
      availability: 'Available'
    },
    {
      id: 2,
      name: 'TV Samsung',
      price: 35000,
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Laptop',
      price: 80000,
      availability: 'Not available'
    },
    {
      id: 4,
      name: 'Mobile One plus',
      price: 25000,
      availability: 'Available'
    },
    {
      id: 5,
      name: 'TV Mi',
      price: 12000,
      availability: 'Not available'
    },
    {
      id: 6,
      name: 'Refrigerator',
      price: 18500,
      availability: 'Available'
    },
    {
      id: 7,
      name: 'Mobile Vivo',
      price: 29800,
      availability: 'Available'
    },
    {
      id: 8,
      name: 'Microwave',
      price: 1900,
      availability: 'Available'
    },
    {
      id: 9,
      name: 'Washing Machine',
      price: 31000,
      availability: 'Available'
    },
    {
      id: 10,
      name: 'Mobile(MI)',
      price: 23000,
      availability: 'Not available'
    }
  ];
}
