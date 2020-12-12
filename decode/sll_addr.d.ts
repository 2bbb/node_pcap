import { uint8 } from "../types/utils/int_decl";

declare class SSLAddr {
    constructor(raw_packet: Buffer, offset: number, len: number);
    
    addr: uint8[];
    decoderName: "ssl-addr";
    eventsOnDecode: false;

    toString(): string;
}

export = SSLAddr;