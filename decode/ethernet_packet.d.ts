import { EventEmitter } from "events";
import { uint16 } from "../types/utils/int_decl";
import { Arp } from "./arp";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import { EthernetAddr } from "./ethernet_addr";
import { IPv4 } from "./ipv4";
import { IPv6 } from "./ipv6";
import { Vlan } from "./vlan";

export declare class EthernetPacket implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | null);

    emitter: EventEmitter | null;
    dhost: EthernetAddr;
    shost: EthernetAddr;
    ethertype: uint16;
    vlan: Vlan;
    payload: IPv4 | Arp | IPv6 | string | null;

    decoderName: "ethernet-packet";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}