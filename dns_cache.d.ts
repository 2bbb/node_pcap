import { IpcNetConnectOpts } from "net";

export declare class DNSCache {
    constructor();

    cache: {string: string};
    requests: {string: boolean};

    ptr(ip: string): string;
    on_ptr(err: NodeJS.ErrnoException, ip: string, domains: string[]): void;
}