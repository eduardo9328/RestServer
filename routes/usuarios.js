const { Router } = require('express');
const { UsuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete} = require('../controllers/usuariosControllers');

const router = Router();




router.get('/', UsuariosGet )
router.post('/', usuariosPost )
router.put('/:id', usuariosPut )
router.delete('/:id', usuariosDelete )



module.exports = router;