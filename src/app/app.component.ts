import { Component, ViewEncapsulation } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'CADD-Ventures';

  constructor(private scrollService: ScrollToService) { }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

}
