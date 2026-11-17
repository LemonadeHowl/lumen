// Índice de temas de SQL. n = orden en el índice. El orden del array es el de reparto de las preguntas
// que no indican su tema con tp: el último tema recoge el resto.
// Formato de los apuntes: "## " título · "- " lista · "$ " fórmula · "> " nota · "| " línea de código · **negrita**
window.TOPICS = window.TOPICS || {};
TOPICS.sql = [
  { id: 'avanzado', n: 5, name: 'SQL avanzado', sum: 'Subconsultas, CTE, CASE, funciones de ventana, índices y transacciones.',
    match: /ventana|orden lógico|UNION|índice|PARTITION|OVER \(|NOT IN|no han hecho/i,
    k: [['Subconsulta', 'Consulta dentro de otra; puede ir en WHERE, FROM o SELECT.'], ['Subconsulta correlacionada', 'La que usa columnas de la consulta exterior y se evalúa una vez por cada fila.'], ['EXISTS', 'Verdadero si la subconsulta devuelve al menos una fila.'], ['CTE', 'Consulta con nombre definida con WITH, que hace más legible una consulta compleja.'], ['CASE', 'Expresión condicional: CASE WHEN condición THEN valor ELSE otro END.'], ['UNION y UNION ALL', 'Unen resultados; UNION elimina duplicados y UNION ALL los conserva.'], ['Función de ventana', 'Calcula sobre un grupo de filas sin colapsarlas: función() OVER (PARTITION BY … ORDER BY …).'], ['ROW_NUMBER, RANK, DENSE_RANK', 'Numeran filas: sin empates · con empates y saltos · con empates y sin saltos.'], ['Orden lógico de evaluación', 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT'], ['Índice', 'Estructura que acelera las búsquedas a costa de encarecer las escrituras.'], ['Transacción', 'Conjunto de operaciones que se aplican todas o ninguna (COMMIT / ROLLBACK).'], ['ACID', 'Atomicidad, consistencia, aislamiento y durabilidad: las garantías de una transacción.'], ['Normalización', 'Organizar los datos en tablas sin redundancia para evitar incoherencias.']],
    notes: `
## Subconsultas
Una subconsulta es una consulta escrita dentro de otra, entre paréntesis. Puede aparecer en tres sitios.

En el **WHERE**, para comparar con un valor calculado o con una lista:
| SELECT nombre FROM productos
| WHERE precio > (SELECT AVG(precio) FROM productos);
|
| SELECT nombre FROM clientes
| WHERE id IN (SELECT cliente_id FROM pedidos);
En el **FROM**, como si fuera una tabla (necesita un alias):
| SELECT AVG(total)
| FROM (SELECT cliente_id, SUM(cantidad) AS total
|       FROM pedidos GROUP BY cliente_id) AS t;
En el **SELECT**, para añadir un valor calculado a cada fila:
| SELECT nombre, precio - (SELECT AVG(precio) FROM productos) AS diferencia
| FROM productos;

## Subconsultas correlacionadas y EXISTS
Una subconsulta **correlacionada** usa columnas de la consulta exterior, de modo que se evalúa una vez por cada fila. **EXISTS** comprueba si devuelve alguna fila:
| SELECT c.nombre FROM clientes c
| WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id);
Con NOT EXISTS se obtienen los clientes sin pedidos.
> Cuidado: NOT IN no devuelve nada si la subconsulta contiene algún NULL, porque la comparación con NULL es «desconocida». NOT EXISTS no tiene ese problema.

## Expresiones de tabla comunes (CTE)
WITH da nombre a una consulta intermedia. El resultado es el mismo que con una subconsulta en el FROM, pero se lee de arriba abajo, paso a paso:
| WITH gasto AS (
|   SELECT cliente_id, SUM(cantidad) AS total
|   FROM pedidos GROUP BY cliente_id
| )
| SELECT c.nombre, g.total
| FROM gasto g JOIN clientes c ON c.id = g.cliente_id
| WHERE g.total > 1;
Se pueden definir varias CTE separadas por comas, y cada una puede usar las anteriores.

## CASE: condiciones dentro de la consulta
CASE devuelve un valor u otro según una condición, fila a fila. Es el «if» de SQL:
| SELECT nombre,
|        CASE WHEN precio >= 100 THEN 'caro'
|             WHEN precio >= 20  THEN 'medio'
|             ELSE 'barato' END AS gama
| FROM productos;
Combinado con SUM permite contar por categorías en una sola fila:
| SELECT SUM(CASE WHEN ciudad = 'Madrid' THEN 1 ELSE 0 END) AS en_madrid,
|        SUM(CASE WHEN ciudad <> 'Madrid' THEN 1 ELSE 0 END) AS fuera
| FROM clientes;

## Unir resultados
UNION apila los resultados de dos consultas que tengan el mismo número de columnas y tipos compatibles:
| SELECT ciudad FROM clientes
| UNION
| SELECT ciudad FROM proveedores;
- **UNION** elimina los duplicados.
- **UNION ALL** los conserva y es más rápido.
- **INTERSECT** devuelve las filas comunes, y **EXCEPT** las que están en la primera consulta pero no en la segunda.

## Funciones de ventana
GROUP BY reduce cada grupo a una sola fila. Las funciones de ventana calculan sobre un grupo de filas **sin colapsarlas**: cada fila conserva su detalle y recibe además el resultado.
| SELECT nombre, ciudad,
|        ROW_NUMBER() OVER (PARTITION BY ciudad ORDER BY nombre) AS puesto
| FROM clientes;
Dentro de OVER:
- **PARTITION BY** divide las filas en grupos (ventanas). Si se omite, la ventana es toda la tabla.
- **ORDER BY** fija el orden dentro de cada ventana.

Funciones habituales:
- **ROW_NUMBER()**: 1, 2, 3, 4… aunque haya empates.
- **RANK()**: los empatados comparten número y se salta el siguiente: 1, 2, 2, 4.
- **DENSE_RANK()**: igual, pero sin saltos: 1, 2, 2, 3.
- **SUM() OVER (ORDER BY …)**: total acumulado.
- **AVG() OVER (PARTITION BY …)**: media del grupo junto a cada fila.
- **LAG()** y **LEAD()**: valor de la fila anterior o siguiente.
| SELECT fecha, cantidad,
|        SUM(cantidad) OVER (ORDER BY fecha) AS acumulado,
|        cantidad - LAG(cantidad) OVER (ORDER BY fecha) AS variacion
| FROM pedidos;
> Patrón «los N primeros de cada grupo»: numera con ROW_NUMBER() dentro de una CTE y filtra fuera con WHERE puesto <= N. No se puede filtrar directamente, porque las funciones de ventana se calculan después del WHERE.

## El orden lógico de evaluación
Aunque se escribe empezando por SELECT, el motor evalúa en este orden:
$ FROM y JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT
Esto explica varias reglas que parecen arbitrarias:
- Un alias definido en SELECT no puede usarse en WHERE, pero sí en ORDER BY.
- WHERE no admite funciones de agregación: los grupos aún no existen. Para eso está HAVING.
- Las funciones de ventana no pueden ir en WHERE.

## Índices
Un índice funciona como el índice alfabético de un libro: permite encontrar filas sin recorrer toda la tabla.
| CREATE INDEX idx_pedidos_cliente ON pedidos (cliente_id);
- Acelera los filtros (WHERE), las uniones (JOIN) y las ordenaciones (ORDER BY) sobre esa columna.
- Ocupa espacio y ralentiza INSERT, UPDATE y DELETE, porque hay que mantenerlo al día.
- La clave primaria ya tiene índice. Conviene crearlos en las claves foráneas y en las columnas por las que se filtra a menudo.
- Aplicar una función a la columna (WHERE UPPER(nombre) = 'ANA') suele impedir que se use el índice.
EXPLAIN muestra el plan que seguirá el motor y permite ver si una consulta usa un índice o recorre la tabla entera.

## Transacciones y ACID
Una transacción agrupa varias operaciones como si fueran una sola. El ejemplo clásico es una transferencia: restar de una cuenta y sumar en otra deben ocurrir las dos o ninguna.
| BEGIN;
| UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
| UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
| COMMIT;          -- confirma los cambios (ROLLBACK los desharía)
Sus garantías se resumen en las siglas **ACID**:
- **Atomicidad**: se aplica todo o nada.
- **Consistencia**: la base pasa de un estado válido a otro.
- **Aislamiento**: las transacciones simultáneas no se interfieren.
- **Durabilidad**: lo confirmado no se pierde, ni aunque se vaya la luz.

## Vistas
Una vista es una consulta guardada con nombre, que se usa como si fuera una tabla. No almacena datos: se recalcula cada vez.
| CREATE VIEW ventas_por_cliente AS
| SELECT cliente_id, SUM(cantidad) AS unidades
| FROM pedidos GROUP BY cliente_id;

## Normalización
Diseñar bien las tablas evita datos repetidos e incoherentes. Las tres primeras **formas normales** lo resumen:
- **1FN**: cada celda contiene un solo valor; nada de listas dentro de una columna.
- **2FN**: cada columna depende de toda la clave primaria, no de una parte.
- **3FN**: cada columna depende solo de la clave, no de otras columnas.
> Ejemplo: guardar la ciudad del cliente en cada pedido incumple la 3FN. Si el cliente se muda, habría que cambiarla en todos sus pedidos. Lo correcto es guardarla una sola vez en la tabla clientes.
` },
  { id: 'modificar', n: 4, name: 'Modificar datos y tablas', sum: 'CREATE TABLE, tipos, restricciones, INSERT, UPDATE y DELETE.',
    match: /UPDATE|DELETE|INSERT/i,
    k: [['CREATE TABLE', 'Define una tabla nueva: sus columnas, tipos y restricciones.'], ['Tipos de datos', 'INTEGER, REAL o DECIMAL, TEXT o VARCHAR, DATE, BOOLEAN.'], ['Clave primaria', 'Columna que identifica de forma única cada fila; no admite NULL ni repetidos.'], ['Clave foránea', 'Columna que apunta a la clave primaria de otra tabla.'], ['NOT NULL, UNIQUE, DEFAULT, CHECK', 'Obligatoria · sin repetidos · valor por defecto · condición que debe cumplirse.'], ['INSERT INTO', 'Añade filas nuevas: INSERT INTO t (cols) VALUES (…).'], ['UPDATE … SET', 'Modifica filas existentes; sin WHERE las cambia todas.'], ['DELETE FROM', 'Borra filas; sin WHERE vacía la tabla.'], ['DROP TABLE', 'Elimina la tabla entera, con su estructura y sus datos.'], ['ALTER TABLE', 'Cambia la estructura de una tabla existente (añadir o quitar columnas).'], ['Integridad referencial', 'Garantía de que toda clave foránea apunta a una fila que existe.'], ['DDL y DML', 'DDL define la estructura (CREATE, ALTER, DROP); DML maneja los datos (SELECT, INSERT, UPDATE, DELETE).']],
    notes: `
## Dos familias de instrucciones
SQL no solo consulta. Sus instrucciones se agrupan en dos familias:
- **DDL** (lenguaje de definición de datos): crea y cambia la estructura. CREATE, ALTER, DROP.
- **DML** (lenguaje de manipulación de datos): trabaja con el contenido. SELECT, INSERT, UPDATE, DELETE.

## Crear tablas
Una tabla se define indicando sus columnas, el tipo de cada una y sus restricciones:
| CREATE TABLE clientes (
|   id      INTEGER PRIMARY KEY,
|   nombre  TEXT NOT NULL,
|   email   TEXT UNIQUE,
|   ciudad  TEXT DEFAULT 'Madrid'
| );

## Tipos de datos
Cada columna admite un solo tipo de dato. Los nombres varían algo entre sistemas, pero las familias son las mismas:
- **Enteros**: INTEGER, BIGINT.
- **Decimales**: REAL o FLOAT (aproximados) y DECIMAL(10, 2) (exactos; los adecuados para el dinero).
- **Texto**: TEXT, VARCHAR(100).
- **Fecha y hora**: DATE, TIMESTAMP. Se escriben como texto con formato 'AAAA-MM-DD', que además ordena bien alfabéticamente.
- **Lógico**: BOOLEAN.

## Restricciones
Las restricciones son reglas que la base de datos hace cumplir por ti. Rechaza cualquier dato que las incumpla:
- **PRIMARY KEY**: identificador único de cada fila. No admite repetidos ni NULL.
- **NOT NULL**: la columna es obligatoria.
- **UNIQUE**: no puede haber dos filas con el mismo valor.
- **DEFAULT**: valor que se usa si no se indica otro.
- **CHECK**: condición que debe cumplirse, como CHECK (precio >= 0).
- **FOREIGN KEY**: el valor debe existir en otra tabla.

## Claves primarias y foráneas
La **clave primaria** identifica cada fila sin ambigüedad. Lo habitual es un número que no significa nada (id) y que nunca cambia, mejor que un dato real como el nombre o el correo.

Una **clave foránea** guarda el valor de la clave primaria de otra tabla, y así relaciona las dos:
| CREATE TABLE pedidos (
|   id          INTEGER PRIMARY KEY,
|   cliente_id  INTEGER NOT NULL,
|   producto_id INTEGER NOT NULL,
|   cantidad    INTEGER CHECK (cantidad > 0),
|   fecha       TEXT,
|   FOREIGN KEY (cliente_id)  REFERENCES clientes (id),
|   FOREIGN KEY (producto_id) REFERENCES productos (id)
| );
La base de datos garantiza la **integridad referencial**: no deja crear un pedido para un cliente que no existe, ni borrar un cliente que todavía tiene pedidos (salvo que se indique ON DELETE CASCADE, que borra también sus pedidos).

## Tipos de relaciones
- **Uno a muchos**: un cliente tiene muchos pedidos. La clave foránea va en el lado «muchos» (pedidos.cliente_id).
- **Muchos a muchos**: un alumno cursa varias asignaturas y cada asignatura tiene varios alumnos. Se resuelve con una tabla intermedia que guarda parejas de claves foráneas.
- **Uno a uno**: poco frecuente; suele indicar que las dos tablas podrían ser una.

## Insertar filas
| INSERT INTO clientes (id, nombre, ciudad)
| VALUES (5, 'Eva', 'Bilbao');
Se pueden insertar varias filas a la vez, o el resultado de una consulta:
| INSERT INTO clientes (id, nombre, ciudad)
| VALUES (6, 'Iván', 'Vigo'), (7, 'Sara', 'Cádiz');
|
| INSERT INTO clientes_madrid (id, nombre)
| SELECT id, nombre FROM clientes WHERE ciudad = 'Madrid';
Es buena práctica nombrar siempre las columnas: la instrucción sigue funcionando aunque después se añadan columnas a la tabla. Las columnas que no se nombran reciben su valor por defecto o NULL.

## Modificar filas
| UPDATE productos
| SET precio = 12
| WHERE id = 4;
Se pueden cambiar varias columnas separándolas con comas, y el nuevo valor puede calcularse a partir del antiguo:
| UPDATE productos
| SET precio = precio * 1.10, nombre = UPPER(nombre)
| WHERE precio < 20;

## Borrar filas
| DELETE FROM pedidos
| WHERE fecha < '2026-01-01';
> Regla de oro: antes de un UPDATE o un DELETE, ejecuta un SELECT con el mismo WHERE para ver exactamente qué filas vas a tocar. Sin WHERE, la instrucción afecta a **toda** la tabla, y no hay papelera.
Si la base de datos admite transacciones, ejecuta los cambios delicados entre BEGIN y COMMIT: si el resultado no es el esperado, ROLLBACK lo deshace.

## Borrar, vaciar y eliminar
- **DELETE FROM tabla**: borra filas (todas, si no hay WHERE). La tabla sigue existiendo.
- **TRUNCATE TABLE tabla**: vacía la tabla de golpe, más rápido que DELETE. No existe en SQLite.
- **DROP TABLE tabla**: elimina la tabla entera, con su estructura.

## Cambiar la estructura
ALTER TABLE modifica una tabla que ya existe:
| ALTER TABLE clientes ADD COLUMN email TEXT;
| ALTER TABLE clientes RENAME COLUMN ciudad TO localidad;
| ALTER TABLE clientes DROP COLUMN email;

## Dialectos
SQL es un estándar, pero cada sistema (SQLite, PostgreSQL, MySQL, SQL Server, Oracle) añade detalles propios: nombres de tipos, funciones de fecha, la forma de limitar filas o de generar identificadores automáticos. Lo que aprendes aquí vale para todos; los detalles se consultan en la documentación de cada uno. Los ejercicios de Lumen se ejecutan sobre **SQLite**.
` },
  { id: 'joins', n: 3, name: 'Unir tablas (JOIN)', sum: 'Relacionar datos de varias tablas: INNER, LEFT y otros tipos de unión.',
    match: /JOIN|fecha de cada pedido|importe total/i,
    k: [['INNER JOIN', 'Devuelve solo las filas con coincidencia en ambas tablas.'], ['LEFT JOIN', 'Devuelve todas las filas de la tabla izquierda; si no hay pareja, NULL a la derecha.'], ['RIGHT y FULL JOIN', 'RIGHT conserva todas las de la derecha; FULL, todas las de ambas.'], ['CROSS JOIN', 'Producto cartesiano: todas las combinaciones de filas de las dos tablas.'], ['Condición ON', 'Indica qué columnas relacionan las dos tablas.'], ['Alias de tabla', 'Nombre corto para una tabla dentro de la consulta: FROM pedidos p.'], ['Anti-join', 'LEFT JOIN … WHERE derecha.id IS NULL: filas de la izquierda sin pareja.'], ['Autounión', 'Unir una tabla consigo misma usando dos alias distintos.'], ['ON frente a WHERE', 'En un LEFT JOIN, filtrar la tabla derecha en WHERE elimina las filas sin pareja; en ON las conserva.'], ['Multiplicación de filas', 'Tras un JOIN uno a muchos, la fila del lado «uno» aparece una vez por cada pareja.']],
    notes: `
## Por qué hay varias tablas
En una base de datos relacional la información se reparte en tablas para no repetirla: los datos de un cliente se guardan una sola vez, y cada pedido solo anota su cliente_id. Así, si el cliente cambia de ciudad, basta con modificar una fila.

El precio es que la información queda troceada. Para reunirla de nuevo se usa **JOIN**, que combina filas de dos tablas según una condición.

En los ejercicios, pedidos.cliente_id apunta a clientes.id y pedidos.producto_id apunta a productos.id.

## INNER JOIN
Combina las filas de dos tablas que cumplen la condición indicada en ON. Las filas sin pareja quedan fuera:
| SELECT c.nombre, p.fecha
| FROM pedidos p
| JOIN clientes c ON c.id = p.cliente_id;
Escribir JOIN a secas equivale a INNER JOIN. Las letras p y c son **alias**: abrevian el nombre de la tabla y aclaran de cuál procede cada columna.

Para entenderlo, imagina que el motor recorre los pedidos uno a uno y, para cada uno, busca el cliente cuyo id coincide con su cliente_id. El resultado es una tabla más ancha, con las columnas de ambas.
> En los datos de práctica, Pau no tiene pedidos, así que no aparece en un INNER JOIN entre clientes y pedidos.

## LEFT JOIN
Conserva **todas** las filas de la tabla izquierda (la que va antes de la palabra JOIN). Si no hay coincidencia, las columnas de la derecha valen NULL:
| SELECT c.nombre, p.id
| FROM clientes c
| LEFT JOIN pedidos p ON p.cliente_id = c.id;
Ahora Pau sí aparece, con NULL en la columna del pedido.

Dos usos muy frecuentes:
| -- Clientes SIN pedidos (anti-join)
| SELECT c.nombre
| FROM clientes c
| LEFT JOIN pedidos p ON p.cliente_id = c.id
| WHERE p.id IS NULL;
|
| -- Número de pedidos de cada cliente, incluidos los que tienen cero
| SELECT c.nombre, COUNT(p.id) AS pedidos
| FROM clientes c
| LEFT JOIN pedidos p ON p.cliente_id = c.id
| GROUP BY c.id;
En el segundo hay que contar COUNT(p.id) y no COUNT(*): la fila de Pau existe, pero su p.id es NULL y no debe contarse.

## Otros tipos de unión
- **RIGHT JOIN**: como LEFT JOIN, pero conserva todas las filas de la tabla derecha. Se usa poco: basta con invertir el orden de las tablas.
- **FULL JOIN**: conserva todas las filas de ambas tablas.
- **CROSS JOIN**: producto cartesiano, todas las combinaciones posibles. Con 4 clientes y 4 productos, 16 filas.
- **Autounión**: una tabla unida consigo misma con dos alias. Útil para jerarquías, como empleados y sus jefes:
| SELECT e.nombre, j.nombre AS jefe
| FROM empleados e
| LEFT JOIN empleados j ON j.id = e.jefe_id;

## Encadenar varios JOIN
Se pueden unir tantas tablas como haga falta, una tras otra. Cada JOIN añade una tabla al resultado acumulado:
| SELECT c.nombre, pr.nombre, p.cantidad
| FROM pedidos p
| JOIN clientes c   ON c.id  = p.cliente_id
| JOIN productos pr ON pr.id = p.producto_id;
Un buen punto de partida es la tabla que contiene las claves foráneas (aquí, pedidos) e ir colgando de ella las demás.

## JOIN con filtros y agregación
Un JOIN es solo el FROM de la consulta; después se puede filtrar, agrupar y ordenar como siempre:
| SELECT c.nombre, SUM(p.cantidad * pr.precio) AS total
| FROM pedidos p
| JOIN clientes c   ON c.id  = p.cliente_id
| JOIN productos pr ON pr.id = p.producto_id
| WHERE p.fecha >= '2026-01-01'
| GROUP BY c.id
| ORDER BY total DESC;

## ON frente a WHERE
En un INNER JOIN da igual poner una condición en ON o en WHERE. En un LEFT JOIN, no:
| -- Todos los clientes, con sus pedidos de marzo si los tienen
| SELECT c.nombre, p.id FROM clientes c
| LEFT JOIN pedidos p ON p.cliente_id = c.id AND p.fecha >= '2026-03-01';
|
| -- Solo los clientes que tienen pedidos de marzo
| SELECT c.nombre, p.id FROM clientes c
| LEFT JOIN pedidos p ON p.cliente_id = c.id
| WHERE p.fecha >= '2026-03-01';
En el segundo caso, el WHERE descarta las filas en las que p.fecha es NULL, y el LEFT JOIN se comporta como un INNER JOIN.

## Errores frecuentes
- **Olvidar la condición ON**: se obtiene el producto cartesiano. Si el resultado tiene muchísimas más filas de las esperadas, casi siempre es esto.
- **Columnas ambiguas**: si dos tablas tienen una columna con el mismo nombre (id, nombre), hay que escribir tabla.columna.
- **Filas multiplicadas**: si un cliente tiene tres pedidos, aparece tres veces tras el JOIN. Al sumar o contar después, es fácil contar de más. Comprueba siempre cuántas filas esperas.
- **Unir por la columna equivocada**: la condición debe relacionar una clave foránea con la clave primaria a la que apunta.
` },
  { id: 'agregacion', n: 2, name: 'Agregación y agrupación', sum: 'COUNT, SUM, AVG, GROUP BY y HAVING.',
    match: /COUNT|GROUP|grupos|cuántos|más de un cliente|media/i,
    k: [['COUNT(*)', 'Cuenta filas.'], ['COUNT(col) y COUNT(DISTINCT col)', 'COUNT(col) ignora los NULL; COUNT(DISTINCT col) cuenta valores distintos.'], ['SUM, AVG, MIN, MAX', 'Suma, media, mínimo y máximo de una columna; ignoran los NULL.'], ['GROUP BY', 'Forma un grupo por cada valor distinto y calcula un resultado por grupo.'], ['Regla del GROUP BY', 'Toda columna del SELECT que no esté agregada debe aparecer en el GROUP BY.'], ['HAVING', 'Filtra grupos después de agruparlos (WHERE filtra filas antes).'], ['Alias (AS)', 'Da nombre a una columna calculada: SUM(cantidad) AS unidades.'], ['ROUND(x, n)', 'Redondea x a n decimales.'], ['COALESCE(a, b)', 'Devuelve el primer valor que no sea NULL; sirve para sustituir los nulos.']],
    notes: `
## De filas a resúmenes
Hasta ahora cada fila del resultado correspondía a una fila de la tabla. Las **funciones de agregación** hacen otra cosa: toman muchas filas y devuelven un solo valor. Sirven para responder preguntas como «¿cuántos clientes hay?», «¿cuál es el precio medio?» o «¿cuánto se ha vendido de cada producto?».

## Funciones de agregación
- **COUNT(*)**: número de filas.
- **SUM(col)**: suma.
- **AVG(col)**: media.
- **MIN(col)** y **MAX(col)**: mínimo y máximo. Funcionan también con textos y fechas.
| SELECT COUNT(*), AVG(precio), MIN(precio), MAX(precio)
| FROM productos;
Sin GROUP BY, toda la tabla forma un único grupo y el resultado es una sola fila. Se pueden combinar con WHERE, que se aplica antes:
| SELECT COUNT(*) FROM clientes WHERE ciudad = 'Madrid';

## Las tres formas de COUNT
- **COUNT(*)** cuenta todas las filas.
- **COUNT(col)** cuenta las filas en las que esa columna no es NULL.
- **COUNT(DISTINCT col)** cuenta cuántos valores distintos hay.
| SELECT COUNT(*), COUNT(ciudad), COUNT(DISTINCT ciudad)
| FROM clientes;
Con los datos de práctica devuelve 4, 4 y 3: cuatro clientes, todos con ciudad, en tres ciudades distintas.

## Los NULL en las agregaciones
SUM, AVG, MIN y MAX **ignoran** los NULL. Eso tiene consecuencias: AVG calcula la media solo de las filas con valor, no de todas. Si un NULL debe contar como cero, hay que decirlo:
| SELECT AVG(COALESCE(descuento, 0)) FROM pedidos;
COALESCE devuelve el primero de sus argumentos que no sea NULL.

## GROUP BY
Divide las filas en grupos, uno por cada valor distinto de la columna indicada, y aplica la función a cada grupo. El resultado tiene una fila por grupo:
| SELECT ciudad, COUNT(*) AS clientes
| FROM clientes
| GROUP BY ciudad;
Se puede agrupar por varias columnas; entonces hay un grupo por cada combinación distinta:
| SELECT cliente_id, producto_id, SUM(cantidad)
| FROM pedidos
| GROUP BY cliente_id, producto_id;
> Regla: toda columna del SELECT que no esté dentro de una función de agregación debe aparecer en el GROUP BY. Si agrupas por ciudad, no tiene sentido pedir el nombre: cada grupo tiene varios. SQLite lo permite y devuelve uno cualquiera; casi todos los demás sistemas dan error.

## HAVING
WHERE filtra filas **antes** de agrupar, y por eso no puede usar funciones de agregación. HAVING filtra los **grupos** ya formados:
| SELECT ciudad, COUNT(*)
| FROM clientes
| GROUP BY ciudad
| HAVING COUNT(*) > 1;
Si una condición puede ir en WHERE, es mejor ponerla ahí: descarta filas antes y la consulta trabaja menos.

## Todo junto
| SELECT producto_id, SUM(cantidad) AS unidades
| FROM pedidos
| WHERE fecha >= '2026-02-01'      -- 1.º filtra filas
| GROUP BY producto_id             -- 2.º agrupa
| HAVING SUM(cantidad) > 1         -- 3.º filtra grupos
| ORDER BY unidades DESC           -- 4.º ordena
| LIMIT 3;                         -- 5.º recorta
Esta consulta responde: «de los pedidos hechos desde febrero, los tres productos con más unidades, siempre que superen una unidad».

## Alias y columnas calculadas
AS da nombre a una columna calculada. Hace el resultado más claro y permite ordenar por ella:
| SELECT nombre, precio * 1.21 AS precio_con_iva
| FROM productos
| ORDER BY precio_con_iva DESC;
En el SELECT se puede operar con las columnas (+, -, *, /) y usar funciones:
- **ROUND(x, 2)**: redondea a dos decimales.
- **UPPER(t)**, **LOWER(t)**, **LENGTH(t)**: funciones de texto.
- **||**: une textos en SQLite y PostgreSQL (CONCAT en MySQL).
| SELECT ROUND(AVG(precio), 2) AS precio_medio FROM productos;

## Errores frecuentes
- Usar una función de agregación en WHERE. Va en HAVING.
- Olvidar una columna en el GROUP BY.
- Confundir COUNT(*) con COUNT(col) cuando hay nulos.
- Agregar después de un JOIN que multiplica filas: si un cliente aparece tres veces, se cuenta tres veces.
` },
  { id: 'basicas', n: 1, name: 'Consultas básicas', sum: 'SELECT, WHERE, ORDER BY, LIMIT y filtros.',
    match: /./,
    k: [['SELECT … FROM', 'Elige qué columnas se muestran y de qué tabla.'], ['WHERE', 'Filtra las filas que cumplen una condición.'], ['AND, OR, NOT', 'Combinan condiciones; AND se evalúa antes que OR.'], ['BETWEEN a AND b', 'Rango con los dos extremos incluidos.'], ['IN (…)', 'Pertenencia a una lista de valores.'], ['LIKE', "Busca patrones de texto: % sustituye a cualquier secuencia de caracteres y _ a un solo carácter."], ['NULL', 'Ausencia de valor; se comprueba con IS NULL, nunca con =.'], ['ORDER BY', 'Ordena el resultado; ASC ascendente (por defecto), DESC descendente.'], ['LIMIT', 'Se queda con las primeras n filas del resultado.'], ['DISTINCT', 'Elimina filas duplicadas del resultado.'], ['Comillas simples', "Los textos y las fechas se escriben entre comillas simples: 'Madrid'."]],
    notes: `
## Qué es SQL
SQL (Structured Query Language) es el lenguaje con el que se consulta y se modifica una **base de datos relacional**. Lo usan casi todas las aplicaciones que guardan datos: bancos, tiendas, redes sociales, hospitales.

En una base de datos relacional, la información se guarda en **tablas**:
- Cada **fila** (registro) es un elemento: un cliente, un pedido.
- Cada **columna** (campo) es una propiedad: el nombre, la ciudad.
- Las tablas se relacionan entre sí mediante claves.

SQL es un lenguaje **declarativo**: describes qué resultado quieres, no los pasos para obtenerlo. El motor de la base de datos decide cómo hacerlo.

## Las tablas de práctica
En los ejercicios de esta materia trabajas siempre con tres tablas:
- **clientes** (id, nombre, ciudad): 4 filas.
- **productos** (id, nombre, precio): 4 filas.
- **pedidos** (id, cliente_id, producto_id, cantidad, fecha): 5 filas.
Puedes probar cualquier consulta: se ejecuta de verdad.

## SELECT y FROM
Toda consulta empieza indicando qué columnas se quieren y de qué tabla:
| SELECT nombre, ciudad
| FROM clientes;
El asterisco pide todas las columnas. Es cómodo para explorar una tabla que no conoces:
| SELECT * FROM clientes;
Las palabras clave no distinguen mayúsculas, pero es costumbre escribirlas en mayúsculas para que destaquen. El punto y coma marca el final de la instrucción, y los saltos de línea son libres.

## Filtrar con WHERE
WHERE deja pasar solo las filas que cumplen una condición:
| SELECT nombre FROM clientes
| WHERE ciudad = 'Madrid';
Los textos y las fechas van entre **comillas simples**; los números, sin comillas. Operadores de comparación:
- **=** igual, **<>** distinto (también !=).
- **<**, **>**, **<=**, **>=**.

## Combinar condiciones
Con **AND** deben cumplirse las dos condiciones; con **OR**, al menos una; **NOT** invierte:
| SELECT nombre FROM productos
| WHERE precio > 10 AND precio < 100;
AND se evalúa antes que OR, igual que la multiplicación antes que la suma. Cuando se mezclan, lo más seguro es usar paréntesis:
| WHERE ciudad = 'Madrid' OR ciudad = 'Sevilla' AND nombre = 'Ana'     -- Madrid, o bien (Sevilla y Ana)
| WHERE (ciudad = 'Madrid' OR ciudad = 'Sevilla') AND nombre = 'Ana'   -- (Madrid o Sevilla), y además Ana

## Atajos útiles
- **BETWEEN a AND b**: rango con los dos extremos incluidos.
- **IN (…)**: pertenencia a una lista. Evita encadenar varios OR.
- **LIKE**: patrones de texto. El símbolo % sustituye a cualquier secuencia de caracteres y _ a un único carácter.
| WHERE precio BETWEEN 10 AND 50
| WHERE ciudad IN ('Madrid', 'Girona')
| WHERE nombre LIKE 'A%'       -- empieza por A
| WHERE nombre LIKE '%a'       -- termina en a
| WHERE nombre LIKE '%an%'     -- contiene «an»
| WHERE nombre LIKE '_a%'      -- la segunda letra es una a
Todos admiten NOT: NOT IN, NOT LIKE, NOT BETWEEN.

## Los valores nulos
NULL significa «dato desconocido o inexistente». No es cero ni una cadena vacía, y no es igual a nada, ni siquiera a otro NULL. Cualquier comparación con NULL da «desconocido», y la fila no pasa el filtro. Por eso se comprueba con un operador propio:
| WHERE ciudad IS NULL
| WHERE ciudad IS NOT NULL
> Trampa: WHERE ciudad = NULL no da error, pero nunca devuelve filas. Y WHERE ciudad <> 'Madrid' tampoco devuelve las filas con ciudad nula.

## Ordenar
El orden de las filas de una tabla no está garantizado. Si importa, hay que pedirlo:
| SELECT nombre, precio FROM productos
| ORDER BY precio DESC;
- **ASC**: ascendente, de menor a mayor. Es el valor por defecto.
- **DESC**: descendente.
- Se puede ordenar por varias columnas; la segunda desempata a la primera:
| ORDER BY ciudad ASC, nombre DESC

## Limitar el número de filas
LIMIT se queda con las primeras filas. Combinado con ORDER BY permite obtener «los n mayores» o «los n menores»:
| SELECT nombre, precio FROM productos
| ORDER BY precio DESC
| LIMIT 3;
OFFSET salta filas, lo que sirve para paginar: LIMIT 10 OFFSET 20 devuelve las filas 21 a 30.

## Eliminar duplicados
DISTINCT devuelve cada valor distinto una sola vez. Si hay varias columnas, se aplica a la combinación completa:
| SELECT DISTINCT ciudad FROM clientes;

## Comentarios
| -- Esto es un comentario de una línea
| /* Y esto, uno de varias líneas */

## El orden de las cláusulas
Las cláusulas se escriben siempre en este orden; las que no hagan falta se omiten:
$ SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT
` },
];
