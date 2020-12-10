export abstract class BaseProtocolDecorder {
    abstract decode(raw_packet: Buffer, offset: number): this;
    abstract toString(): string;
}