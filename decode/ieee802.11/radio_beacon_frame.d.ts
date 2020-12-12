import RadioManagementFrameTag from "./radio_management_frame_tag";

declare class RadioBeaconFrame {
    constructor();
    
    tags: RadioManagementFrameTag[];

    decode(raw_packet: Buffer, offset: number): this;
}

export = RadioBeaconFrame;