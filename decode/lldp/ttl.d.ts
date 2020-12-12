import TLV from "./lldp_tlv";

declare class ttl {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number);
}

export = ttl;