const {silverMemPrice, goldMemPrice} = require("../utils/constant")


const getAmount = (type) =>{
    return type==="silver" ? silverMemPrice : type==="gold" ? goldMemPrice : 0
}

module.exports = getAmount