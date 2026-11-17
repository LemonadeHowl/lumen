// Ampliación de SQL: tres tablas de práctica más (departamentos, empleados, ventas) y cuatro temas nuevos:
// funciones de texto y fechas, funciones de ventana, diseño y rendimiento, y casos prácticos.
// Las tablas nuevas se añaden al final de la base de práctica: las tablas originales (clientes, productos, pedidos)
// no cambian, así que los ejercicios anteriores siguen dando los mismos resultados.
(function () {
  const NUNCA = /$^/;
  BANK.sql.schema += ' · departamentos(id, nombre, ciudad) · empleados(id, nombre, apellido, departamento_id, jefe_id, salario, fecha_alta, email) · ventas(id, empleado_id, fecha, importe, region)';
  BANK.sql.setup +=
    "CREATE TABLE departamentos(id INTEGER PRIMARY KEY, nombre TEXT, ciudad TEXT);" +
    "CREATE TABLE empleados(id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT, departamento_id INTEGER, jefe_id INTEGER, salario REAL, fecha_alta TEXT, email TEXT);" +
    "CREATE TABLE ventas(id INTEGER PRIMARY KEY, empleado_id INTEGER, fecha TEXT, importe REAL, region TEXT);" +
    "INSERT INTO departamentos VALUES (1,'Ventas','Madrid'),(2,'Marketing','Barcelona'),(3,'Tecnología','Madrid'),(4,'Recursos Humanos','Sevilla'),(5,'Legal','Valencia');" +
    "INSERT INTO empleados VALUES " +
    "(1,'Elena','Ruiz',3,NULL,5200,'2015-03-01','elena.ruiz@empresa.com')," +
    "(2,'Jorge','Martín',1,1,4100,'2017-06-15','jorge.martin@empresa.com')," +
    "(3,'Sara','Gómez',2,1,3900,'2018-01-10','sara.gomez@empresa.com')," +
    "(4,'Pablo','Díaz',3,1,4300,'2016-09-20','pablo.diaz@empresa.com')," +
    "(5,'Lucía','Torres',1,2,2600,'2020-02-03','lucia.torres@empresa.com')," +
    "(6,'Marc','Puig',1,2,2450,'2021-11-08',NULL)," +
    "(7,'Nuria','Vidal',2,3,2800,'2019-05-27','nuria.vidal@empresa.com')," +
    "(8,'Iker','Etxeberria',3,4,3500,'2019-10-14','iker.etxeberria@empresa.com')," +
    "(9,'Ana Belén','Ortiz',3,4,3500,'2022-04-01','anabelen.ortiz@empresa.com')," +
    "(10,'Raúl','Sanz',4,1,3000,'2023-01-16','raul.sanz@empresa.com')," +
    "(11,'Carla','León',NULL,1,2200,'2024-07-01','carla.leon@empresa.com');" +
    "INSERT INTO ventas VALUES " +
    "(1,5,'2025-01-08',1200,'Centro'),(2,6,'2025-01-15',800,'Norte'),(3,5,'2025-01-22',450,'Centro')," +
    "(4,2,'2025-02-03',2500,'Sur'),(5,6,'2025-02-11',950,'Norte'),(6,5,'2025-02-19',1100,'Centro')," +
    "(7,2,'2025-03-05',3000,'Sur'),(8,5,'2025-03-12',700,'Centro'),(9,6,'2025-03-20',1300,'Norte')," +
    "(10,7,'2025-03-28',600,'Este'),(11,5,'2025-04-02',1500,'Centro'),(12,2,'2025-04-09',1800,'Sur')," +
    "(13,6,'2025-04-17',400,'Norte'),(14,7,'2025-04-25',900,'Este'),(15,5,'2025-05-06',1250,'Centro');";

  const TABLAS = `
## Las tablas nuevas
Además de clientes, productos y pedidos, los ejercicios de este tema usan:
- **departamentos**(id, nombre, ciudad): Ventas, Marketing, Tecnología, Recursos Humanos y Legal (este último sin empleados).
- **empleados**(id, nombre, apellido, departamento_id, jefe_id, salario, fecha_alta, email): 11 personas. Elena (id 1) no tiene jefe; Carla no tiene departamento; Marc no tiene correo.
- **ventas**(id, empleado_id, fecha, importe, region): 15 ventas de enero a mayo de 2025.
`;
  TOPICS.sql.unshift(
  { id: 'funciones', n: 6, name: 'Funciones de texto, números y fechas', sum: 'Concatenar, recortar y buscar en texto; redondear y convertir; trabajar con fechas y valores nulos.', match: NUNCA,
    k: [['||', 'Concatena texto en SQLite y PostgreSQL: nombre || \' \' || apellido. En MySQL se usa CONCAT().'], ['UPPER / LOWER', 'Pasar a mayúsculas o minúsculas.'], ['LENGTH', 'Número de caracteres de un texto.'], ['SUBSTR(t, inicio, n)', 'Trozo de un texto; el primer carácter es la posición 1.'], ['INSTR(t, buscado)', 'Posición donde aparece un texto dentro de otro (0 si no está).'], ['TRIM / REPLACE', 'Quitar espacios de los extremos; sustituir un texto por otro.'], ['ROUND(x, n)', 'Redondear a n decimales.'], ['CAST(x AS INTEGER)', 'Convertir un valor a otro tipo.'], ['COALESCE(a, b, …)', 'Devuelve el primer valor que no sea NULL: ideal para valores por defecto.'], ['NULLIF(a, b)', 'Devuelve NULL si a y b son iguales; evita divisiones entre cero.'], ['strftime', 'Formatea o extrae partes de una fecha en SQLite: strftime(\'%Y\', fecha).'], ['julianday', 'Número de días de una fecha en SQLite; restando dos se obtiene la diferencia en días.']],
    notes: TABLAS + `
## Texto
| SELECT nombre || ' ' || apellido AS nombre_completo FROM empleados;
| SELECT UPPER(nombre), LENGTH(apellido) FROM empleados;
| SELECT SUBSTR(email, 1, INSTR(email, '@') - 1) AS usuario FROM empleados;
| SELECT TRIM('  hola  '), REPLACE(email, '@empresa.com', '@nueva.es') FROM empleados;
> Concatenar con NULL da NULL: si un empleado no tiene correo, nombre || email es NULL.

## Patrones con LIKE
- **%** cualquier secuencia de caracteres (también ninguna); **_** exactamente un carácter.
| WHERE apellido LIKE 'M%'        -- empieza por M
| WHERE email LIKE '%@empresa.com'
| WHERE nombre LIKE '_a%'         -- la segunda letra es a
En SQLite, LIKE no distingue mayúsculas en letras sin tilde.

## Números
| SELECT ROUND(salario * 1.03), ROUND(salario / 12.0, 2) FROM empleados;
| SELECT CAST(salario AS INTEGER), ABS(-5), 7 % 3;
> Cuidado con la división entera: 7 / 2 da 3 si los dos son enteros. Escribe 7 / 2.0 o CAST(… AS REAL).

## Valores nulos
| SELECT nombre, COALESCE(email, 'sin correo') FROM empleados;
| SELECT importe / NULLIF(unidades, 0) …        -- NULL en vez de error al dividir entre 0
| WHERE email IS NULL                           -- nunca = NULL

## Fechas en SQLite
SQLite guarda las fechas como texto en formato 'AAAA-MM-DD', que se ordena bien alfabéticamente. Funciones:
| SELECT date('now'), date('2025-01-31', '+1 month'), date('now', '-7 days');
| SELECT strftime('%Y', fecha_alta) AS anio, strftime('%m', fecha) AS mes;
| SELECT julianday('2025-01-01') - julianday(fecha_alta) AS dias;
Códigos: %Y año, %m mes, %d día, %W semana, %w día de la semana (0 = domingo).
> Otros sistemas usan funciones distintas: EXTRACT(YEAR FROM fecha) o YEAR(fecha), DATEDIFF, DATE_ADD… La idea es la misma.
` },
  { id: 'ventanas', n: 7, name: 'Funciones de ventana y análisis', sum: 'Rankings, totales acumulados, comparar con la fila anterior, porcentajes y los mejores de cada grupo.', match: NUNCA,
    k: [['Función de ventana', 'Calcula sobre un conjunto de filas relacionadas sin agruparlas: cada fila conserva su detalle.'], ['OVER ( )', 'Indica que la función es de ventana; vacío significa «todas las filas».'], ['PARTITION BY', 'Divide las filas en grupos dentro de la ventana, como GROUP BY pero sin juntarlas.'], ['ROW_NUMBER', 'Numera las filas 1, 2, 3… sin repetir aunque haya empates.'], ['RANK', 'Puesto con huecos tras un empate: 1, 2, 2, 4.'], ['DENSE_RANK', 'Puesto sin huecos tras un empate: 1, 2, 2, 3.'], ['LAG / LEAD', 'Valor de la fila anterior o siguiente.'], ['Total acumulado', 'SUM(x) OVER (ORDER BY fecha): suma de todas las filas hasta la actual.'], ['Marco (frame)', 'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW: qué filas entran en el cálculo de cada fila.'], ['NTILE(n)', 'Reparte las filas ordenadas en n grupos de tamaño parecido.'], ['Top N por grupo', 'Numerar con PARTITION BY en una subconsulta y quedarse con los números 1 a N.']],
    notes: TABLAS + `
## La idea
GROUP BY reduce muchas filas a una por grupo. Una **función de ventana** calcula sobre un grupo de filas, pero **mantiene cada fila**:
| SELECT nombre, salario,
|        AVG(salario) OVER () AS media_empresa,
|        salario - AVG(salario) OVER () AS diferencia
| FROM empleados;

## Rankings
| SELECT nombre, salario,
|        ROW_NUMBER() OVER (ORDER BY salario DESC) AS fila,
|        RANK()       OVER (ORDER BY salario DESC) AS puesto,
|        DENSE_RANK() OVER (ORDER BY salario DESC) AS puesto_denso
| FROM empleados;
Con dos salarios de 3500 empatados en 5.º lugar: ROW_NUMBER da 5 y 6; RANK da 5, 5 y salta al 7; DENSE_RANK da 5, 5 y sigue en 6.

## PARTITION BY: por grupos
| SELECT nombre, departamento_id, salario,
|        RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) AS puesto_en_depto
| FROM empleados;
Los **mejores de cada grupo** se obtienen filtrando ese número en una subconsulta o CTE (no se puede usar una función de ventana dentro de WHERE):
| WITH r AS (
|   SELECT nombre, departamento_id, salario,
|          RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) AS puesto
|   FROM empleados)
| SELECT nombre, salario FROM r WHERE puesto = 1;

## Acumulados y medias móviles
| SELECT fecha, importe,
|        SUM(importe) OVER (ORDER BY fecha) AS acumulado,
|        AVG(importe) OVER (ORDER BY fecha ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS media_3
| FROM ventas;

## Comparar con la fila anterior
| SELECT empleado_id, fecha, importe,
|        importe - LAG(importe) OVER (PARTITION BY empleado_id ORDER BY fecha) AS cambio
| FROM ventas;
LAG(x, 2) mira dos filas atrás; LAG(x, 1, 0) devuelve 0 en vez de NULL en la primera.

## Porcentajes sobre el total
| SELECT region, SUM(importe) AS total,
|        ROUND(100.0 * SUM(importe) / SUM(SUM(importe)) OVER (), 1) AS porcentaje
| FROM ventas GROUP BY region;
> Las funciones de ventana se calculan después de GROUP BY: por eso se puede hacer SUM(SUM(importe)) OVER ().
` },
  { id: 'diseno', n: 8, name: 'Diseño de bases de datos y rendimiento', sum: 'Modelo entidad-relación, normalización, vistas, disparadores, índices, transacciones y SQL desde Python.', match: NUNCA,
    k: [['Entidad', 'Cosa sobre la que se guardan datos: cliente, producto, pedido. Cada una suele ser una tabla.'], ['Relación 1:N', 'Un departamento tiene muchos empleados: la clave foránea va en el lado «muchos».'], ['Relación N:M', 'Un pedido tiene muchos productos y un producto está en muchos pedidos: necesita una tabla intermedia.'], ['1FN', 'Cada celda tiene un único valor (nada de listas separadas por comas).'], ['2FN y 3FN', 'Cada columna depende de toda la clave y solo de la clave: sin datos repetidos que se puedan desincronizar.'], ['Desnormalizar', 'Repetir datos a propósito para que las consultas de lectura sean más rápidas.'], ['Vista', 'Consulta guardada con nombre que se usa como una tabla.'], ['Disparador (trigger)', 'Código que se ejecuta solo al insertar, modificar o borrar filas.'], ['Índice', 'Estructura que acelera las búsquedas por una columna a cambio de espacio y escrituras algo más lentas.'], ['EXPLAIN QUERY PLAN', 'Muestra cómo ejecutará SQLite una consulta: si recorre la tabla entera (SCAN) o usa un índice (SEARCH).'], ['Inyección SQL', 'Ataque que mete código SQL en un dato introducido por el usuario; se evita con consultas parametrizadas.'], ['Consulta parametrizada', 'Los valores se pasan aparte con ? y la base de datos nunca los interpreta como código.']],
    notes: TABLAS + `
## Del problema a las tablas
- Identifica las **entidades** (sustantivos importantes: cliente, pedido, producto) y sus **atributos**.
- Identifica las **relaciones** y su cardinalidad:
- **1:1**: una persona, un pasaporte. Se suele juntar en una tabla.
- **1:N**: un departamento, muchos empleados. La clave foránea (departamento_id) va en empleados.
- **N:M**: pedidos y productos. Se crea una tabla intermedia lineas_pedido(pedido_id, producto_id, cantidad).

## Normalización
Evita guardar el mismo dato en varios sitios, porque acabarían diciendo cosas distintas:
- **1FN**: valores atómicos. Mal: telefonos = '600111222, 911222333'. Bien: una tabla telefonos con una fila por número.
- **2FN**: en una tabla con clave compuesta, cada columna depende de toda la clave.
- **3FN**: ninguna columna depende de otra que no sea la clave. Mal: empleados con departamento_id y ciudad_departamento. Bien: la ciudad vive en departamentos.
> En informes y almacenes de datos se desnormaliza a propósito para leer más rápido. Primero normaliza; desnormaliza solo con un motivo.

## Vistas
| CREATE VIEW plantilla AS
|   SELECT e.nombre, e.apellido, d.nombre AS departamento
|   FROM empleados e LEFT JOIN departamentos d ON d.id = e.departamento_id;
| SELECT * FROM plantilla WHERE departamento = 'Ventas';
Sirven para reutilizar consultas complejas y para dar acceso solo a ciertas columnas.

## Disparadores
| CREATE TABLE historial(empleado_id INTEGER, antes REAL, despues REAL);
| CREATE TRIGGER registrar_salario AFTER UPDATE OF salario ON empleados
| BEGIN
|   INSERT INTO historial VALUES (OLD.id, OLD.salario, NEW.salario);
| END;
OLD y NEW son la fila antes y después del cambio.

## Índices y rendimiento
| CREATE INDEX idx_ventas_fecha ON ventas(fecha);
| EXPLAIN QUERY PLAN SELECT * FROM ventas WHERE fecha >= '2025-04-01';
- Crea índices en las columnas que más se usan en WHERE, JOIN y ORDER BY.
- Las claves primarias ya tienen índice.
- Cada índice ocupa espacio y hace un poco más lentos INSERT, UPDATE y DELETE.
- Una función sobre la columna impide usar el índice: WHERE strftime('%Y', fecha) = '2025' no lo aprovecha; WHERE fecha >= '2025-01-01' sí.
> Evita SELECT * en programas: pide solo las columnas que necesitas.

## Transacciones
| BEGIN;
| UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
| UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
| COMMIT;       -- o ROLLBACK para deshacerlo todo
O se hacen todos los cambios, o ninguno.

## SQL desde Python
El módulo sqlite3 viene con Python:
| import sqlite3
| con = sqlite3.connect("empresa.db")
| ciudad = input("Ciudad: ")
| filas = con.execute("SELECT nombre FROM departamentos WHERE ciudad = ?", (ciudad,)).fetchall()
| con.execute("INSERT INTO departamentos(nombre, ciudad) VALUES (?, ?)", ("I+D", "Bilbao"))
| con.commit()
> Nunca construyas la consulta pegando textos del usuario: "… WHERE ciudad = '" + ciudad + "'" permite la **inyección SQL**. Usa siempre los ? y pasa los valores aparte.
Para analizar datos, pandas lee una consulta directamente: pandas.read_sql("SELECT …", con).
` },
  { id: 'casos', n: 9, name: 'Casos prácticos', sum: 'Consultas reales de empresa: jerarquías, lo que no existe, comparaciones con la media, tablas dinámicas y organigramas.', match: NUNCA,
    k: [['Autounión (self join)', 'Unir una tabla consigo misma con dos alias: empleados y sus jefes.'], ['Antiunión', 'Filas de una tabla sin pareja en otra: LEFT JOIN … WHERE b.id IS NULL, o NOT EXISTS.'], ['Subconsulta correlacionada', 'Subconsulta que usa columnas de la consulta exterior y se evalúa fila a fila.'], ['Tabla dinámica (pivot)', 'Convertir valores de filas en columnas con SUM(CASE WHEN … THEN … END).'], ['CTE recursiva', 'WITH RECURSIVE: consulta que se llama a sí misma para recorrer jerarquías.'], ['Duplicados', 'Se detectan con GROUP BY … HAVING COUNT(*) > 1.'], ['N-ésimo mayor', 'Con DENSE_RANK, o con MAX de lo que es menor que el máximo para el segundo.']],
    notes: TABLAS + `
## Cómo plantear una consulta difícil
- Escribe en una frase qué filas y qué columnas quieres al final.
- Decide qué tablas hacen falta y cómo se unen.
- Constrúyela por pasos con CTE: cada paso es una consulta pequeña que puedes comprobar.
- Revisa los NULL y los empates.

## Patrones frecuentes
**Autounión**: empleados con su jefe.
| SELECT e.nombre AS empleado, j.nombre AS jefe
| FROM empleados e LEFT JOIN empleados j ON j.id = e.jefe_id;
**Lo que no tiene pareja**: departamentos sin empleados.
| SELECT d.nombre FROM departamentos d
| WHERE NOT EXISTS (SELECT 1 FROM empleados e WHERE e.departamento_id = d.id);
**Comparar con su grupo**: quién cobra más que la media de su departamento.
| SELECT nombre FROM empleados e
| WHERE salario > (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id);
**Tabla dinámica**: ventas de cada empleado por trimestre en columnas.
| SELECT empleado_id,
|        SUM(CASE WHEN fecha < '2025-04-01' THEN importe ELSE 0 END) AS t1,
|        SUM(CASE WHEN fecha >= '2025-04-01' THEN importe ELSE 0 END) AS t2
| FROM ventas GROUP BY empleado_id;
**Duplicados**:
| SELECT salario, COUNT(*) FROM empleados GROUP BY salario HAVING COUNT(*) > 1;

## Jerarquías con CTE recursivas
| WITH RECURSIVE equipo(id, nombre, nivel) AS (
|   SELECT id, nombre, 0 FROM empleados WHERE jefe_id IS NULL      -- punto de partida
|   UNION ALL
|   SELECT e.id, e.nombre, equipo.nivel + 1
|   FROM empleados e JOIN equipo ON e.jefe_id = equipo.id          -- paso recursivo
| )
| SELECT nombre, nivel FROM equipo;
Primero se ejecuta la parte de arriba; después, la de abajo se repite con las filas nuevas hasta que no aparece ninguna.
` });

  const sql = (l, q, sol, e, x) => code(l, 'sql', q, Object.assign({ sol, e }, x));
  BANK.sql.q.push(
    // ───── Funciones ─────
    mc(1, '¿Qué devuelve NULL || \'texto\' en SQLite?', ['NULL', "'texto'", "'NULLtexto'", 'Un error'], 'Cualquier operación con NULL da NULL. Usa COALESCE(columna, \'\') para evitarlo.', { tp: 'funciones' }),
    mc(2, '¿Qué nombres encuentra WHERE nombre LIKE \'_a%\'?', ['Los que tienen una a como segunda letra', 'Los que empiezan por a', 'Los que terminan en a', 'Los que contienen «_a»'], '_ es exactamente un carácter y % cualquier secuencia.', { tp: 'funciones' }),
    tx(2, '¿Qué devuelve COALESCE(NULL, NULL, \'Madrid\', \'Sevilla\')?', ['Madrid', "'Madrid'"], 'COALESCE devuelve el primer valor que no es NULL.', { tp: 'funciones' }),
    sql(1, 'Muestra el nombre completo de cada empleado (nombre, un espacio y apellido) en una sola columna.', "SELECT nombre || ' ' || apellido FROM empleados", '|| une textos en SQLite. En MySQL se usaría CONCAT(nombre, \' \', apellido).', { tp: 'funciones' }),
    sql(1, 'Muestra el nombre de los empleados que no tienen correo electrónico.', 'SELECT nombre FROM empleados WHERE email IS NULL', 'Con NULL se usa IS NULL; = NULL nunca es verdadero.', { tp: 'funciones' }),
    sql(2, "Muestra el nombre y el correo de cada empleado; si no tiene, debe aparecer 'sin correo'.", "SELECT nombre, COALESCE(email, 'sin correo') FROM empleados", 'COALESCE sustituye el NULL por un valor por defecto.', { tp: 'funciones' }),
    sql(2, "Muestra el nombre y la parte del correo anterior a la arroba (el usuario) de los empleados que tienen correo.", "SELECT nombre, SUBSTR(email, 1, INSTR(email, '@') - 1) FROM empleados WHERE email IS NOT NULL", 'INSTR da la posición de la @; SUBSTR toma desde el principio hasta justo antes.', { tp: 'funciones' }),
    sql(2, 'Muestra el nombre y el año de alta de cada empleado como número entero (usa strftime y CAST).', "SELECT nombre, CAST(strftime('%Y', fecha_alta) AS INTEGER) FROM empleados", "strftime('%Y', …) devuelve texto; CAST lo convierte en entero.", { tp: 'funciones' }),
    sql(2, "Muestra el nombre de los empleados dados de alta en 2019.", "SELECT nombre FROM empleados WHERE fecha_alta >= '2019-01-01' AND fecha_alta < '2020-01-01'", "Comparar rangos de fechas permite usar índices; también funciona strftime('%Y', fecha_alta) = '2019' o LIKE '2019%'.", { tp: 'funciones' }),
    sql(2, "Muestra el total de ventas de cada mes (dos columnas: el mes como texto '01', '02'… y el total).", "SELECT strftime('%m', fecha), SUM(importe) FROM ventas GROUP BY strftime('%m', fecha)", 'Se agrupa por la parte de la fecha que interesa.', { tp: 'funciones' }),
    sql(3, "Muestra el nombre y los días que llevaba cada empleado en la empresa el 1 de enero de 2025, como número entero (usa julianday).", "SELECT nombre, CAST(julianday('2025-01-01') - julianday(fecha_alta) AS INTEGER) FROM empleados", 'Restar dos julianday da días (con decimales si hay horas); CAST los deja enteros.', { tp: 'funciones' }),
    sql(2, 'Muestra el nombre y el salario con una subida del 3 % redondeado sin decimales (usa ROUND).', 'SELECT nombre, ROUND(salario * 1.03) FROM empleados', 'ROUND(x) redondea al entero más cercano; ROUND(x, 2) dejaría dos decimales.', { tp: 'funciones' }),

    // ───── Ventanas ─────
    mc(2, '¿En qué se diferencian GROUP BY y una función de ventana?', ['La ventana mantiene cada fila; GROUP BY las reduce a una por grupo', 'Son lo mismo con distinta sintaxis', 'GROUP BY es más moderno', 'La ventana solo funciona con fechas'], 'Por eso con una ventana se puede mostrar el salario de cada persona junto a la media de su departamento.', { tp: 'ventanas' }),
    mc(2, 'Tres salarios: 5000, 4000, 4000, 3000. ¿Qué puestos da DENSE_RANK() ordenando de mayor a menor?', ['1, 2, 2, 3', '1, 2, 2, 4', '1, 2, 3, 4', '1, 1, 2, 3'], 'DENSE_RANK no deja huecos tras un empate; RANK daría 1, 2, 2, 4.', { tp: 'ventanas' }),
    mc(3, '¿Por qué no funciona WHERE RANK() OVER (ORDER BY salario DESC) = 1?', ['Las funciones de ventana se calculan después de WHERE', 'RANK no existe en SQLite', 'Falta GROUP BY', 'Hay que escribir RANK sin paréntesis'], 'Se calcula en una subconsulta o CTE y se filtra fuera.', { tp: 'ventanas' }),
    sql(2, 'Muestra nombre, salario y el puesto de cada empleado en el ranking de salarios de mayor a menor, usando RANK.', 'SELECT nombre, salario, RANK() OVER (ORDER BY salario DESC) FROM empleados', 'RANK da el mismo puesto a los empates (los dos de 3500 quedan 5.º) y salta el siguiente.', { tp: 'ventanas' }),
    sql(2, 'Muestra nombre, salario y la diferencia entre su salario y la media de toda la empresa (sin agrupar).', 'SELECT nombre, salario, salario - AVG(salario) OVER () FROM empleados', 'OVER () vacío hace que la media se calcule sobre todas las filas, pero cada fila se conserva.', { tp: 'ventanas' }),
    sql(2, 'Muestra fecha, importe y el total acumulado de las ventas por orden de fecha.', 'SELECT fecha, importe, SUM(importe) OVER (ORDER BY fecha) FROM ventas', 'Con ORDER BY dentro de OVER, la suma va de la primera fila hasta la actual.', { tp: 'ventanas' }),
    sql(2, 'Muestra nombre, departamento_id, salario y el número de cada empleado dentro de su departamento por salario de mayor a menor (ROW_NUMBER; en caso de empate, por id). Excluye a quien no tiene departamento.', 'SELECT nombre, departamento_id, salario, ROW_NUMBER() OVER (PARTITION BY departamento_id ORDER BY salario DESC, id) FROM empleados WHERE departamento_id IS NOT NULL', 'PARTITION BY reinicia la numeración en cada departamento.', { tp: 'ventanas' }),
    sql(3, 'Muestra el nombre y el salario de la persona mejor pagada de cada departamento (solo esas dos columnas).', 'WITH r AS (SELECT nombre, salario, RANK() OVER (PARTITION BY departamento_id ORDER BY salario DESC) AS puesto FROM empleados WHERE departamento_id IS NOT NULL) SELECT nombre, salario FROM r WHERE puesto = 1', 'El ranking se calcula en una CTE y se filtra fuera. Es el patrón de «los N mejores de cada grupo».', { tp: 'ventanas' }),
    sql(3, 'Muestra empleado_id, fecha, importe y la diferencia con la venta anterior del mismo empleado (NULL en la primera).', 'SELECT empleado_id, fecha, importe, importe - LAG(importe) OVER (PARTITION BY empleado_id ORDER BY fecha) FROM ventas', 'LAG trae el valor de la fila anterior dentro de la partición.', { tp: 'ventanas' }),
    sql(3, 'Muestra cada región, su total de ventas y el porcentaje que representa sobre el total, redondeado a un decimal.', 'SELECT region, SUM(importe), ROUND(100.0 * SUM(importe) / SUM(SUM(importe)) OVER (), 1) FROM ventas GROUP BY region', 'La ventana se aplica sobre el resultado ya agrupado: SUM(SUM(importe)) OVER () es el total general.', { tp: 'ventanas' }),
    sql(3, 'Muestra fecha, importe y la media móvil de las tres últimas ventas (la actual y las dos anteriores por fecha), redondeada sin decimales con ROUND.', 'SELECT fecha, importe, ROUND(AVG(importe) OVER (ORDER BY fecha ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)) FROM ventas', 'El marco ROWS BETWEEN 2 PRECEDING AND CURRENT ROW limita la media a tres filas.', { tp: 'ventanas' }),
    sql(3, "Muestra el total de ventas de cada mes ('01', '02'…) y su diferencia con el mes anterior.", "WITH m AS (SELECT strftime('%m', fecha) AS mes, SUM(importe) AS total FROM ventas GROUP BY mes) SELECT mes, total, total - LAG(total) OVER (ORDER BY mes) FROM m", 'Primero se agrega por mes en una CTE y después se compara cada mes con el anterior.', { tp: 'ventanas' }),

    // ───── Diseño ─────
    mc(1, 'Un departamento tiene muchos empleados. ¿Dónde va la clave foránea?', ['En empleados (departamento_id)', 'En departamentos (empleado_id)', 'En una tabla intermedia', 'En las dos tablas'], 'En una relación 1:N, la clave foránea va en el lado «muchos».', { tp: 'diseno' }),
    mc(2, 'Un pedido puede tener muchos productos y un producto aparece en muchos pedidos. ¿Cómo se modela?', ['Con una tabla intermedia (pedido_id, producto_id, cantidad)', 'Con una columna productos con los ids separados por comas', 'Repitiendo el pedido en la tabla de productos', 'No se puede en SQL'], 'Las relaciones N:M necesitan una tabla intermedia; una lista en una celda incumple la 1FN.', { tp: 'diseno' }),
    mc(2, '¿Qué consulta NO puede aprovechar un índice sobre la columna fecha?', ["WHERE strftime('%Y', fecha) = '2025'", "WHERE fecha >= '2025-01-01'", "WHERE fecha BETWEEN '2025-01-01' AND '2025-12-31'", "WHERE fecha = '2025-03-05'"], 'Aplicar una función a la columna obliga a calcularla en todas las filas.', { tp: 'diseno' }),
    mc(3, '¿Cuál es la forma segura de buscar por un texto escrito por el usuario desde Python?', ['con.execute("… WHERE ciudad = ?", (ciudad,))', 'con.execute("… WHERE ciudad = \'" + ciudad + "\'")', 'con.execute(f"… WHERE ciudad = \'{ciudad}\'")', 'Quitar las comillas del texto antes de pegarlo'], 'Con parámetros, el valor nunca se interpreta como código SQL: así se evita la inyección.', { tp: 'diseno' }),
    tx(2, '¿Qué palabra deshace todos los cambios de una transacción iniciada con BEGIN?', ['ROLLBACK'], 'COMMIT los confirma; ROLLBACK los descarta.', { tp: 'diseno' }),
    sql(2, 'Crea una vista llamada plantilla con el nombre de cada empleado y el nombre de su departamento (incluidos los que no tienen), y después muestra todo su contenido.', 'CREATE VIEW plantilla AS SELECT e.nombre AS empleado, d.nombre AS departamento FROM empleados e LEFT JOIN departamentos d ON d.id = e.departamento_id; SELECT * FROM plantilla', 'Una vista guarda la consulta; luego se usa como una tabla.', { tp: 'diseno' }),
    sql(3, 'Dentro de una transacción, sube un 10 % el salario de los empleados del departamento 1 y confírmala. Después muestra nombre y salario de ese departamento.', 'BEGIN; UPDATE empleados SET salario = salario * 1.1 WHERE departamento_id = 1; COMMIT; SELECT nombre, salario FROM empleados WHERE departamento_id = 1', 'BEGIN … COMMIT agrupa los cambios: o se aplican todos o ninguno.', { tp: 'diseno' }),
    sql(3, 'Crea la tabla historial(empleado_id, antes, despues) y un disparador que guarde en ella cada cambio de salario. Luego sube a 3000 el salario de Marc (id 6) y muestra el contenido de historial.', 'CREATE TABLE historial(empleado_id INTEGER, antes REAL, despues REAL); CREATE TRIGGER registrar AFTER UPDATE OF salario ON empleados BEGIN INSERT INTO historial VALUES (OLD.id, OLD.salario, NEW.salario); END; UPDATE empleados SET salario = 3000 WHERE id = 6; SELECT * FROM historial', 'El disparador se ejecuta solo tras cada UPDATE de salario; OLD y NEW son los valores antes y después.', { tp: 'diseno' }),

    // ───── Casos prácticos ─────
    sql(2, 'Muestra el nombre de cada empleado y el nombre de su jefe (NULL para quien no tiene).', 'SELECT e.nombre, j.nombre FROM empleados e LEFT JOIN empleados j ON j.id = e.jefe_id', 'Autounión: la misma tabla con dos alias. LEFT JOIN conserva a Elena, que no tiene jefe.', { tp: 'casos' }),
    sql(2, 'Muestra el nombre de los departamentos que no tienen ningún empleado.', 'SELECT d.nombre FROM departamentos d LEFT JOIN empleados e ON e.departamento_id = d.id WHERE e.id IS NULL', 'Antiunión: LEFT JOIN y quedarse con las filas sin pareja. También vale NOT EXISTS.', { tp: 'casos' }),
    sql(2, 'Muestra el nombre de cada departamento y cuántos empleados tiene, incluidos los que tienen 0.', 'SELECT d.nombre, COUNT(e.id) FROM departamentos d LEFT JOIN empleados e ON e.departamento_id = d.id GROUP BY d.id, d.nombre', 'COUNT(e.id) no cuenta los NULL, así que Legal aparece con 0. COUNT(*) daría 1.', { tp: 'casos' }),
    sql(2, 'Muestra el segundo salario más alto de la empresa (un solo valor).', 'SELECT MAX(salario) FROM empleados WHERE salario < (SELECT MAX(salario) FROM empleados)', 'El máximo de los que están por debajo del máximo. Con DENSE_RANK se generaliza al N-ésimo.', { tp: 'casos' }),
    sql(2, 'Muestra los salarios que se repiten y cuántas personas los cobran.', 'SELECT salario, COUNT(*) FROM empleados GROUP BY salario HAVING COUNT(*) > 1', 'GROUP BY + HAVING COUNT(*) > 1 es la forma estándar de encontrar duplicados.', { tp: 'casos' }),
    sql(2, 'Muestra qué porcentaje de empleados tiene correo electrónico, redondeado a un decimal.', 'SELECT ROUND(100.0 * COUNT(email) / COUNT(*), 1) FROM empleados', 'COUNT(email) solo cuenta los que no son NULL; COUNT(*) cuenta todas las filas. 100.0 evita la división entera.', { tp: 'casos' }),
    sql(3, 'Muestra el nombre de los empleados que cobran más que la media de su propio departamento.', 'SELECT nombre FROM empleados e WHERE salario > (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id)', 'La subconsulta correlacionada recalcula la media para el departamento de cada fila.', { tp: 'casos' }),
    sql(3, 'Muestra, para cada empleado que ha vendido, su id, lo vendido en el primer trimestre (hasta marzo) y lo vendido en el segundo (desde abril), en tres columnas.', "SELECT empleado_id, SUM(CASE WHEN fecha < '2025-04-01' THEN importe ELSE 0 END), SUM(CASE WHEN fecha >= '2025-04-01' THEN importe ELSE 0 END) FROM ventas GROUP BY empleado_id", 'SUM(CASE …) convierte valores de filas en columnas: una tabla dinámica.', { tp: 'casos' }),
    sql(3, "Muestra el mejor vendedor de cada mes: el mes ('01', '02'…), su nombre y su total vendido ese mes.", "WITH t AS (SELECT strftime('%m', v.fecha) AS mes, e.nombre, SUM(v.importe) AS total FROM ventas v JOIN empleados e ON e.id = v.empleado_id GROUP BY mes, e.id), r AS (SELECT mes, nombre, total, RANK() OVER (PARTITION BY mes ORDER BY total DESC) AS puesto FROM t) SELECT mes, nombre, total FROM r WHERE puesto = 1", 'Tres pasos: totales por mes y vendedor, ranking dentro de cada mes y filtro del primero.', { tp: 'casos' }),
    sql(3, 'Muestra el organigrama: el nombre de cada empleado y su nivel en la jerarquía (0 para quien no tiene jefe, 1 para sus subordinados directos, etc.). Usa WITH RECURSIVE.', 'WITH RECURSIVE eq(id, nombre, nivel) AS (SELECT id, nombre, 0 FROM empleados WHERE jefe_id IS NULL UNION ALL SELECT e.id, e.nombre, eq.nivel + 1 FROM empleados e JOIN eq ON e.jefe_id = eq.id) SELECT nombre, nivel FROM eq', 'La parte de arriba es el punto de partida (Elena); la de abajo baja un nivel en cada vuelta.', { tp: 'casos' }),
  );

  if (window.CHEATS && CHEATS.sql) CHEATS.sql.intro = CHEATS.sql.intro.replace('clientes, productos y pedidos.', 'clientes, productos y pedidos, y en las últimas secciones también departamentos, empleados y ventas.');
  if (window.CHEATS && CHEATS.sql) CHEATS.sql.s.push(
    ['Texto, números y fechas', [
      ["nombre || ' ' || apellido", 'Concatenar (CONCAT() en MySQL)'],
      ['UPPER, LOWER, LENGTH, TRIM', 'Mayúsculas, minúsculas, longitud y quitar espacios'],
      ["SUBSTR(t, 1, INSTR(t, '@') - 1)", 'Trozo de texto hasta un carácter'],
      ["REPLACE(t, 'viejo', 'nuevo')", 'Sustituir texto'],
      ["LIKE 'M%' · LIKE '_a%'", '% cualquier secuencia; _ un carácter'],
      ['ROUND(x, 2) · CAST(x AS INTEGER)', 'Redondear y convertir'],
      ["COALESCE(col, 'valor')", 'Valor por defecto si es NULL'],
      ['x / NULLIF(y, 0)', 'Evitar dividir entre cero'],
      ["strftime('%Y', fecha) · strftime('%m', fecha)", 'Año y mes de una fecha (SQLite)'],
      ["date('now', '-7 days')", 'Sumar o restar a una fecha'],
      ['julianday(a) - julianday(b)', 'Días entre dos fechas']]],
    ['Funciones de ventana', [
      ['AVG(x) OVER ()', 'Media de todas las filas sin agruparlas'],
      ['RANK() OVER (ORDER BY x DESC)', 'Ranking con huecos tras empates (DENSE_RANK sin huecos)'],
      ['ROW_NUMBER() OVER (PARTITION BY g ORDER BY x)', 'Numerar dentro de cada grupo'],
      ['SUM(x) OVER (ORDER BY fecha)', 'Total acumulado'],
      ['… ROWS BETWEEN 2 PRECEDING AND CURRENT ROW', 'Marco para medias móviles'],
      ['LAG(x) / LEAD(x)', 'Valor de la fila anterior o siguiente'],
      ['SUM(SUM(x)) OVER ()', 'Total general tras un GROUP BY (para porcentajes)'],
      ['WITH r AS (… RANK() …) SELECT … WHERE puesto <= 3', 'Los mejores de cada grupo']]],
    ['Diseño y rendimiento', [
      ['CREATE VIEW v AS SELECT …', 'Consulta guardada con nombre'],
      ['CREATE TRIGGER t AFTER UPDATE ON tabla BEGIN … END', 'Acción automática al modificar datos'],
      ['CREATE INDEX idx ON tabla(col)', 'Acelerar búsquedas por una columna'],
      ['EXPLAIN QUERY PLAN SELECT …', 'Ver si se usa un índice (SEARCH) o se recorre todo (SCAN)'],
      ['BEGIN; … COMMIT; / ROLLBACK;', 'Transacción: todo o nada'],
      ['con.execute("… = ?", (valor,))', 'Consulta parametrizada desde Python: evita la inyección SQL']]],
    ['Patrones útiles', [
      ['FROM empleados e LEFT JOIN empleados j ON j.id = e.jefe_id', 'Autounión: empleado y jefe'],
      ['LEFT JOIN … WHERE b.id IS NULL', 'Filas sin pareja en la otra tabla'],
      ['GROUP BY col HAVING COUNT(*) > 1', 'Encontrar duplicados'],
      ['SUM(CASE WHEN … THEN x ELSE 0 END)', 'Tabla dinámica: filas a columnas'],
      ['WITH RECURSIVE …', 'Recorrer jerarquías']]],
  );
})();
