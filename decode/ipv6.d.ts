import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import IPv6Addr = require("./ipv6_addr");
import { IPProtocolPacket } from "../types/ip_protocol_packet";

declare class IPv6 implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | null);

    emitter: EventEmitter | null;
    version: uint8;
    trafficClass: uint8;
    flowLabel: uint32;
    payloadLength: uint16;
    nextHeader: uint8;
    hopLimit: uint8;
    saddr: IPv6Addr;
    daddr: IPv6Addr;
    protocolName: "Unknown" | string | null;
    payload: IPProtocolPacket;

    decoderName: "ipv6";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv6;