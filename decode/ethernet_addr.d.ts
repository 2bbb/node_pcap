import { EthernetAddrArray } from "../types/utils/addresses";

declare class EthernetAddr {
    constructor(raw_packet: Buffer, offset: number);
    addr: EthernetAddrArray;
    toString(): string;
}

export = EthernetAddr;