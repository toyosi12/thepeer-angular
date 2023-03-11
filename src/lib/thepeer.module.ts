import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThepeerCheckoutComponent } from './thepeer-checkout.component';
import { ThepeerDirectDebitComponent } from './thepeer-direct-debit.component';
import { ThepeerSendComponent } from './thepeer-send.component';



@NgModule({
  declarations: [
    ThepeerSendComponent,
    ThepeerCheckoutComponent,
    ThepeerDirectDebitComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThepeerSendComponent,
    ThepeerDirectDebitComponent,
    ThepeerCheckoutComponent
  ]
})
export class ThepeerModule { }
