import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../type_utils/int_decl";
import { BaseProtocolDecorder } from "../type_utils/base_protocol_decoder";
import { IPv6Addr } from "./ipv6_addr";
import { IPProtocolPacket } from "./ip_protocols";

export declare class IPv6 implements BaseProtocolDecorder {
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
    protocolName: string | "Unknown";
    payload: IPProtocolPacket;

    decoderName: "ipv6";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}