import { BaseProtocolDecorder } from "../../type_utils/base_protocol_decoder";

export declare class HeaderExtension implements BaseProtocolDecorder {
    payload: any;
    nextHeader: number;
    headerLength: number;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}