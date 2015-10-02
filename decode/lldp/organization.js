var orgs = require("./oui/oui_types");

function ORG() {
	this.orgId = undefined;
  this.payload = undefined;
}

ORG.prototype.decode = function (raw_packet, offset) {
  // https://en.wikipedia.org/wiki/Type-length-value
  // https://en.wikipedia.org/wiki/Link_Layer_Discovery_Protocol
  this.orgId = ((raw_packet.readUInt16BE(offset, true) << 8) || (raw_packet.readUInt16BE(offset+2, true) & 0xff00 >> 8));
  var OrgDecoder = orgs[this.orgId];
  if(OrgDecoder == undefined) {
    this.payload = "Unknown";
  } else {
    this.payload = new OrgDecoder().decode(raw_packet, offset+3);
  }

  return this;
}

module.exports = ORG;
