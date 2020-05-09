const componentFunctions = require("./componentFunction")

function addComponent(req, result) {
    let name = req.body.name
    componentFunctions.addComponent(name, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })

}

module.exports = { addComponent: addComponent }
