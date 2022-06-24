-- Asincronico M05C07 , Nelson Osnayo

CREATE DATABASE "tienda_de_electronica" WITH OWNER = "postgres";

-- CREAR TABLA CLIENTE
--2. El cliente tiene id, nombre, rut y dirección.
CREATE TABLE cliente (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR (30),
    rut VARCHAR (30),
    direccion VARCHAR (60)
);

-- CREAR TABLA COMPRA
--1. Una Factura pertenece a un cliente.
--5. Para la factura se deberá almacenar el subtotal de la factura, 
--que corresponde a la suma de todos los valores unitarios multiplicado por la cantidad respectiva.
CREATE TABLE compra (
    cod_factura SERIAL PRIMARY KEY NOT NULL,
    id_cliente INTEGER NOT NULL,
    fecha DATE,
    total INTEGER,
    precio_bruto INTEGER,
    iva INTEGER,
    FOREIGN KEY (id_cliente) REFERENCES cliente (id)
);

-- CREAR TABLA CATEGORIA
CREATE TABLE categoria (
    id SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR (30) NOT NULL,
    descripcion VARCHAR (100)
);

-- CREAR TABLA PRODUCTO
--6. Cada producto tiene un id, un nombre, descripción, stock y un valor unitario
--7. Cada producto pertenece a una categoría, la cual tiene un id, el nombre de la categoría y una descripción.
CREATE TABLE producto (
    id SERIAL PRIMARY KEY NOT NULL,
    id_categoria INTEGER NOT NULL,
    nombre VARCHAR (30) NOT NULL,
    stock INTEGER,
    detalle VARCHAR (100),
    valor INTEGER,
    FOREIGN KEY (id_categoria) REFERENCES categoria (id)
);

-- CREAR TABLA LINEA COMPRA
--4. Una factura tiene un listado de productos, con su precio unitario, cantidad, y valor total por producto.
CREATE TABLE linea_compra (
    id_factura INTEGER NOT NULL REFERENCES compra (cod_factura),
    id_producto INTEGER NOT NULL REFERENCES producto (id),
    cantidad INTEGER NOT NULL,
    precio_bruto INTEGER,
    iva INTEGER,
    subtotal INTEGER,
    PRIMARY KEY (id_factura, id_producto)
);
--PARTE 2
-- 1. 3 clientes.
INSERT INTO cliente (nombre, rut, direccion)
VALUES
    ( 'Nelson', '18787109-3', 'mi casa'),
    ( 'Jose', '11111111-1', 'mi casa'),
    ( 'Maria', '22222222-2', 'mi casa');
   
   
-- 2. 2 categorías.
INSERT INTO categoria (nombre, descripcion)
VALUES
    ( 'Perifericos', 'teclados,mouse,etc'),
    ( 'Entretencion', 'Consolas, Juegos, Gamer');
   
-- 3. 5 productos.
INSERT INTO producto ( id_categoria, nombre, stock, detalle, valor)
VALUES
	( 1, 'teclado N1', 10, 'teclados', 15000),
    ( 1, 'teclado N2', 10 ,'teclados', 20000),
    ( 1, 'Mouse N1', 5, 'Gamer', 12000),
    ( 2, 'PS5', 10 , 'Gamer', 350000),
    ( 2, 'PS6', 10, 'Gamer', 600000);
   
-- 4. 3 facturas.
--1 para el cliente 1, con 3 productos diferentes 
INSERT INTO compra VALUES ( 1, 1, '23-06-2022', 0, 0, 0 );
SELECT * FROM COMPRA;
	-- Linea Compra
	-- nota: subtotal, cada producto ya incluye iva
INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 1, 1, 2,
        ( SELECT ((valor * 2) * 1.19) FROM producto WHERE id = 1),
        ( SELECT ((valor * 2) * 0.19) FROM producto WHERE id = 1),
        ( SELECT (valor * 2) FROM producto WHERE id = 1)
    );
SELECT * FROM linea_compra;

	--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 2 WHERE id = 1;
COMMIT;
SELECT * FROM producto;

INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 1, 2, 2,
        ( SELECT ((valor * 2) * 1.19) FROM producto WHERE id = 2),
        ( SELECT ((valor * 2) * 0.19) FROM producto WHERE id = 2),
        ( SELECT (valor * 2) FROM producto WHERE id = 2)
    );
SELECT * FROM linea_compra;

	--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 2 WHERE id = 2;
COMMIT;
SELECT * FROM producto;

INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 1, 3, 2,
        ( SELECT ((valor * 2) * 1.19) FROM producto WHERE id = 3),
        ( SELECT ((valor * 2) * 0.19) FROM producto WHERE id = 3),
        ( SELECT (valor * 2) FROM producto WHERE id = 3)
    );
SELECT * FROM linea_compra;

