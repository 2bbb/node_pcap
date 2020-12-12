import { EventEmitter } from "events";
import { uint16, uint8 } from "../../types/utils/int_decl";
import EthernetAddr from "../ethernet_addr";
import LogicalLinkControl from "../llc_packet";
import RadioBeaconFrame from "./radio_beacon_frame";
import RadioProbeFrame from "./radio_probe_frame";

declare class RadioFrameFlags {
    constructor(emitter: EventEmitter | undefined);
    
    emitter: EventEmitter | undefined;
    raw: uint8;
    moreFragments: boolean;
    isRetry: boolean;
    moreData: boolean;
    encrypted: boolean;
    ordered: boolean;

    decode(flags: uint8): this;
}

declare class RadioFrame {
    constructor(emitter: EventEmitter | undefined);

    emitter: EventEmitter | undefined;
    frameControl: uint16;
    version: uint8;
    type: uint8;
    subType: uint8;
    flags: RadioFrameFlags;
    duration: uint16;
    bssid: EthernetAddr;
    shost: EthernetAddr;
    dhost: EthernetAddr;
    fragSeq: uint16;
    probe: RadioProbeFrame | undefined;
    beacon: RadioBeaconFrame | undefined;
    llc: LogicalLinkControl | undefined;

    decode(raw_packet: Buffer, offset: number): this;
}

export = RadioFrame;
