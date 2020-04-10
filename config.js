module.exports = {
  "port": "3000",
  "adminAccount": "admin@admin.com",
  "timeout":120000,
  "db": {
    "connecString": process.env.connectString,
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": process.env.PORT,
    "user": process.env.connectUser,
    "pass": process.env.connectPass,
    "authSource": "yapi"
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