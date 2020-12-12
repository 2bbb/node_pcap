import { BaseProtocolDecorder } from "../../../types/utils/base_protocol_decoder";

declare class HeaderExtension implements BaseProtocolDecorder {
    payload: any;
    nextHeader: number;
    headerLength: number;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = HeaderExtension;