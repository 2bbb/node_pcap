import { IpcNetConnectOpts } from "net";

export declare class DNSCache {
    constructor();

    cache: {[key: string]: string};
    requests: {[key: string]: boolean};

    ptr(ip: string): string;
    on_ptr(err: NodeJS.ErrnoException, ip: string, domains: string[]): void;
}