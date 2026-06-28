const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

console.log("DNS Servers:", dns.getServers());

dns.resolveSrv(
  "_mongodb._tcp.gymwebsite.dolj1xz.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);