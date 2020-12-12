import ICMP = require("../decode/icmp");
import IGMP = require("../decode/igmp");
import IPv4 = require("../decode/ipv4");
import IPv6 = require("../decode/ipv6");
import HeaderExtension = require("../decode/ipv6headers/header_extension");
import NoNext = require("../decode/ipv6headers/no_next");
import TCP = require("../decode/tcp");
import UDP = require("../decode/udp");

export type IPProtocolPacket = ICMP | IGMP | IPv4 | TCP | UDP | IPv6 | NoNext | HeaderExtension | null;
