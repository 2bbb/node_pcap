import TLV from "./lldp_tlv";

declare class systemName {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number, length: number): void;
}

export = systemName;