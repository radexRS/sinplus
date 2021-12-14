
function admin( req, res, next ){
    usuario = req.session.usuario
    if (req.session.usuario != undefined){
        console.log("req.session.usuario", req.session.usuario)
        if (usuario.nome == "admin") {
            next()
            }else {
            res.redirect("/index")
        }
    }
}

module.exports = admin