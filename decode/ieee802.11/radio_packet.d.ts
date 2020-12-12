import { EventEmitter } from "events";
import { PcapPacketDecodeOptions } from "../../types/pcap_packet_decode_options";
import { uint16, uint32, uint8 } from "../../types/utils/int_decl";

declare class RadioPacket {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;

    headerRevision: uint8;
    headerPad: uint8;
    headerLength: uint16;
    presentFields: uint32;
    fields: any;
    _decoderCache: object;

    decode(raw_packet: Buffer, offset: number, options?: PcapPacketDecodeOptions): this;
    toString(): string;
}

export = RadioPacket;