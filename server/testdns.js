const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.gymwebsite.dolj1xz.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);