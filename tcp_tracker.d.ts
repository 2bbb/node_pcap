import { EventEmitter } from 'events';
import { PcapPacket } from './decode/pcap_packet';

export interface SessionStats {
    recv_times: {string: number};
    send_times: {string: number};
    send_retrans: {string: number};
    recv_retrans: {string: number};
    connect_duration: number;
    total_time: number;
    
    send_overhead: number;
    send_payload: number;
    send_total: number;

    recv_overhead: number;
    recv_payload: number;
    recv_total: number;
}

export type TCPSessionState = "SYN_SNT" | "SYN_RCVD" | "ESTAB" | "FIN_WAIT" | "CLOSE_WAIT" | "LAST_ACK" | "CLOSING" | "CLOSED";

type IPv4TCPPacket = PcapPacket;

export declare class TCPSession extends EventEmitter {
    constructor();

    src: string;
    src_name: string;
    dst: string;
    dst_name: string;

    state: TCPSessionState;
    current_cap_time: number;

    syn_time: number;
    missed_syn: boolean;
    connect_time: number | null;

    send_isn: number;
    send_window_scale: number;
    send_packets: {number: number}; // send_packets is indexed by the expected ackno: seqno + length
    send_acks: {number: number};
    send_retrans: {number: number};
    send_next_seq: number;
    send_acked_seq: any;
    send_bytes_ip: number;
    send_bytes_tcp: number;
    send_bytes_payload: number;

    recv_isn: number | null;
    recv_window_scale: number | null;
    recv_packets: {number: number};
    recv_acks: {number: number};
    recv_retrans: {number: number};
    recv_next_seq: number | null;
    recv_acked_seq: any;
    recv_bytes_ip: number;
    recv_bytes_tcp: number;
    recv_bytes_payload: number;

    track(packet: IPv4TCPPacket): void;

    SYN_SENT(packet: IPv4TCPPacket): void;
    SYN_RCVD(packet: IPv4TCPPacket): void;
    ESTAB(packet: IPv4TCPPacket): void;
    FIN_WAIT(packet: IPv4TCPPacket): void;
    CLOSE_WAIT(packet: IPv4TCPPacket): void;
    LAST_ACK(packet: IPv4TCPPacket): void;
    CLOSING(packet: IPv4TCPPacket): void;
    CLOSED(): void;

    session_stats(): SessionStats;

    on(event: "start", listener: (session: TCPSession) => void): this;
    on(event: "end", listener: (session: TCPSession) => void): this;
    on(event: "reset", listener: (session: TCPSession, type: "recv") => void): this;
    on(event: "syn retry", listener: (session: TCPSession) => void): this;
    on(event: "retransmit", listener: (session: TCPSession, type: "send" | "recv", ackno: number) => void): this;
    on(event: "data send", listener: (session: TCPSession, tcp_data: Buffer | null) => void): this;
    on(event: "data recv", listener: (session: TCPSession, tcp_data: Buffer | null) => void): this;
    on(event: string, listener: Function): this;
  
    once(event: "start", listener: (session: TCPSession) => void): this;
    once(event: "end", listener: (session: TCPSession) => void): this;
    once(event: "reset", listener: (session: TCPSession, type: "recv") => void): this;
    once(event: "syn retry", listener: (session: TCPSession) => void): this;
    once(event: "retransmit", listener: (session: TCPSession, type: "send" | "recv", ackno: number) => void): this;
    once(event: "data send", listener: (session: TCPSession, tcp_data: Buffer | null) => void): this;
    once(event: "data recv", listener: (session: TCPSession, tcp_data: Buffer | null) => void): this;
    once(event: string, listener: Function): this;
}

export declare class TCPTracker extends EventEmitter {
    constructor();
    new(): TCPTracker;

    sessions: {string: TCPSession};
    track_packet(packet: IPv4TCPPacket): void;

    on(event: "session", listener: (session: TCPSession) => void): this;
    on(event: string, listener: Function): this;

    once(event: "session", listener: (session: TCPSession) => void): this;
    once(event: string, listener: Function): this;
}