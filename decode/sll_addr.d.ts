import { uint8 } from "../type_utils/int_decl";

export declare class SSLAddr {
    constructor(raw_packet: Buffer, offset: number, len: number);
    
    addr: uint8[];
    decoderName: "ssl-addr";
    eventsOnDecode: false;

    toString(): string;
}