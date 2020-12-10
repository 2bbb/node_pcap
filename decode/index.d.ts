import { PacketWithHeader } from 'pcap';

import { PcapPacket } from "./pcap_packet";
import { EthernetPacket as EthernetPacketType } from "./ethernet_packet";
import { IPv4 } from "./ipv4";
import { IPv6 } from "./ipv6";
import { Arp } from "./arp";

export const EthernetPacket: typeof EthernetPacketType;
export const IPv4Packet: typeof IPv4;
export const IPv6Packet: typeof IPv6;
export const ArpPacket: typeof Arp;

interface Decode {
    (packet: PacketWithHeader, emitter?: Function, options?: any): PcapPacket;
    packet(packet: PacketWithHeader, emitter?: Function, options?: any): PcapPacket;
}

export const decode: Decode;
