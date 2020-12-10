import { uint8, uint16 } from "../types/utils/int_decl";

declare class Vlan {
    priority: uint8;
    canonical_format:uint8;
    id: uint16;

    decoderName: "vlan";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number);
    toString(): string;
}

export = Vlan;