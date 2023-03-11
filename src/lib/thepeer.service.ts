import { Inject, Injectable, Input } from '@angular/core';
import { ICheckoutConfig, IDirectChargeConfig, ISendConfig, IThePeer } from './interfaces';
import { PUBLIC_KEY } from './thepeer-token';


declare const window: Window & typeof globalThis & {
  ThePeer: IThePeer
}

@Injectable({
  providedIn: 'root'
})
export class ThepeerService {

  constructor(@Inject(PUBLIC_KEY) private publicKey: string){}

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
    if(!config.publicKey) config.publicKey = this.publicKey;

    await this.initializeAPI();
    const send = window.ThePeer && window.ThePeer.send(config);
    send.setup();
    send.open()
  }

  async initiateDirectDebit(config: IDirectChargeConfig){
    if(!config.publicKey) config.publicKey = this.publicKey;

    await this.initializeAPI();
    const directDebit = window.ThePeer && window.ThePeer.directCharge(config);
    directDebit.setup();
    directDebit.open();
  }

  async initiateCheckout(config: ICheckoutConfig){
    if(!config.publicKey) config.publicKey = this.publicKey;

    await this.initializeAPI();
    const checkout = window.ThePeer && window.ThePeer.checkout(config);
    checkout.setup();
    checkout.open();
  }
}
