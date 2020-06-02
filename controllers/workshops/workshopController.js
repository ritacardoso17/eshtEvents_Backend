const workshopFunctions = require("./workshopFunctions")

// Utiliza as funções de workshops criadas e trata dos seus erros
function addWorkshops(req, result) {
    let description = req.body.description
    let n_vacancies = req.body.n_vacancies
    let date_hour = req.body.date_hour
    let price = req.body.price
    let id_local = req.body.id_local
    let img = req.file
    workshopFunctions.addWorkshops(description, n_vacancies, date_hour, price, id_local, img.path, (error, sucess) => {
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
    let img = req.file
    workshopFunctions.updateWorkshops(description, n_vacancies, date_hour, price, id_local,img.path,  id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}

function getWorkshops(req, result) {

    workshopFunctions.getWorkshops((error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
function getWorkshopsId(req, result) {
    let id = req.params.id

    workshopFunctions.getWorkshopsId(id, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
module.exports = { addWorkshops: addWorkshops, removeWorkshops: removeWorkshops, updateWorkshops: updateWorkshops, getWorkshops: getWorkshops, getWorkshopsId: getWorkshopsId }