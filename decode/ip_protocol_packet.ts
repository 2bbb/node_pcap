import ICMP = require("./icmp");
import IGMP = require("./igmp");
import IPv4 = require("./ipv4");
import IPv6 = require("./ipv6");
import HeaderExtension = require("./ipv6/headers/header_extension");
import NoNext = require("./ipv6/headers/no_next");
import TCP = require("./tcp");
import UDP = require("./udp");

export type IPProtocolPacket = ICMP | IGMP | IPv4 | TCP | UDP | IPv6 | NoNext | HeaderExtension | null;
