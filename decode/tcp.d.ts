import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";

declare class TCPFlags {
    constructor(emitter?: EventEmitter);

    emitter: EventEmitter | undefined;
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

declare class TCPOptions {
    mss: uint16 | null;
    window_scale: uint8 | null;
    sack_ok: boolean | null;
    sack: [uint32, uint32][] | null;
    timestamp: uint32 | null;
    echo: uint32 | null;

    decode(raw_packet: Buffer, offset: number, len: number): this;
    toString(): string;
}

declare class TCP {
    constructor(emitter?: EventEmitter);

    emitter: EventEmitter | undefined;
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
    data: Buffer | undefined;
    dataLength: number;

    decoderName: "tcp";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number, len: number): this;
    toString(): string;
}

export = TCP;