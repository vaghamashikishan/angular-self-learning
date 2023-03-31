import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignServiceService } from '../appServices/design-service.service';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.scss'],
})
export class HttpPracticeComponent implements OnInit, AfterViewInit {
  constructor(private productService: DesignServiceService) { }

  products: any;
  ngOnInit(): void {
    this.productService.productShow().subscribe((data) => {
      this.products = data;
    });
  }

  ngAfterViewInit(): void {
    this.box.nativeElement.style.backgroundColor = 'yellow';
  }
  @ViewChild('box') box!: ElementRef;
}
