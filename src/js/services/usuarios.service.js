
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
        return this.$http({ method: "GET", url: '/usuarios' })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    actualizarUsuarios(usuarios) {
        return this.$http({ method: "PUT", url: '/usuarios', data: usuarios })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    eliminarUsuarios(id) {
        return this.$http({ method: "DELETE", url: `/usuarios/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerUnoUsuarios(id) {
        return this.$http({ method: "GET", url: `/usuarios/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
        }
    }
}

export default usuariosService;
