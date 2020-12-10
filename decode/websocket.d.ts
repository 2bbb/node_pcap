import { EventEmitter } from "events";
import { uint8 } from "../types/utils/int_decl";

declare class WebSocketFrame {
    constructor();
    type: uint8 | null;
    data: string;
}

type WebSocketParserState = "skip_response" | "frame_type" | "read_until_marker" | string;

declare class WebSocketParser extends EventEmitter {
    constructor(flag: string);

    buffer: Buffer;
    state: WebSocketParserState;
    frame: WebSocketFrame;
    skipped_bytes: number;

    execute(incoming_buf: Buffer): void;

    on(event: "message", listener: (data: string) => any): this;
    on(event: string, listener: Function): this;

    once(event: "message", listener: (data: string) => any): this;
    once(event: string, listener: Function): this;
}

export = WebSocketParser;