--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 2 WHERE id = 3;
COMMIT;
SELECT * FROM producto;

--Ejecutar cambios en COMPRA
BEGIN;
	UPDATE compra SET
	    total = ( SELECT SUM (subtotal) FROM linea_compra WHERE id_factura = 1),
    	iva = ( SELECT SUM (iva) FROM linea_compra WHERE id_factura = 1),
    	precio_bruto = ( SELECT SUM (precio_bruto) FROM linea_compra WHERE id_factura = 1)
	WHERE cod_factura = 1;
COMMIT;
SELECT * FROM compra;

--1 para el cliente 2, con 2 productos diferentes
INSERT INTO compra VALUES ( 2, 2, '23-06-2022', 0, 0, 0 );
SELECT * FROM compra;

	-- Linea Compra
	-- nota: subtotal, cada producto ya incluye iva
INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 2, 1, 1,
        ( SELECT ((valor * 1) * 1.19) FROM producto WHERE id = 1),
        ( SELECT ((valor * 1) * 0.19) FROM producto WHERE id = 1),
        ( SELECT (valor * 1) FROM producto WHERE id = 1)
    );
SELECT * FROM linea_compra;

	--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 1 WHERE id = 1;
COMMIT;
SELECT * FROM producto;
--ROLLBACK;
   
INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 2, 2, 1,
        ( SELECT ((valor * 1) * 1.19) FROM producto WHERE id = 2),
        ( SELECT ((valor * 1) * 0.19) FROM producto WHERE id = 2),
        ( SELECT (valor * 1) FROM producto WHERE id = 2)
    );
SELECT * FROM linea_compra;

	--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 1 WHERE id = 2;
COMMIT;
SELECT * FROM producto;

--Ejecutar cambios en COMPRA
BEGIN;
	UPDATE compra SET
	    total = ( SELECT SUM (subtotal) FROM linea_compra WHERE id_factura = 2),
    	iva = ( SELECT SUM (iva) FROM linea_compra WHERE id_factura = 2),
    	precio_bruto = ( SELECT SUM (precio_bruto) FROM linea_compra WHERE id_factura = 2)
	WHERE cod_factura = 2;
COMMIT;
SELECT * FROM compra;

--1 para el cliente 3, con 1 solo producto
INSERT INTO compra VALUES ( 3, 3, '23-06-2022', 0, 0, 0 );
SELECT * FROM compra;
	-- Linea Compra
	-- nota: subtotal, cada producto ya incluye iva
INSERT INTO linea_compra (id_factura, id_producto, cantidad, precio_bruto, iva, subtotal)
VALUES
    ( 3, 5, 1,
        ( SELECT ((valor * 1) * 1.19) FROM producto WHERE id = 5),
        ( SELECT ((valor * 1) * 0.19) FROM producto WHERE id = 5),
        ( SELECT (valor * 1) FROM producto WHERE id = 5)
    );
SELECT * FROM linea_compra;

	--Ejecutar cambios
BEGIN;
	UPDATE producto SET stock = stock - 1 WHERE id = 5;
COMMIT;
SELECT * FROM producto;

--Ejecutar cambios en COMPRA
BEGIN;
	UPDATE compra SET
	    total = ( SELECT SUM (subtotal) FROM linea_compra WHERE id_factura = 3),
    	iva = ( SELECT SUM (iva) FROM linea_compra WHERE id_factura = 3),
    	precio_bruto = ( SELECT SUM (precio_bruto) FROM linea_compra WHERE id_factura = 3)
	WHERE cod_factura = 3;
COMMIT;
SELECT * FROM compra;

-- 5. ¿Cuál es el nombre del cliente que realizó la compra más cara?
SELECT id, nombre, cod_factura, total 
FROM compra INNER JOIN cliente ON id_cliente = id 
ORDER BY total desc limit 1;

-- 6. ¿Cuáles son los nombres de los clientes que pagaron más de $60000? Considere un IVA del 19%
SELECT concat ( id, ' -> ', nombre) AS cliente, rut, cod_factura, total, iva, precio_bruto  
FROM compra INNER JOIN cliente ON id_cliente = id 
WHERE total > 60000 
ORDER BY total DESC;

-- 7. ¿Cuántos clientes han comprado más de 5 productos? Considere la cantidad por producto comprado.
SELECT COUNT(*) AS contar_cliente_mayor_a_5_productos FROM cliente
WHERE id IN ( 
	SELECT id_cliente FROM compra
	JOIN linea_compra ON cod_factura = id_factura
	GROUP BY id_cliente
	HAVING SUM(cantidad) > 5
);

select count(l.isbn) as solicitudes, l.titulo from libro l 
join prestamo p  
on  isbn  = libro_isbn
group by l.isbn , l.titulo, l.pagina
order by solicitudes desc
limit 1;