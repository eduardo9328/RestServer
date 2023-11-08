const express = require('express');
const cors = require('cors')


class Server {

    constructor()
    {
        // Hacemos una referencia a la instacia de express
        this.app = express()
        // Definimos el puerto del archivo .ENV
        this.port = process.env.PORT || 3000

        // Definimos la ruta
        this.routeG = '/api/usuarios'
        // this.productos = '/api/prb'
        // this.registro = '/api/rgt'
        // this.consulta = '/api/cst'
        

        // Middlewares
        this.middlewares();
        
        // llamamos al metodo de las rutas 
        this.routes();
    }

    middlewares()
    {

         // static señala la carpeta public en el archivo index 
         this.app.use( express.static( 'public' ) );
         this.app.use( cors() )

         // json para que el server respopnda en ese formato
         this.app.use( express.json() )

    }

    routes()
    {
        // hacemos referencia a la ruta del constructor
        // llamamos la configuracion de la ruta especificada
        this.app.use( this.routeG, require('../routes/usuarios'));
        // this.app.use( this.productos, require('../routes/productos') );
        // this.app.use( this.registro, require('../routes/registro') );
        // this.app.use( this.consulta, require('../routes/consulta') );
        

    }
    // Metodo, referencia al puerto con callback
    listes()
    {
        this.app.listen( this.port , () => {
            console.log(`app corriendo el puerto ${ this.port }`);
        })
    }
}



module.exports = Server;
