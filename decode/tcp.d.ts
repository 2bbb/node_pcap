import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../type_utils/int_decl";

export declare class TCPFlags {
    constructor(emitter: EventEmitter | null);

    emitter: EventEmitter | null;
    nonce: boolean;
    cwr: boolean;
    ece: boolean;
    urg: boolean;
    ack: boolean;
    psh: boolean;
    rst: boolean;
    syn: boolean;
    fin: boolean;

    decode(first_byte: number, second_byte: number): this;
    toString(): string;
}

export declare class TCPOptions {
    mss: uint16;
    window_scale: uint8;
    sack_ok: boolean;
    sack: [uint32, uint32][];
    timestamp: uint32;
    echo: uint32;

    decode(raw_packet: Buffer, offset: number, len: number): this;
    toString(): string;
}

export declare class TCP {
    constructor(emitter: EventEmitter | null);

    emitter: EventEmitter | null;
    sport: uint16;
    dport: uint16;
    seqno: uint32;
    ackno: uint32;
    headerLength: uint8;
    reserved: any;

    flags: TCPFlags;
    windowSize: uint16;
    checksum: uint16;
    urgentPointer: uint16;
    options: TCPOptions;
    data: Buffer | null;
    dataLength: number;

    decoderName: "tcp";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number, len: number): this;
    toString(): string;
}