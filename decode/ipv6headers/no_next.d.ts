import { BaseProtocolDecorder } from "../../type_utils/base_protocol_decoder";

export declare class NoNext implements BaseProtocolDecorder {
    _error: any;
    
    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}
