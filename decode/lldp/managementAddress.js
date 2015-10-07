var IPv4Addr = require("../ipv4_addr");

function managementAddress() {

}

managementAddress.prototype.decode = function(tlv, raw_packet, offset) {
	var addrStringLength = (raw_packet.readUInt16BE(offset, true) & 0xff00) >> 8;
	offset++;

	//http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
	var manSubType = (raw_packet.readUInt16BE(offset, true) & 0xff00) >> 8;
	offset++;

	/*switch(manSubType) {
		case 1:

			break;
		default:
     		console.log("Management Address ID subType is reserved!")
	}*/

	//note: the management address string length includes one octet for the address subtype
  //address may also be a MAC address, to be implemented
  tlv.mgmtAddress = new IPv4Addr().decode(raw_packet, offset).addr;
	offset += addrStringLength;

	var intSubType = (raw_packet.readUInt16BE(offset, true) & 0xff00) >> 8;
	offset++;

	var intNumber = raw_packet.toString('utf8', offset, offset+3);
	offset += 3;

	var oidLength = (raw_packet.readUInt16BE(offset, true) & 0xff00) >> 8;
	offset++;

	tlv.oid = raw_packet.toString('utf8', offset, offset+oidLength);
}

module.exports = managementAddress;