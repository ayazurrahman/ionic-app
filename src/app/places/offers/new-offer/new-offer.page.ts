import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn:'blur',validators:[Validators.required]
      }),
      description: new FormControl(null, {
        updateOn:'blur', validators:[Validators.required, Validators.minLength(10)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur', validators:[Validators.required, Validators.minLength(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn:'blur',
        validators:[Validators.required]
      }),
      dateTo:new FormControl(null, {
        updateOn:'blur',
        validators:[Validators.required]
      })
    })
  }
  onCreateOffer(){
    console.log(this.form)
  }

}
