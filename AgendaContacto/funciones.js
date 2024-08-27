const guardarContacto = (db, contacto) => {
    if (contacto.nombre == "" || contacto.numero == "") {
        console.log("Error, nombre o numero incorrectos")

      /*  let mensajeError = document.createElement('p')
        mensajeError.innerHTML = "error, dato vacio"*/
    } else {
        db.setItem(contacto.id, JSON.stringify(contacto))
        window.location.href = '/'
    }

}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    // console.log(claves)

    if (claves == "") {
        let mensajeVacio = document.createElement('p')
        mensajeVacio.innerHTML = "no hay contactos"
        mensajeVacio.classList.add("mensajeVacio")
        parentNode.appendChild(mensajeVacio)
    } else {
        for (claves of claves) {
            let contacto = JSON.parse(db.getItem(claves))
            crearContacto(parentNode, contacto, db)
        }
    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = ' delete_forever'

    divContacto.classList.add('Contacto')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'

    }


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)


}