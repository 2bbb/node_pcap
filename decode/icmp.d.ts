import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";

declare class ICMP {
    constructor(emitter: EventEmitter | null);
    type: uint8;
    code: uint8;
    checksum: uint16;

    decoderName: "icmp";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = ICMP;