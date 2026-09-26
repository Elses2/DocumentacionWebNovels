Hacer una pagina web para la biblioteca Elses, que me permita visualizar el catalogo de novelas que ellos tienen
en su servidor en una base de datos relacional mariadb, esto para enriquecer a la sociedad culturalmente y que las personas de toda indole sean capaces de disfrutar un buen catalogo de novelas de forma gratuita. La forma de visualizar las novelas sera por capitulos, como esta hecha la db, un maximo de 4000 caracteres por capitulo esto porque la db que nos probeen esta hecha asi.

Partes interesadas:

rector de la biblioteca Elses: Juan Henrique.
-- Es el encargado de aceptar o rechazar los entregableses y el representate de la biblioteca Elses

Pm: Eber Chiecher
-- Estudiante en administracion de empresas, su funcion es ser el punto de contacto de todas las partes interesadas y dirigir y gestionar el proyecto.

DiseñadoraUx: Delia Lucero
-- Estudiante de diseño grafico encargada de realizar en penpot, el diseño de todas los atomos, moleculas y organismos, tanto para desktop como para movil.

backend: estudiante de ingenieria en sistemas marcos Aurelio:
-- Encargado de configurar la vps dada por la institucion y crear y diseñar la apirest con java spring, ademas de encargarse de hacer las pruebas de integracion pruebas de cargas y de estress.

frontendReact estudiante de ingenieria en sistemas Aristoteles: Encargado de realizar la aplicaciono web con react.

Usuario Final: Usuarios mayores a 16 años que quieran disfrutar una novela de forma gratuita.

Entregables:

- Configuracion de la vps para otorgada por la biblioteca elses para el frontend en react, para el uso del producto creado que en este caso es la pagina web de elsesnovels usando nginx

- Configuracion de la vps para alojar la apirest, creada con spring boot.

- Creacion de api rest que me permitira acceder a la base de datos con mariadb.

- Guardar cache como ultimo capitulo donde se quedo el usuario usando una cookie
  --- Lo que no hace es tener persistencia de cache, si la apirest se apaga se pierde la cache que vive en memoria ram.
  --- Lo que no hace es tener persistencia de cache, si la apirest se apaga se pierde la cache que vive en memoria ram.

- Entregar varios diseños hechos con penpot tanto para la version de celular como para escritorio, esperar aceptacion(respuesta ) del rector Juan Henrique

- ndvar tendra un buscador donde tendra un filtros por categorias de novelas, habra una pagina para cada categoria, todo paginado una pagina por 20 novelas esto para que el cliente(navegador web) del usuario final no se quede sin recursos computacionales.

costo del proyecto:

El costo economico del proyecto es de 0$ todos los desarrolladores eberchiecher delia lucero y marcos aurelio, son estudiantes haciendo una pasantia no paga.

El costo es puramente computacional, se supone que nos daran una vps para para el frontend con nginx 3 gb de ram y 4 nucleos de 3 GHZ por el costo computacional para eso ilusorio.

EL costo computacional que debemos prestar atencion es el costo computacional de la vps dada por la instutucion que sera de 10 gb de ram con 8 nucleos de 3GHZ.

costo de tiempo: 2 meses despues de la aceptacion del acta e constitucion. Tiempo optimo 1 mes, tiempo limite 2 meses.

costo 800 dolares de tokens de ia: 200 dolares para los 3 desarrolladores y el pm en tokens de ia que necesiten usando openRouter

El sistema debera ser capaz de aguantar la peticion de un capitulo de 10.000 mil usuarios en simultaneo.

Cosa que no se hara en este proyecto implementar sistemas como redis para la cache.

Restriccion: los esquemas de la db dada no tiene tablas de usuarios o de favoritos o mas vistos. solo tiene las novelas con una url para la imagen de novela y divididas en capitulos no mas de 4000 caracteres que son el equivalente de 5 paginas.

cosas que no hace el producto, modificar la base de datos mariadb.

requisito: Diseñar la API para responder correctamente con caché vacío (arranque en frío)
