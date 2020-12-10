import { ICMP } from "./icmp";
import { IGMP } from "./igmp";
import { IPv4 } from "./ipv4";
import { IPv6 } from "./ipv6";
import { HeaderExtension } from "./ipv6headers/header_extension";
import { NoNext } from "./ipv6headers/no_next";
import { TCP } from "./tcp";
import { UDP } from "./udp";

export type IPProtocolPacket = ICMP | IGMP | IPv4 | TCP | UDP | IPv6 | NoNext | HeaderExtension | null;
export const protocols: IPProtocolPacket[];