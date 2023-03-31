import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickButton(intput: HTMLInputElement) {
    if (intput.value === 'home') {
      this.router.navigate(['/products/parent']);
    }
  }

}

