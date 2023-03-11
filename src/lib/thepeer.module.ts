import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThepeerCheckoutComponent } from './thepeer-checkout.component';
import { ThepeerDirectDebitComponent } from './thepeer-direct-debit.component';
import { ThepeerSendComponent } from './thepeer-send.component';
import { ThepeerService } from './thepeer.service';
import { PUBLIC_KEY } from './thepeer-token';



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
export class ThepeerModule {
  static forRoot(token: string): ModuleWithProviders<ThepeerModule>{
    return {
      ngModule: ThepeerModule,
      providers: [
        ThepeerService,
        {
          provide: PUBLIC_KEY, useValue: token
        }
      ]
    }
  }
 }
