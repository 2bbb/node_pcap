import { uint8 } from "../../types/utils/int_decl";

type IPv6AddrArray = [uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8];

declare class IPv6Addr {
    addr: IPv6AddrArray;
    decoderName: "ipv6-addr";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv6Addr;