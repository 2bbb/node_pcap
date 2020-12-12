import { BaseProtocolDecorder } from "../../types/utils/base_protocol_decoder";

declare class NoNext implements BaseProtocolDecorder {
    _error: any;
    
    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

export = NoNext;