import { EventEmitter } from "events";
import { uint16, uint32, uint8 } from "../../type_utils/int_decl";

export declare class RadioPacket {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;

    headerRevision: uint8;
    headerPad: uint8;
    headerLength: uint16;
    presentFields: uint32;
    fields: any;
    _decoderCache: object;

    decode(raw_packet: Buffer, offset: number, options: any): this;
    toString(): string;
}