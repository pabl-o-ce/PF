import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IContact } from './..//shared/data.interface';
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactGroup: FormGroup;
  public successMessage: string;
  public errorMessage: string;

  constructor(private fb: FormBuilder, private ds: DataService) { }

  ngOnInit() {
    this.contactGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(500)]]
    });
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  onSubmit (contact) {
    this.ds.postContact(contact.value)
    .subscribe(
    (success: any) => {
      this.successMessage = success;
    },
    (error: any) => {
      this.errorMessage = error;
    });
  }

}
