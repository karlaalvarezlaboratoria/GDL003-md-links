# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Objetivos

El objetivo práctico de este proyecto es que aprendas cómo crear tu propia
**librería** (o biblioteca - _library_) en JavaScript.

## Plan de acción 

El proyecto fue dividido por Historias de usuario, tareas y tareas complementarias y puestas con código de colores. Puedes ver el tablero en el siguiente link de Trello:

[Trello](https://trello.com/b/iHF434Z3/md-links)

La lista de pasos que seguí para desarrollar este proyecto fue la siguiente:
1.- Leer README.md
2.- Dividir el proyecto en Historias de Usuario y tareas complementarias.
3.- Con mis historias de usuario cree un diagrama de flujo, el cuál puedes revisar en la siguiente liga: (aquí va liga de diagrama de flujo)
4.- Investigación inicial de conceptos generales
5.- Investigación inicial por cada historia de usuario
6.- Creación de test y función por cada historia de Usuario
7.- Llamar las funciones y probarlas en la consola.
8.- Actualizar README.md con las acciones realizadas.

### Archivos del proyecto
(
- `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
  
)

- `index.js`: Desde este archivo se exporta la función (`mdLinks`).
- `prueba.js`: Desde este archivo llamo y aplico mis funciones del archivo index.js. 

(
- `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
- `.editorconfig` con configuración para editores de texto.
- `.eslintrc` con configuración para linter.
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
)

- `test/md-links.spec.js` Contiene los tests unitarios para la función
  `mdLinks()`. 