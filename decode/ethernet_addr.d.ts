import { uint8 } from "../type_utils/int_decl";

export type EthernetAddrArray = [uint8, uint8, uint8, uint8, uint8, uint8];

export declare class EthernetAddr {
    constructor(raw_packet: Buffer, offset: number);
    addr: EthernetAddrArray;
    toString(): string;
}