import { uint8 } from "../../types/utils/int_decl";
import TLV from "./lldp_tlv";

declare class chessisId {
    constructor();
    decode(tlv: TLV, raw_packet: Buffer, offset: number): void;
}

export = chessisId;