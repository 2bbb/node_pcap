import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";
import { IPv4Addr } from "./ipv4_addr";

export declare class IGMP {
    constructor(emitter: EventEmitter | null);

    type: uint8;
    version: 1 | 2 | 3;
    maxResponseTime: uint8;
    checksum: uint16;
    groupAddress: IPv4Addr;

    decoderName: "igmp";
    eventsOnDecode: true;
    
    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}