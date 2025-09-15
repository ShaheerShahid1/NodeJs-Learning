const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `${Date.now()} : ${req.method} : ${req.url}\n`,
      (err) => {
        if (err) {
          console.log("Couldn't register log!");
        }
      }
    );
    next(); // ✅ important to continue the request
  };
}

module.exports = { logReqRes };
