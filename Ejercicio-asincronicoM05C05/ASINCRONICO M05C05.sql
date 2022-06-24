-- ASINCRONICO M05C05 - Nelson Osnayo

--CREAR BASE DE DATOS
CREATE DATABASE peliculas OWNER postgres;

-- CREAR TABLA PARA PELICULAS
CREATE TABLE peliculas (
    id INTEGER PRIMARY KEY NOT NULL,
    pelicula VARCHAR (100),
    annio_estreno INTEGER,
    director VARCHAR (100)
);

-- CREAR TABLA PARA EL REPARTO
--NOTA:para este ejercicio, id es el id de pelicula relacionado
CREATE TABLE reparto (
    id INTEGER,
    nombre_actor VARCHAR (50),
    FOREIGN KEY (id) REFERENCES peliculas (id)
);
select * from peliculas;
select * from reparto;

--drop table reparto;
--drop table peliculas;


--CARGAR REGISTROS, PELICULAS

COPY peliculas
FROM
    'C:\importar\peliculas-M05C05.csv' DELIMITER ',' CSV HEADER;

--CARGAR REGISTROS, REPARTO

COPY reparto FROM 'C:\importar\reparto-M05C05.csv' DELIMITER ',' CSV;

SELECT * FROM peliculas;
SELECT * FROM reparto;


--rollback;

-- Obtener el ID de la película “Titanic”.
select id
from peliculas
where pelicula = 'Titanic';

-- 4. Listar a todos los actores que aparecen en la película "Titanic".
select nombre_actor
from reparto
join peliculas on reparto.id = peliculas.id
where pelicula = 'Titanic';

-- 5. Consultar en cuántas películas del top 100 participa Harrison Ford.
select nombre_actor, COUNT (pelicula) AS cantidad_peliculas
from peliculas
JOIN reparto ON peliculas.id = reparto.id
where nombre_actor = 'Harrison Ford'
GROUP by nombre_actor;
   
-- 6. Indicar las películas estrenadas entre los años 1990 y 1999 ordenadas por título de manera ascendente.
select id, pelicula, annio_estreno as estreno
from peliculas
where annio_estreno BETWEEN 1990 AND 1999
ORDER by pelicula ASC;
  
-- 7. Hacer una consulta SQL que muestre los títulos con su longitud, la longitud debe ser nombrado para la consulta como “longitud_titulo”.
select id, pelicula, LENGTH(pelicula) as longitud_titulo
from peliculas;
   
-- 8. Consultar cual es la longitud más grande entre todos los títulos de las películas.
select id, pelicula, LENGTH(pelicula) as longitud_titulo
from peliculas
order by longitud_titulo desc
limit 1;












