import { PacketWithHeader } from 'pcap';
import { EthernetPacket } from './ethernet_packet';
import { NullPacket } from './null_packet';
import { IPv4 } from './ipv4';
import { RadioPacket } from './ieee802.11/radio_packet';
import { SLLPacket } from './sll_packet';
import { LinkType } from '../pcap';

export type Payload = EthernetPacket | NullPacket | IPv4 | RadioPacket | SLLPacket;

export declare class PcapHeader {
    constructor(raw_header: Buffer);

    tv_sec: number;
    tv_usec: number;
    caplen: number;
    len: number;
}

export declare class PcapPacket {
    constructor(emitter: any);

    link_type: LinkType;
    pcap_header: PcapHeader;
    payload: Payload | null;
    emitter: any;

    decode(packet_with_header: PacketWithHeader, options: any): PcapPacket;
    toString(): string;
}
