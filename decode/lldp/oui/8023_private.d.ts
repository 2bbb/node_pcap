import TLV from "../lldp_tlv";

declare class IEEE_8023_PRIVATE {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number): void;
}

export = IEEE_8023_PRIVATE;
