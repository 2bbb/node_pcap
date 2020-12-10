export type IPv6AddrArray = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

export declare class IPv6Addr {
    addr: IPv6AddrArray;
    decoderName: "ipv6-addr";
    eventsOnDecode: false;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}