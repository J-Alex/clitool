
class usuariosService {
    constructor($http){
        'ngInject'

        this.$http = $http;
    }
    guardarUsuarios(usuarios) {
        return this.$http({ method: "POST", url: '/usuarios', data: usuarios })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerUsuarios() {

    }
    actualizarUsuarios() {

    }
    eliminarUsuarios() {

    }
    obtenerUnoUsuarios() {

    }
}

export default usuariosService;
