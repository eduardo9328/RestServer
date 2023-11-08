const { response, request } = require( 'express' )


// GET  GET  GET  GET  GET  GET  GET  GET  GET  GET 

const UsuariosGet = ( req = request, res = response ) => {
    
    const { q, nombre = "no name", apikey, page = 1, limit } = req.query

    res.json({ 
        msg: 'get API - controllers ',
        q,
        nombre,
        apikey,
        page,
        limit   

    })
}


// POST  POST  POST  POST  POST  POST  POST  POST  

const usuariosPost = ( req, res ) => 
{

    const body = req.body

    res.json({
        msg: 'post API - controllers',
        body
    })
}

// PUT  PUT  PUT  PUT  PUT  PUT  PUT  PUT  PUT  PUT  

const usuariosPut = ( req, res ) => 
{
    const id = req.params.id;
    
    res.json({
        msg: 'put API - controllers',
        id
    })
}


// DELETE  DELETE  DELETE  DELETE  DELETE  DELETE 

const usuariosDelete = ( req, res ) => 
{
    const { id } = req.params

    res.json({
        msg: 'delete API - controllers',
        id
    })
}

// const productosGet = ( req, res ) => 
// {

//     res.json({

//         msg: 'get API - controllers producto',
        
//     })
// }

// const ResgistroPdt = ( req, res ) => 
// {

//     res.json({
        
//         msg: 'get API - controllers registro',
        
//     })
// }

// const consulta = ( req, res ) => 
// {

//     res.json({
        
//         msg: 'get API - controllers consulta',
        
//     })
// }



module.exports = {

    UsuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
    // productosGet,
    // ResgistroPdt,
    // consulta
    
}