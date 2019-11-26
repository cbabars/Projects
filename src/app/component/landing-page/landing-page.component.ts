import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  title = 'CADD-Ventures';

  constructor(private scrollService: ScrollToService) { }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

  ngOnInit() {
  }

}

