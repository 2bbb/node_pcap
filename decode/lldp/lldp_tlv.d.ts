import { ChassisTLV, ManagementAddressTLV, OrganizationTLV, PortDescriptionTLV, PortIdTLV, SystemCapsTLV, SystemDescriptionTLV, SystemNameTLV, TTLTLV } from "./lldp_tlv_types";

declare type TLV = ChassisTLV
                 | PortIdTLV
                 | TTLTLV
                 | PortDescriptionTLV
                 | SystemNameTLV 
                 | SystemDescriptionTLV 
                 | SystemCapsTLV 
                 | ManagementAddressTLV 
                 | OrganizationTLV;
export = TLV;
