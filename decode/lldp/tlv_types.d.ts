import chessisId from "./chassisId";
import managementAddress from "./managementAddress";
import ORG from "./organization";
import portDescription from "./portDescription";
import portId from "./portId";
import systemCaps from "./systemCaps";
import systemDescription from "./systemDescription";
import systemName from "./systemName";
import ttl from "./ttl";

type chassisId_key = 1;
type portId_key = 2;
type ttl_key = 3;
type portDescription_key = 4;
type systemName_key = 5;
type systemDescription_key = 6;
type systemCaps_key = 7;
type managementAddress_key = 8;
type organizational_key = 127;

declare type types = {
    1: typeof chessisId;
    2: typeof portId;
    3: typeof ttl;
    4: typeof portDescription;
    5: typeof systemName;
    6: typeof systemDescription;
    7: typeof systemCaps;
    8: typeof managementAddress;
    127: typeof ORG;
};
