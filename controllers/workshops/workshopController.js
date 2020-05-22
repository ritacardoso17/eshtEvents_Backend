const workshopFunctions = require("./workshopFunctions")

function addWorkshops(req, result){
    let description = req.body.description
    let n_vacancies = req.body.n_vacancies
    let date_hour = req.body.date_hour
    let price = req.body.price
    let id_local = req.body.id_local

    workshopFunctions.addWorkshops(description, n_vacancies, date_hour, price, id_local, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function removeWorkshops(req, result) {
    let id = req.params.id
    workshopFunctions.removeWorkshops(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function updateWorkshops(req, result) {
    let id = req.params.id
    let description = req.body.description
    let n_vacancies = req.body.n_vacancies
    let date_hour = req.body.date_hour
    let price = req.body.price
    let id_local = req.body.id_local

    workshopFunctions.updateWorkshops(id, description, n_vacancies, date_hour, price, id_local, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

module.exports = { addWorkshops:addWorkshops, removeWorkshops:removeWorkshops, updateWorkshops:updateWorkshops  }