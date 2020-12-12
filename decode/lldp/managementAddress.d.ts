import TLV from "./lldp_tlv";

declare class managementAddress {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number): void;
}

export = managementAddress;
