-- EXAMEN M05 , Nelson Osnayo

create database biblioteca
-- N01. Se registra una única dirección y teléfono para cada socio.
create table persona
(
	nombre varchar(20),
	apellido varchar(20)
)

create table socio 
(
	rut varchar(20) primary key,
	direccion varchar (50) unique,
	telefono varchar (20) unique
) inherits (persona);

-- N04. El número único del autor es un correlativo interno que maneja la biblioteca para identificarlos y facilitar la búsqueda.
create table autor
(
	cod serial primary key not null,
	annio_nacimiento integer,
	annio_muerte INTEGER,
	tipo VARCHAR(20) NOT null
) inherits (persona);

select * from persona;
select * from socio;
select * from autor;


-- N02. El ISBN (International Standard Book Number), es un número de 13 cifras que identifica de una manera única a cada libro o producto de editorial publicado.
-- N03. Para este ejercicio, asumirá que la biblioteca posee un ejemplar de cada libro. (check para ese unico ejemplar insertado)
create table libro(
	isbn varchar(20) primary key check(length(isbn) = 13),
	titulo varchar(40), 
	pagina int, 
	stock INT CHECK (stock >= 0)
);

-- N04. Un libro tiene al menos un autor principal, puede tener además registrado un coautor.
create table autor_libro(
	autor_cod serial references autor(cod),
	libro_isbn varchar(20) references libro(isbn),
	primary key (autor_cod, libro_isbn)
);

-- N05 Un socio sólo puede pedir un libro a la vez.
CREATE TABLE prestamo
(
	socio_rut varchar(20) references socio(rut),
	libro_isbn varchar(20) references libro(isbn),
	fecha_prestamo date,
	fecha_devolucion date,
	primary key (socio_rut, libro_isbn)  	
);
select * from prestamo ;
--and fecha_prestamo > (select p.fecha_devolucion from prestamo p
--   							where socio_rut  = p.socio_rut
--   							order by p.fecha_devolucion desc
--   							limit 1
--   					)
drop table autor_libro;
drop table prestamo;
drop table libro;
drop table autor;

-- PARTE02 Se deben insertar los registros en las tablas correspondientes

INSERT INTO socio
VALUES
    ( 'Juan', 'Soto', '1111111-1', 'Avenida 1, Santiago', '911111111'),
    ( 'Ana', 'Pérez', '2222222-2', 'Pasaje 2, Santiago', '922222222'),
    ( 'Sandra', 'Aguilar', '3333333-3', 'Avenida 2, Santiago', '933333333'),
    ( 'Esteban', 'Jerez', '4444444-4', 'Avenida 3, Santiago', '944444444'),
    ( 'Silvana', 'Muñoz', '5555555-5', 'Pasaje 3, Santiago', '955555555');

INSERT INTO autor
VALUES
    ( 'Jose', 'Salgado', 3, 1968, 2020, 'Principal'),
    ( 'Sergio', 'Mardones', 2,  1950, 2012, 'Principal'),
   	( 'Ana', 'Salgado', 4, 1972, NULL,'Coautor'),
    ( 'Andrés', 'Ulloa', 1, 1982, NULL, 'Principal'),
    ( 'Martin', 'Porta', 5, 1976, NULL, 'Principal');

INSERT INTO libro (isbn, titulo, pagina, stock)
values 
    ( '1111111111111', 'Cuentos de Terror', 344, 1),
    ( '2222222222222', 'Poesías Contemporaneas', 167, 1),
    ( '3333333333333', 'Historia de Asia', 511, 1),
    ( '4444444444444', 'Manual de Mecánica', 298, 1);
   
begin;
	update libro set stock = stock + 1 where isbn = '1111111111111';
	update libro set stock = stock + 1 where isbn = '2222222222222';
	update libro set stock = stock + 1 where isbn = '3333333333333';
	update libro set stock = stock + 1 where isbn = '4444444444444';
commit;

INSERT INTO autor_libro 
VALUES
	(3, '1111111111111'),
	(4, '1111111111111'),
	(1, '2222222222222'),
	(2, '3333333333333'),
	(5, '4444444444444');

INSERT INTO prestamo  
values  
	('1111111-1', '1111111111111', '2020-01-20', '2020-01-27'),
	('5555555-5', '2222222222222', '2020-01-20', '2020-01-30'),
	('3333333-3', '3333333333333', '2020-01-22', '2020-01-30'),
	('4444444-4', '4444444444444', '2020-01-23', '2020-01-30'),
	('2222222-2', '1111111111111', '2020-01-27', '2020-02-04'),
	('1111111-1', '4444444444444', '2020-01-31', '2020-02-12'),
	('3333333-3', '2222222222222', '2020-01-31', '2020-02-12');

-- PARTE03 P01. Mostrar todos los libros que posean menos de 300 páginas
select * from libro where pagina  < 300;

-- PARTE03 P02. Mostrar todos los autores que hayan nacido después del 01-01-1970.
select * from autor where annio_nacimiento  > '1970';

-- PARTE03 P03. ¿Cuál es el libro más solicitado?
select count(l.isbn) as solicitudes, l.titulo from libro l 
join prestamo p  
on  isbn  = libro_isbn
group by l.isbn , l.titulo, l.pagina
order by solicitudes desc
limit 1;

-- PARTE03 P04. Si se cobrara una multa de $100 por cada día de atraso, mostrar cuánto debería pagar cada usuario que entregue el préstamo después de 7 días.
select nombre, apellido , (((fecha_devolucion  - fecha_prestamo))) as Dias_de_Retraso, (((fecha_devolucion  - fecha_prestamo)-7)*100)  as multa  from prestamo
join socio
on socio_rut = rut ;