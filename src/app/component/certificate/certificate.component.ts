
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CertificateComponent implements OnInit {

  constructor(private scrollService: ScrollToService) { }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

  ngOnInit() {
  }

}


