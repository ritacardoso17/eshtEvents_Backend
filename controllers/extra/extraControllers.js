const extraFunctions = require("./extraFunctions")

function addExtra(req, result) {
    let name = req.body.name
    extraFunctions.addExtra(name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function removeExtra(req,result){
    let id = req.params.id
    extraFunctions.removeExtra(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function updateExtra(req,result) {
    let name = req.body.name
    let id = req.params.id
    extraFunctions.updateExtra(name,id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { addExtra: addExtra, removeExtra:removeExtra, updateExtra:updateExtra }
