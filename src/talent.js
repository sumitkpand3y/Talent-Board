const fs = require("fs");
const FILE_NAME = "./assets/talents.json";

const talent = {
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  create: function (newData, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        const talents = JSON.parse(data);
        talents.push(newData);
        fs.writeFile(FILE_NAME, JSON.stringify(talents), function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      }
    });
  },
};

module.exports = talent;
