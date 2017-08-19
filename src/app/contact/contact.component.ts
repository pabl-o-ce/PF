import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact, IContact } from './..//shared/data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactGroup: FormGroup;
  public contactModel: Contact;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(500)]]
    });
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  hasErrors (error: boolean, touched: boolean) {
    return (error && touched);
  }

}
