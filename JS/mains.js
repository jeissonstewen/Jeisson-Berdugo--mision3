const tabla = document.getElementById('tabla')
const tbody = tabla.getElementsByTagName('tbody')[0]
const buscar = document.getElementById('buscar__usuario')
let rows = {}, datos=[]
let tbodyOrdenado
let usuarioEncontrado
let encontrado = false

if (localStorage.getItem('datos') == null) {
    datos = [...datos]
    localStorage.setItem('datos', JSON.stringify(datos))
} else {
    datos = JSON.parse(localStorage.getItem('datos'))
}
function tablaUsuarios() {
    for (let i = 0; i < datos.length; i++) {
        let row = rows[datos[i].area]
        if (!row) {
            row = { area: datos[i].area, count: 1, index: i }
            rows[datos[i].area] = row
        } else {
            row.count++
        }
    }
    
    tbodyOrdenado = ''
    for (let i in rows) {
        let row = rows[i]
        tbodyOrdenado += `<tr>
        <td rowspan="${row.count}">${row.area}</td>`
        for (let i = 0; i < row.count; i++) {
            tbodyOrdenado += `
            <td>${datos[row.index + i].area}
                <td>${datos[row.index + i].nombres} ${datos[row.index + i].apellidos}</td>
                <td>${datos[row.index + i].usuario}
                <td>${datos[row.index + i].email}
                <td>${datos[row.index + i].edad}
            </tr>
            `
        }
    }
    tbody.innerHTML = tbodyOrdenado    
}

function tablaUsuariosBuscar() {
    datos.forEach((e) => {
        if (buscar.value == e.usuario) {
            usuarioEncontrado = e
            encontrado = true
        } else if (buscar.value == '') {
            encontrado = false
            usuarioEncontrado = ''
            tbody.innerHTML= tbodyOrdenado
        }
        console.log(encontrado)
        if (encontrado) {
            tbody.innerHTML = ` 
            <tr>
                <td>${usuarioEncontrado.area}</td>
                <td>${usuarioEncontrado.nombres}</td>
                <td>${usuarioEncontrado.usuario}</td>
                <td>${usuarioEncontrado.email}</td>
                <td>${usuarioEncontrado.edad}</td>
            </tr>
        `
        }
        encontrado = false
    })
}

window.addEventListener('load', function () {
    tablaUsuarios()
})

buscar__usuario.addEventListener('input', () => {
    tablaUsuariosBuscar()
})
