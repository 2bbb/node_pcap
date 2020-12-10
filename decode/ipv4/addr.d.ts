import { uint8 } from "../../types/utils/int_decl";

type IPv4AddrArray = [uint8, uint8, uint8, uint8];

declare class IPv4Addr {
    addr: IPv4AddrArray;
    decoderName: "ipv4-addr";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv4Addr;