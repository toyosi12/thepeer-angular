import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IDirectChargeConfig, IEventResponse } from "./interfaces";
import { ThepeerService } from "./thepeer.service";


@Component({
  selector: 'thepeer-direct-debit',
  template: `
    <button [ngClass]="class" [ngStyle]="style" (click)="directDebit()"><ng-content></ng-content></button>
  `
})

export class ThepeerDirectDebitComponent {
  @Input() config: IDirectChargeConfig;
  @Input() class: string;
  @Input() style: object;
  @Output() onSuccess: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onError: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onClose: EventEmitter<IEventResponse> = new EventEmitter();

  constructor(private thepeerService: ThepeerService){}

  directDebit(){
    this.thepeerService.initiateDirectDebit(this.config);
  }
}
