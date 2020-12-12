import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import IPv4Addr = require("./ipv4_addr");
import { IPProtocolPacket } from "../types/ip_protocol_packet";

declare class IPFlags {
    constructor(emitter: EventEmitter | undefined);

    emitter: EventEmitter | undefined;
    reserved: boolean;
    doNotFragment: boolean;
    moreFragments: boolean;

    static decode(raw_flags: number): IPFlags;
    toString(): string;
}

declare class IPv4 implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | undefined);

    emitter: EventEmitter | undefined;
    version: uint8;
    headerLength: uint8;
    diffserv: uint8;
    length: uint16;
    identification: uint16;
    flags: IPFlags;
    fragmentOffset: uint16;
    ttl: uint8;
    protocol: uint8;
    headerChecksum: uint16;
    saddr: IPv4Addr;
    daddr: IPv4Addr;
    protocolName: string;
    payload: IPProtocolPacket;

    decoderName: "ipv4";
    eventsOnDecode: false;
    
    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = IPv4;
