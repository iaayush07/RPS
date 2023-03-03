import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private modalService: NgbModal) {

  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
