import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild('SavePopup') SavePopup: any;
  modalRef: BsModalRef;
  registerForm: FormGroup;
  submitted = false;
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: [null, Validators.required],
      mobileNumber: [null, Validators.pattern(/^[6-9]\d{9}$/)],
      Email: [null, [Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      Message: [null, Validators.maxLength(200)]
    });
  }

  get f() { return this.registerForm.controls; }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.submitted = true;
    this.modalRef = this.modalService.show(this.SavePopup);
  }

}
