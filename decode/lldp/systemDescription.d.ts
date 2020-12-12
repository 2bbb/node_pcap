import TLV from "./lldp_tlv";

declare class systemDescription {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number, length: number): void;
}

export = systemDescription;