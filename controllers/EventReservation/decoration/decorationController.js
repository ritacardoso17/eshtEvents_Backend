const decorationFunctions = require("./decorationFunctions")

function addDecoration(req, result) {
    let description = req.body.description
    let img = ""
    decorationFunctions.addDecoration(description, img, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}
function removeDecoration(req, result) {
    let id = req.params.id
    decorationFunctions.removeDecoration(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

module.exports = { addDecoration: addDecoration, removeDecoration:removeDecoration }