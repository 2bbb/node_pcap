import { IPv4AddrArray } from "../../types/addresses";

declare class IPv4Addr {
    addr: IPv4AddrArray;
    decoderName: "ipv4-addr";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv4Addr;