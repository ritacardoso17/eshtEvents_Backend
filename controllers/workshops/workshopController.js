const workshopFunctions = require("./workshopFunctions")

// Utiliza as funções de workshops criadas e trata dos seus erros
function addWorkshops(req, result) {
    let nome = req.body.nome
    let description = req.body.description
    let n_vacancies = req.body.n_vacancies
    let date_hour = req.body.date_hour
    let teacher = req.body.teacher
    let id_local = req.body.id_local
    let img = req.body.img
    workshopFunctions.addWorkshops(nome,description, n_vacancies, date_hour, teacher, id_local, img, (error, sucess) => {
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
    let title = req.body.title
    let description = req.body.description
    let n_vacancies = req.body.n_vacancies
    let date_hour = req.body.date_hour
    let teacher = req.body.teacher
    let id_local = req.body.id_local
    let img = req.body.img
    workshopFunctions.updateWorkshops(id, title, n_vacancies, date_hour, teacher, id_local, description, img, (error, sucess) => {
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
function addUserWorkshops(req, result) {
    let id_user = req.body.id_user
    let id_workshop = req.body.id_workshop
    workshopFunctions.addUserWorkshops(id_user, id_workshop, (error, sucess) => {
        if (error) {
            throw error
            return
        }
        result.json(sucess)
    })
}
module.exports = { 
    addWorkshops: addWorkshops,
    removeWorkshops: removeWorkshops,
    updateWorkshops: updateWorkshops,
    getWorkshops: getWorkshops,
    getWorkshopsId: getWorkshopsId,
    addUserWorkshops: addUserWorkshops
     }