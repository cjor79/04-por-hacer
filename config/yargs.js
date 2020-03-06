const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente de la tarea'
    }
}
const argv = require('yargs')
    .command('listar', 'Muestra todas las tareas')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}