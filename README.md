# thepeer-angular
> Angular library for integrating Thepeer. 
Thepeer is a fast and secure way to send money accross businesses

<img width="510" alt="Checkout" src="https://raw.githubusercontent.com/toyosi12/images/main/checkout.png" />
<img width="510" alt="Direct Debit" src="https://raw.githubusercontent.com/toyosi12/images/main/direct-debit.png" />
<img width="510" alt="Send" src="https://raw.githubusercontent.com/toyosi12/images/main/send.png" />

## INSTALLATION
To install, simply run the command: 
```sh
npm install thepeer-angular
```

## USAGE
### Import the module
```ts
import { ThepeerModule } from 'thepeer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThepeerModule.forRoot('--YOUR PUBLIC KEY HERE--')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use in your project
There are two ways to implement this library in your project:
- You can use functions that can be called from a template within your project as shown below:
```ts
import { ThepeerService } from 'thepeer'

constructor(private thePeerService: ThepeerService){}


  send(){
    this.thePeerService.initiateSend(config);
  }

  directDebit(){
    this.thePeerService.initiateDirectDebit(config);
  }

  checkout(){
    this.thePeerService.initiateCheckout(config);
  }
```
```html
<button (click)="send()">Send</button>
<button (click)="directDebit()">Direct Debit</button>
<button (click)="checkout()">Checkout</button>
```

- You can use a couple of pre-built components:
```html
<thepeer-send 
    [config]="config"
>Send</thepeer-send>

<thepeer-direct-debit 
    [config]="config"
>Direct Debit</thepeer-direct-debit>

<thepeer-checkout 
    [config]="config"
>Checkout</thepeer-checkout>
```

### The Config Object
The config object allows you to set your configuration options. A sample config object is shown below:
```ts
import { IEventResponse } from 'thepeer'

 config = {
    publicKey: "--PUBLIC KEY HERE--",
    amount: 10000,
    email: "toyosi@example.com",
    currency: "NGN",
    meta: {
        city: "Cupertino",
        state: "California"
    },
    onSuccess: (data: IEventResponse) => {
      console.log('success: ', data)
    },
    onError: (data: IEventResponse) => {
      console.log('error: ', data)
    },
    onClose: (data: IEventResponse) => {
      console.log('close: ', data)
    }
}
```
NOTE: The PUBLIC_KEY here is optional. If it is provided, it overrides the one in the module. 

| Option        | Description                                                                                                                                                                                 | Required | Type |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-----------|
| publicKey     | Your public key can be found on your [dashboard](http://dashboard.thepeer.co). It can either be provided in the module or as part of the config object                                                                   | true     | string    |
| amount        | This is the amount to be sent and must be in kobo e.g N100 will be 10000                                                                                                                    | true     | integer   |
| userReference | The user reference uniquely identifies a user. It is returned when a user is indexed by using the Thepeer API. It is required when initiating **send** or **direct debit** functionalities  | true     | string    |
| meta          | This contains optional values you will like to have with your transaction response.                                                                                                         | false    | object    |
| email         | Your customer's email. It is required for **checkout**                                                                                                                                      | true     | string    |
| onSuccess     | It is called when a transaction is successful.                                                                                                                                              | true     | function  |
| onError       | It is called when an error occurs.                                                                                                                                                          | true     | function  |
| onClose       | It is called when a user clicks the close button                                                                                                                                            | true     | function  |


## THEPEER API REFERENCES
- [Thepeer API docs](https://docs.thepeer.co) 
- [Thepeer Dashboard](https://dashboard.thepeer.co)

## SUPPORT
Please reach out to me at <toyosioyelayo@gmail.com> if you have any issues

## CONTRIBUTING
Please feel free to fork this library and contribute by submitting a pull request to enhance the functionalities.

## License
The MIT License (MIT). Please see [License File](license) for more information.
