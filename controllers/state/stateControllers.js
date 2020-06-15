const stateFunctions = require("./stateFunctions")

function getStateId(req, result) {
    let id = req.params.id

    stateFunctions.getStateId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = {
    getStateId:getStateId
}
