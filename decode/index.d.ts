import { PacketWithHeader } from '../pcap';

import EthernetPacketType = require("./ethernet_packet");
import IPv4 = require("./ipv4");
import IPv6 = require("./ipv6");
import Arp = require("./arp");
import PcapPacketType = require("./pcap_packet");
import { PcapPacketDecodeOptions } from '../types/pcap_packet_decode_options';

export const EthernetPacket: typeof EthernetPacketType;
export const IPv4Packet: typeof IPv4;
export const IPv6Packet: typeof IPv6;
export const ArpPacket: typeof Arp;
export const PcapPacket: typeof PcapPacketType;

interface Decode {
    (packet: PacketWithHeader, emitter?: Function, options?: PcapPacketDecodeOptions): PcapPacketType;
    packet(packet: PacketWithHeader, emitter?: Function, options?: PcapPacketDecodeOptions): PcapPacketType;
}

export const decode: Decode;
