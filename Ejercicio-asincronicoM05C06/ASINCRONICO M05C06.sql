-- ASINCRONICO M05C06 - Nelson Osnayo
-- 1. Crear una base de datos llamada blog.
--CREAR BASE DE DATOS
CREATE DATABASE blog OWNER postgres;

-- 2. Crear las tablas indicadas de acuerdo al modelo de datos.
-- CREAR TABLA PARA USUARIO
CREATE TABLE usuario (
    id INTEGER PRIMARY KEY NOT NULL,
    email VARCHAR (50)
);

-- CREAR TABLA PARA EL POST
CREATE TABLE post (
    id INTEGER PRIMARY KEY NOT NULL,
    titulo VARCHAR(50),
    fecha DATE,
    id_usuario INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);

-- CREAR TABLA PARA EL COMENTARIO
CREATE TABLE comentario (
    id INTEGER PRIMARY KEY NOT NULL,
    texto VARCHAR(50),
    fecha DATE,
   	id_post INTEGER,
   	id_usuario INTEGER,
   	FOREIGN KEY (id_usuario) REFERENCES usuario (id),
    FOREIGN KEY (id_post) REFERENCES post (id)
);

select * from usuario;
select * from post;
select * from comentario;

--drop table comentario;
--drop table post;
--drop table usuario;

-- 3. Insertar los siguientes registros.
insert into usuario (id, email) values (1 ,'usuario01@hotmail.com');
insert into usuario (id, email) values (2 ,'usuario02@gmail.com');
insert into usuario (id, email) values (3 ,'usuario03@gmail.com');
insert into usuario (id, email) values (4 ,'usuario04@hotmail.com');
insert into usuario (id, email) values (5 ,'usuario05@yahoo.com');
insert into usuario (id, email) values (6 ,'usuario06@hotmail.com');
insert into usuario (id, email) values (7 ,'usuario07@yahoo.com');
insert into usuario (id, email) values (8 ,'usuario08@yahoo.com');
insert into usuario (id, email) values (9 ,'usuario09@yahoo.com');

insert into post (id, id_usuario, titulo, fecha) values (1, 1, 'Post 1: Esto es malo', '2020-06-29');
insert into post (id, id_usuario, titulo, fecha) values (2, 5, 'Post 2: Esto es malo', '2020-06-20');
insert into post (id, id_usuario, titulo, fecha) values (3, 1, 'Post 3: Esto es excelente', '2020-05-30');
insert into post (id, id_usuario, titulo, fecha) values (4, 9, 'Post 4: Esto es bueno', '2020-05-09');
insert into post (id, id_usuario, titulo, fecha) values (5, 7, 'Post 5: Esto es bueno', '2020-07-10');
insert into post (id, id_usuario, titulo, fecha) values (6, 5, 'Post 6: Esto es excelente', '2020-07-18');
insert into post (id, id_usuario, titulo, fecha) values (7, 8, 'Post 7: Esto es excelente', '2020-07-07');
insert into post (id, id_usuario, titulo, fecha) values (8, 5, 'Post 8: Esto es excelente', '2020-05-14');
insert into post (id, id_usuario, titulo, fecha) values (9, 2, 'Post 9: Esto es bueno', '2020-05-08');
insert into post (id, id_usuario, titulo, fecha) values (10, 6, 'Post 10: Esto es bueno', '2020-06-02');
insert into post (id, id_usuario, titulo, fecha) values (11, 4, 'Post 11: Esto es bueno', '2020-05-05');
insert into post (id, id_usuario, titulo, fecha) values (12, 9, 'Post 12: Esto es malo', '2020-07-23');
insert into post (id, id_usuario, titulo, fecha) values (13, 5, 'Post 13: Esto es excelente', '2020-05-30');
insert into post (id, id_usuario, titulo, fecha) values (14, 8, 'Post 14: Esto es excelente', '2020-05-01');
insert into post (id, id_usuario, titulo, fecha) values (15, 7, 'Post 15: Esto es malo', '2020-06-17');

insert into comentario (id, id_usuario, id_post, texto, fecha) values (1, 3, 6, 'Este es el comentario 1', '2020-07-08');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (2, 4, 2, 'Este es el comentario 2', '2020-06-07');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (3, 6, 4, 'Este es el comentario 3', '2020-06-16');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (4, 2, 13, 'Este es el comentario 4', '2020-06-15');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (5, 6, 6, 'Este es el comentario 5', '2020-05-14');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (6, 3, 3, 'Este es el comentario 6', '2020-07-08');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (7, 6, 1, 'Este es el comentario 7', '2020-05-22');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (8, 6, 7, 'Este es el comentario 8', '2020-07-09');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (9, 8, 13, 'Este es el comentario 9', '2020-06-30');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (10, 8, 6, 'Este es el comentario 10', '2020-06-19');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (11, 5, 1, 'Este es el comentario 11', '2020-05-09');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (12, 8, 15, 'Este es el comentario 12', '2020-06-17');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (13, 1, 9, 'Este es el comentario 13', '2020-05-01');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (14, 2, 5, 'Este es el comentario 14', '2020-05-31');
insert into comentario (id, id_usuario, id_post, texto, fecha) values (15, 4, 3, 'Este es el comentario 15', '2020-06-28');

-- 4. Seleccionar el correo, id y título de todos los post publicados por el usuario 5.
select b.email as correo_usuario, a.id as post_id, a.titulo as titulo_post
from post a
JOIN usuario b ON a.id_usuario = b.id
where b.id = 5;

-- 5. Listar el correo, id y el detalle de todos los comentarios que no hayan sido realizados por el usuario con email usuario06@hotmail.com.
select b.email, a.id as id_comentario, a.texto detalle_comentario
from comentario a
JOIN usuario b ON a.id_usuario = b.ID
where b.email <> 'usuario06@hotmail.com';
   
-- 6. Listar los usuarios que no han publicado ningún post.
select usuario.id as usuario_id, email AS email_de_usuarios_sin_post
from usuario
LEFT JOIN post ON usuario.id = post.id_usuario
where post.id_usuario IS NULL;
 
-- 7. Listar todos los post con sus comentarios (incluyendo aquellos que no poseen comentarios).
   
select post.id, post.titulo, post.id_usuario, comentario.texto
from post
LEFT JOIN comentario ON post.id = comentario.id_post
ORDER by post.id ASC;

-- OTRO
select post.id, post.titulo, post.id_usuario,
    CASE
        WHEN comentario.texto IS NULL THEN 'NULL'
        ELSE comentario.texto
    END AS comentarios
from post
LEFT JOIN comentario ON post.id = comentario.id_post
ORDER by post.id ASC;

--otro SOLO LOS LISTA AGRUPADOS
select post.id, post.titulo, post.id_usuario,
    COUNT (comentario.texto) AS cant_comentarios
from post
LEFT JOIN comentario ON post.id = comentario.id_post
GROUP by post.id
ORDER by post.id ASC;


-- ASINCRONICO M05C06 - Nelson Osnayo
-- 8. Listar todos los usuarios que hayan publicado un post en Junio.
select usuario.id , email, to_char(post.fecha, 'MM') as Mes_POST
from usuario
JOIN post ON usuario.ID = post.id_usuario
where to_char(fecha, 'MM') = '06';



