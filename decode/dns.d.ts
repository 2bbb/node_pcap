import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../types/utils/int_decl";
import IPv4Addr = require("./ipv4_addr");
import IPv6Addr = require("./ipv6_addr");

declare class DnsFlags {
    constructor();

    isReponse: boolean;
    opcode: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
    isAuthority: boolean;
    isTruncated: boolean;
    isRecursionDesired: boolean;
    isRecursionAvailible: boolean;
    z: uint8;
    responseCode: uint8;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;
}

declare class DNSRR {
    constructor(is_question: boolean);

    name: string;
    type: uint16;
    class: uint16;
    ttl: uint32;
    rdlength: uint16;
    rdata: IPv4Addr | IPv6Addr;
    is_question: boolean;

    read_name(): string;
    
    toString(): string;
}

declare class DNSRRSet {
    constructor(count: number);
    rrs: DNSRR[];

    toString(): string;
}

declare class DNS {
    constructor(emitter?: EventEmitter);

    raw_packet: Buffer;
    offset: number;

    id: uint16;
    header: DnsFlags;
    qdcount: uint16;
    ancount: uint16;
    nscount: uint16;
    arcount: uint16;

    question?: DNSRRSet;
    answer?: DNSRRSet;
    authority?: DNSRRSet;
    additional?: DNSRRSet;
    
    _error: string | undefined;

    decoderName: "dns";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;

    decode_RR(is_question: boolean): DNSRR;
    decode_RRs(count: number, is_question: boolean): DNSRRSet | undefined;
}

declare function type_to_string(type_num: uint8): string;
declare function qtype_to_string(qtype_num: uint8): string;
declare function class_to_string(class_num: uint8): string;
declare function qclass_to_string(qclass_num: uint8): string;

export = DNS;