import { EventEmitter } from "events";
import { BaseProtocolDecorder } from "../types/utils/base_protocol_decoder";
import { uint8 } from "../types/utils/int_decl";

import IPv4 = require("./ipv4");
import IPv6 = require("./ipv6");

declare class NullPacket implements BaseProtocolDecorder {
    constructor(emitter: EventEmitter | undefined);

    emitter: EventEmitter | undefined;
    pftype: 2 | 30 | uint8;
    payload: IPv4 | IPv6;
    _error: string | undefined;

    decoderName: "null-packet";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = NullPacket;