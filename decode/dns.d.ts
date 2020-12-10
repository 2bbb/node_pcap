import { EventEmitter } from "events";
import { uint8, uint16, uint32 } from "../type_utils/int_decl";

export declare class DnsFlags {
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

export declare class DNSRR {
    constructor(is_question: boolean);

    name: string;
    type: any;
    class: any;
    ttl: any;
    rdlength: any;
    rdate: any;
    is_question: boolean;

    toString(): string;

    read_name(): string;
}

export declare class DNSRRSet {
    constructor(count: number);
    rrs: DNSRR[];

    toString(): string;
}

export declare class DNS {
    constructor(emitter: EventEmitter | null);

    raw_packet: Buffer;
    offset: number;

    id: uint16;
    header: DnsFlags;
    qdcount: uint16;
    ancount: uint16;
    nscount: uint16;
    arcount: uint16;

    question: DNSRRSet | null;
    answer: DNSRRSet | null;
    authority: DNSRRSet | null;
    additional: DNSRRSet | null;
    
    _error: any;

    decoderName: "dns";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
    toString(): string;

    decode_RR(is_question: boolean): DNSRR;
    decode_RRs(count: number, is_question: boolean): DNSRRSet | null;
}

export function type_to_string(type_num: uint8): string;
export function qtype_to_string(qtype_num: uint8): string;
export function class_to_string(class_num: uint8): string;
export function qclass_to_string(qclass_num: uint8): string;
