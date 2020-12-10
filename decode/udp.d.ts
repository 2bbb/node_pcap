import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";

export declare class UDP {
    constructor(emitter: EventEmitter | null);

    sport: uint16;
    dport: uint16;
    length: uint16;
    checksum: uint16;
    data: Buffer;

    decoderName: "udp";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}