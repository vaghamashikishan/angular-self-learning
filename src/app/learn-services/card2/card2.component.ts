import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from 'src/app/appServices/design-service.service';
import { MessageService } from 'src/app/appServices/msg.services';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {

  constructor(private serviceFile: DesignServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    // const msg = new MessageService();
    // msg.messageShow();

    this.serviceFile.messageShow();
  }
}
