import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";
import IPv4Addr = require("./ipv4_addr");

declare class IGMP {
    constructor(emitter?: EventEmitter);

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

export = IGMP;