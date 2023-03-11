export interface IEventResponse {
    type: string;
    event: string;
    data: Object;
}

export type ThepeerCallback = (response: IEventResponse) => void

interface IBaseConfig {
    /**
     * Public key as shown on the user's dashboard
     */
    publicKey?: string;

    /**
     * Amount in minor e.g kobo
     */
    amount: number;

    /**
     * Currency code e.g NGN
     */
    currency: string;

    /**
     * Metadata
     */
    meta?: {
        [key: string]: any
    },

    /**
     * Success callback
     */
    onSuccess: ThepeerCallback;

    /**
     * Error callback
     */
    onError: ThepeerCallback;

    /**
     * Close event callback
     */
    onClose: ThepeerCallback;
}

export interface ICheckoutConfig extends IBaseConfig {
    /**
     * Email address
     */
    email: string;
}

export interface ISendConfig extends IBaseConfig {
    /**
     * User Reference
     */
    userReference: string;
}

export interface IDirectChargeConfig extends ISendConfig {}

type ThePeerFuncs = {
    setup: () => void;
    open: () =>void;
}

export interface IThePeer {
    checkout: (config: ICheckoutConfig) => ThePeerFuncs;
    send: (config: ISendConfig) => ThePeerFuncs;
    directCharge: (config: IDirectChargeConfig) => ThePeerFuncs;
}
