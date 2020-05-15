const decorationFunctions = require("./decorationFunctions")

function addDecoration(req, result) {
    let description = req.body.description
    let img = ""
    decorationFunctions.addEvenType(description, img, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

module.exports = { addDecoration: addDecoration }