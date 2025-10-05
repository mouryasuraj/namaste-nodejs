const crypto = require('crypto')

const generateRoomId = (userId, toUserId) =>{
    return crypto.createHash("sha256").update([userId, toUserId].sort().join("_=+_")).digest("hex")
}

module.exports = generateRoomId