import RadioManagementFrameTag from "./radio_management_frame_tag";

declare class RadioProbeFrame {
    constructor();

    tags: RadioManagementFrameTag[];
    
    decode(raw_packet: Buffer, offset: number);
}

export = RadioProbeFrame;