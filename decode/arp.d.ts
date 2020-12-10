import { EventEmitter } from "events";
import { uint8, uint16 } from "../type_utils/int_decl";
import { EthernetAddr } from "./ethernet_addr";
import { IPv4Addr } from "./ipv4_addr";

export declare class Arp {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;

    htype: uint16;
    ptype: uint16;
    hlen: uint8;
    plen: uint8;
    operation: uint16;
    sender_ha: EthernetAddr | null;
    sender_pa: IPv4Addr | null;
    target_ha: EthernetAddr | null;
    target_pa: IPv4Addr | null;

    decode(raw_packet: Buffer, offset: number): this;
}