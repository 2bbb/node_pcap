import { EventEmitter } from "events";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import TLV from "./lldp/lldp_tlv";
import { ChassisTLV, PortIdTLV, TTLTLV } from "./lldp/lldp_tlv_types";

declare class LLDP implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;

	chassisTlv: ChassisTLV;
	portIdTlv: PortIdTLV;
	ttlTlv: TTLTLV;
    optionalTlvs: TLV[];
    
    decorderName: "lldp";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = LLDP;
