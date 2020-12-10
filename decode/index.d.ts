import { PacketWithHeader } from 'pcap';

import { EthernetPacket as EthernetPacketType } from "./ethernet_packet";
import { IPv4 } from "./ipv4";
import { IPv6 } from "./ipv6";
import { Arp } from "./arp";
import { PcapPacket as PcapPacketType} from "./pcap_packet";

export const EthernetPacket: typeof EthernetPacketType;
export const IPv4Packet: typeof IPv4;
export const IPv6Packet: typeof IPv6;
export const ArpPacket: typeof Arp;
export const PcapPacket: typeof PcapPacketType;

interface Decode {
    (packet: PacketWithHeader, emitter?: Function, options?: any): PcapPacketType;
    packet(packet: PacketWithHeader, emitter?: Function, options?: any): PcapPacketType;
}

export const decode: Decode;
