const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const area = document.getElementById('area')
const usuario = document.getElementById('usuario')
const edad = document.getElementById('edad')
const direccion = document.getElementById('direccion')
const email = document.getElementById('email')

let datos = []
class Usuario {
    nombres
    apellidos
    area
    usuario
    edad
    direccion
    email

    constructor(nombres, apellidos, area, usuario, edad, direccion, email) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.area = area
        this.usuario = usuario
        this.edad = edad
        this.direccion = direccion
        this.email = email
    }
}
if (localStorage.getItem('datos') == null) {
    datos = [...datos]
    localStorage.setItem('datos', JSON.stringify(datos))
} else {
    datos = JSON.parse(localStorage.getItem('datos'))
}

function agregarUsuario() {
    let user = new Usuario(nombres.value, apellidos.value, area.value, usuario.value, edad.value, direccion.value, email.value)
    datos.push(user)
    console.log(datos)
    datos = JSON.parse(localStorage.getItem('datos'))
    datos.push(user)
    localStorage.setItem('datos', JSON.stringify(datos))
}

enviar.addEventListener('click', () => {
    if (nombres.value != '' && apellidos.value != '' && area.value != '' && usuario.value != '' && edad.value != '' && direccion.value != '' && email.value != '') {
        const personaEncontrada = datos.filter(persona => persona.usuario === usuario.value);
        if (personaEncontrada.length === 0) {
            agregarUsuario()
            alert('Registro exitoso')
            window.location.assign("../index.html")
        } else {
            alert('usuario ya esta en uso')
        }
    }
})

