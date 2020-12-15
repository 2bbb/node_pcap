import { PacketWithHeader } from '../pcap';

export import PcapPacket = require("./pcap_packet");
export import EthernetPacket = require("./ethernet_packet");
export import IPv4Packet = require("./ipv4");
export import IPv6Packet = require("./ipv6");
export import ArpPacket = require("./arp");
import { PcapPacketDecodeOptions } from '../types/pcap_packet_decode_options';

interface Decode {
    (packet: PacketWithHeader, emitter?: EventEmitter, options?: PcapPacketDecodeOptions): PcapPacketType;
    packet(packet: PacketWithHeader, emitter?: EventEmitter, options?: PcapPacketDecodeOptions): PcapPacketType;
}

export const decode: Decode;
