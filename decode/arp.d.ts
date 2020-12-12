import { EventEmitter } from "events";
import { uint8, uint16 } from "../types/utils/int_decl";
import EthernetAddr = require("./ethernet_addr");
import IPv4Addr = require("./ipv4_addr");

declare class Arp {
    constructor(emitter: EventEmitter | undefined);
    emitter: EventEmitter | undefined;

    htype: uint16;
    ptype: uint16;
    hlen: uint8;
    plen: uint8;
    operation: uint16;
    sender_ha: EthernetAddr | undefined;
    sender_pa: IPv4Addr | undefined;
    target_ha: EthernetAddr | undefined;
    target_pa: IPv4Addr | undefined;

    decode(raw_packet: Buffer, offset: number): this;
}

export = Arp;