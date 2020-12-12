import { EventEmitter } from "events";
import { EthernetAddrArray, IPv4AddrArray, IPv6AddrArray } from "../../types/utils/addresses";
import { uint16, uint32, uint8 } from "../../types/utils/int_decl";
import EthernetAddr from "../ethernet_addr";
import IPv4Addr from "../ipv4_addr";

export declare class BaseTLV {
    constructor(emitter: EventEmitter | null);
    emitter: EventEmitter | null;
    
    tlvType: uint8;
    tlvLength: uint16;
    payload: any;

    decoderName: "tlv";
    eventsOnDecode: true;

    decode(raw_packet: Buffer, offset: number): this;
}

export declare class ChassisTLV extends BaseTLV {
    subType: uint8;
    component: uint8;
    interface: uint8;
    port: uint8;
    addr: EthernetAddrArray | IPv4AddrArray;
    local: uint8;
}

export declare class PortIdTLV extends BaseTLV {
    // portId
    portIdSubType: uint8;
    intString: string;
    macAddress: EthernetAddr;
    networkAddress: IPv4Addr;
}

export declare class TTLTLV extends BaseTLV {
    // ttl
    ttlSeconds: uint8;
}

export declare class PortDescriptionTLV extends BaseTLV {
    // portDescription
    portDescription: string;
}

export declare class SystemNameTLV extends BaseTLV {
    // systemName
    systemName: string;
}

export declare class SystemDescriptionTLV extends BaseTLV {
    // systemDescription
    systemDescription: string;
}

export declare class SystemCapsTLV extends BaseTLV {
    // systemCaps
    sysCaps: uint16;
    enabledCaps: uint16;
}

export declare class ManagementAddressTLV extends BaseTLV {
    // managementAddress
    mgmtAddress: IPv4AddrArray | IPv6AddrArray;
    intSubType: uint8;
    ifIndex: uint32;
    sysPortName: uint32;
    oid: string;
}

export declare class OrganizationTLV extends BaseTLV {
    // organizational
    orgId: uint32;

    // oui/oui_types
    orgSubType: 1 | 2 | 3 | 4 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | uint8 | null;
    // 8021
    // 1
    portVlanId: uint8 | null;
    // 2
    flags: uint8 | null;
    portProtocolVlanId: uint16 | null;
    // 3
    vlanId: uint16 | null;
    vlanName: string | null;
    // 4
    protocolId: string | null;
    // 8
    congestionNotification: undefined | null;
    // 9
    etsConfig: uint8 | null;
    // 10
    etcRec: undefined | null;
    // 11
    flowControlConfig: undefined | null;
    // 12
    appPriority: undefined | null;
    // 13
    evb: undefined | null;
    // 14
    cdcp: undefined | null;

    // 8023
    // 1
    autoNegotiation: uint8 | null;
    autoNegotiationCaps: uint16 | null;
    mauType: uint16 | null;
    // 2
    mdiPowerSupport: uint8 | null;
    mdiPowerPair: uint16 | null;
    mdiPowerClass: uint16 | null;
    // 3
    lagStatus: uint8 | null;
    lagPortId: uint32 | null;
    // 4
    mtuSize: uint16 | null;
}
