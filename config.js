module.exports = {
  "port": process.env.connectString,
  "adminAccount": "admin@admin.com",
  "timeout":120000,
  "db": {
    "connecString": process.env.connectString,
    "user": process.env.connectUser,
    "pass": process.env.connectPass,
  },
  "mail": {
    "enable": true,
    "host": "smtp.163.com",
    "port": 465,
    "from": "***@163.com",
    "auth": {
      "user": "***@163.com",
      "pass": "*****"
    }
  }
}