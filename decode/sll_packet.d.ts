import { EventEmitter } from "events";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import { uint16 } from "../types/utils/int_decl";
import SSLAddr = require("./sll_addr");

declare class SLLPacket implements BaseProtocolDecorder {
    constructor(emitter?: EventEmitter);

    emitter: EventEmitter | undefined;
    packet_type: uint16;
    address_type: uint16;
    address_len: uint16;
    address: SSLAddr;
    ethertype: uint16;
    payload: any;

    decoderName: "ssl-packet";
    eventsOnDecode: false;
    
    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = SLLPacket;