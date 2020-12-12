import { EthernetAddrArray } from "../types/addresses";

declare class EthernetAddr {
    constructor(raw_packet: Buffer, offset: number);
    addr: EthernetAddrArray;
    toString(): string;
}

export = EthernetAddr;