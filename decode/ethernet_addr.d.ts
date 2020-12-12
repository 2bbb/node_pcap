import { uint8 } from "../types/utils/int_decl";

type EthernetAddrArray = [uint8, uint8, uint8, uint8, uint8, uint8];

declare class EthernetAddr {
    constructor(raw_packet: Buffer, offset: number);
    addr: EthernetAddrArray;
    toString(): string;
}

export = EthernetAddr;