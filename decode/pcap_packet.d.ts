import { PacketWithHeader } from 'pcap';
import { EthernetPacket } from './ethernet_packet';
import { NullPacket } from './null_packet';
import { IPv4 } from './ipv4';
import { RadioPacket } from './ieee802.11/radio_packet';
import { SLLPacket } from './sll_packet';
import { LinkType } from '../pcap';
import { EventEmitter } from 'events';
import { uint32 } from '../types/utils/int_decl';

export type Payload = EthernetPacket | NullPacket | IPv4 | RadioPacket | SLLPacket;

export declare class PcapHeader {
    constructor(raw_header: Buffer);

    tv_sec: uint32;
    tv_usec: uint32;
    caplen: uint32;
    len: uint32;
}

export declare class PcapPacket {
    constructor(emitter: EventEmitter | null);

    link_type: LinkType;
    pcap_header: PcapHeader;
    payload: Payload | null;
    emitter: any;

    decode(packet_with_header: PacketWithHeader, options: any): PcapPacket;
    toString(): string;
}
