const evenTypeFunctions = require("./evenTypeFunctions")

function addEvenType(req, result) {
    let description = req.body.description
    evenTypeFunctions.addEvenType(description, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

module.exports = { addEvenType: addEvenType }