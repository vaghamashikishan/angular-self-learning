import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from 'src/app/appServices/design-service.service';
import { MessageService } from 'src/app/appServices/msg.services';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor(private serviceFile: DesignServiceService) { }

  ngOnInit(): void {
  }

  onClick() {
    // const msg = new MessageService();
    // msg.messageShow();

    // better way to use service
    this.serviceFile.messageShow();
  }

}
