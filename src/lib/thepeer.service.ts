import { Injectable, Input } from '@angular/core';
import { ICheckoutConfig, IDirectChargeConfig, ISendConfig, IThePeer } from './interfaces';


declare const window: Window & typeof globalThis & {
  ThePeer: IThePeer
}

@Injectable({
  providedIn: 'root'
})
export class ThepeerService {

  private async initializeAPI(): Promise<void>{
    return new Promise(resolve => {
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      }

      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://cdn.thepeer.co/v1/chain.js')
    })
  }


  async initiateSend(config: ISendConfig){
    await this.initializeAPI();
    const send = window.ThePeer && window.ThePeer.send(config);
    send.setup();
    send.open()
  }

  async initiateDirectDebit(config: IDirectChargeConfig){
    await this.initializeAPI();
    const directDebit = window.ThePeer && window.ThePeer.directCharge(config);
    directDebit.setup();
    directDebit.open();
  }

  async initiateCheckout(config: ICheckoutConfig){
    await this.initializeAPI();
    const checkout = window.ThePeer && window.ThePeer.checkout(config);
    checkout.setup();
    checkout.open();
  }
}
