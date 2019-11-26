import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CertificateComponent } from './component/certificate/certificate.component';

const routes: Routes = [{
  path: 'home',
  component: LandingPageComponent
}, {
  path: 'certificate',
  component: CertificateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
