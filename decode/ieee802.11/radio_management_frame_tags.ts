import { uint8 } from "../../types/utils/int_decl";

export declare class BaseRadioManagementFrameTag {
    constructor();

    type: string;
    typeId: 0 | 1 | 3 | 5 | 42 | 48 | 50 | 221 | uint8;
    length: uint8;
    value: Buffer;

    decode(raw_packet: Buffer, offset: number): this;
}

export declare class SSIDFrameTag extends BaseRadioManagementFrameTag {
    type: "ssid";
    ssid: string;
}

export declare class RatesFrameTag extends BaseRadioManagementFrameTag {
    type: "rates";
}

export declare class ChannelFrameTag extends BaseRadioManagementFrameTag {
    type: "channel";
    channel: uint8;
}

export declare class TIMFrameTag extends BaseRadioManagementFrameTag {
    type: "TIM";
}

export declare class ERPFrameTag extends BaseRadioManagementFrameTag {
    type: "ERP";
}

export declare class RSNFrameTag extends BaseRadioManagementFrameTag {
    type: "RSN";
}

export declare class ExtendedRatesFrameTag extends BaseRadioManagementFrameTag {
    type: "extended_rates";
}

export declare class VendorSpecificFrameTag extends BaseRadioManagementFrameTag {
    type: "vendor_specific";
}

export declare class UnknownFrameTag extends BaseRadioManagementFrameTag {
    type: "unknown";
}

