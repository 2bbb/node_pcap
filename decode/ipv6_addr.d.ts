import { IPv6AddrArray } from "../types/addresses";

declare class IPv6Addr {
    constructor();

    addr: IPv6AddrArray;
    
    decoderName: "ipv6-addr";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv6Addr;