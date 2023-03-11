import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICheckoutConfig, IEventResponse } from "./interfaces";
import { ThepeerService } from "./thepeer.service";


@Component({
  selector: 'thepeer-checkout',
  template: `
    <button [ngClass]="class" [ngStyle]="style" (click)="checkout()"><ng-content></ng-content></button>
  `
})

export class ThepeerCheckoutComponent {
  @Input() config: ICheckoutConfig;
  @Input() class: string;
  @Input() style: object;
  @Output() onSuccess: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onError: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onClose: EventEmitter<IEventResponse> = new EventEmitter();


  constructor(private thepeerService: ThepeerService){}

  checkout(){
    this.thepeerService.initiateCheckout(this.config);
  }
}
