import { PacketWithHeader, LinkType } from '../pcap';
import { EventEmitter } from 'events';
import { uint32 } from '../types/utils/int_decl';

import EthernetPacket = require('./ethernet_packet');
import NullPacket = require('./null_packet');
import IPv4 = require('./ipv4');
import RadioPacket = require('./ieee802.11/radio_packet');
import SLLPacket = require('./sll_packet');
import { PcapPacketDecodeOptions } from '../types/pcap_packet_decode_options';

type Payload = EthernetPacket | NullPacket | IPv4 | RadioPacket | SLLPacket;

declare class PcapHeader {
    constructor(raw_header: Buffer);

    tv_sec: uint32;
    tv_usec: uint32;
    caplen: uint32;
    len: uint32;
}

declare class PcapPacket {
    constructor(emitter: EventEmitter | undefined);

    link_type: LinkType;
    pcap_header: PcapHeader;
    payload: Payload | undefined;
    emitter: any;

    decode(packet_with_header: PacketWithHeader, options?: PcapPacketDecodeOptions): PcapPacket;
    toString(): string;
}

export = PcapPacket;