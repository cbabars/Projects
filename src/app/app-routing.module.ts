import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CertificateComponent } from './component/certificate/certificate.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
}, {
  path: 'certificate',
  component: CertificateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
