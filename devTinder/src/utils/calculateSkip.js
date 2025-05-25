const calculateSkip = (page, limit) =>{
    return (page - 1) * limit
}

module.exports = calculateSkip