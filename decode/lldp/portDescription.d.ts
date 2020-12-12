import TLV from "./lldp_tlv";

declare class portDescription {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number, length: number): void;
}

export = portDescription;