import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxViewerModule } from 'ngx-viewer';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactComponent } from './component/contact/contact.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CertificateComponent } from './component/certificate/certificate.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent,
    LandingPageComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    NgxViewerModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
