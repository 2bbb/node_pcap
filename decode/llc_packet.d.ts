import { EventEmitter } from "events";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import { uint8, uint16 } from "../types/utils/int_decl";
import Arp from "./arp";
import IPv4 from "./ipv4";
import IPv6 from "./ipv6";

declare class LogicalLinkControl implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;
    dsap: uint8;
    ssap: uint8;
    controlField: uint8;
    orgCode: [uint8, uint8, uint8];
    type: uint16;
    _error: string | null;
    payload: IPv4 | IPv6 | Arp | null;

    decoderName: "llc";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = LogicalLinkControl;