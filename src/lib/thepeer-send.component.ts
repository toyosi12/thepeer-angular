import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ISendConfig, IEventResponse } from "./interfaces";
import { ThepeerService } from "./thepeer.service";


@Component({
  selector: 'thepeer-send',
  template: `
    <button [ngClass]="class" [ngStyle]="style" (click)="send()"><ng-content></ng-content></button>
  `
})

export class ThepeerSendComponent {
  @Input() config: ISendConfig;
  @Input() class: string;
  @Input() style: object;
  @Output() onSuccess: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onError: EventEmitter<IEventResponse> = new EventEmitter();
  @Output() onClose: EventEmitter<IEventResponse> = new EventEmitter();

  constructor(private thepeerService: ThepeerService){}

  send(){
    this.thepeerService.initiateSend(this.config);
  }
}
