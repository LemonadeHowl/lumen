// Temas y ejercicios adicionales de Python: biblioteca estándar, algoritmos, calidad del código y proyectos guiados.
// Se cargan después de python.js y python.temas.js. Todos los ejercicios indican su tema con tp, así que las
// expresiones match de estos temas no recogen preguntas de otros (/$^/ no coincide nunca).
// Los ejercicios de código usan solo la biblioteca estándar: es lo que trae el intérprete que funciona sin conexión.
(function () {
  const NUNCA = /$^/;
  TOPICS.python.unshift(
  { id: 'stdlib', n: 6, name: 'La biblioteca estándar', sum: 'Los módulos que vienen con Python: math, random, datetime, collections, itertools, json, csv y re.', match: NUNCA,
    k: [['Biblioteca estándar', 'Conjunto de módulos que se instalan con Python: no hace falta pip para usarlos.'], ['import … as …', 'Importa un módulo con otro nombre: import datetime as dt.'], ['from … import …', 'Trae nombres concretos de un módulo: from math import sqrt, pi.'], ['Counter', 'Diccionario que cuenta: Counter("banana") → {"a": 3, "n": 2, "b": 1}.'], ['defaultdict', 'Diccionario que crea un valor por defecto al acceder a una clave nueva: defaultdict(list).'], ['namedtuple', 'Tupla con nombres de campo: Punto = namedtuple("Punto", "x y").'], ['deque', 'Cola de doble extremo: añadir y quitar por ambos lados en O(1).'], ['datetime y timedelta', 'Fechas y horas, y diferencias entre ellas: date(2025, 1, 1) + timedelta(days=30).'], ['json', 'Convierte entre texto JSON y objetos de Python: json.dumps() y json.loads().'], ['csv', 'Lee y escribe tablas separadas por comas; DictReader da cada fila como diccionario.'], ['re', 'Expresiones regulares: buscar patrones en texto (re.findall, re.sub, re.search).'], ['itertools', 'Herramientas para iterar: combinations, permutations, product, chain, groupby.']],
    notes: `
## Importar módulos
Python trae de serie cientos de módulos: es la **biblioteca estándar**. Se usan con import, sin instalar nada:
| import math                    # se usa como math.sqrt(16)
| from math import sqrt, pi      # se usa directamente: sqrt(16)
| import datetime as dt          # alias más corto
> Evita from modulo import *: llena el programa de nombres y no se sabe de dónde viene cada uno.

## math y random
| import math
| math.sqrt(2)  math.floor(3.7)  math.ceil(3.2)  math.pi  math.gcd(12, 18)  math.isclose(0.1 + 0.2, 0.3)
| import random
| random.randint(1, 6)           # entero entre 1 y 6, ambos incluidos
| random.choice(["a", "b", "c"]) # un elemento al azar
| random.shuffle(lista)          # desordena la lista en el sitio
| random.seed(42)                # misma secuencia en cada ejecución: útil para pruebas
> 0.1 + 0.2 == 0.3 es False por cómo se guardan los decimales en binario. Para comparar números reales usa math.isclose(); para dinero, el módulo decimal.

## Fechas: datetime
| from datetime import date, datetime, timedelta
| hoy = date.today()
| cumple = date(2025, 6, 15)
| faltan = cumple - hoy            # un timedelta
| print(faltan.days)
| datetime.now().strftime("%d/%m/%Y %H:%M")   # fecha → texto
| datetime.strptime("15/06/2025", "%d/%m/%Y") # texto → fecha
Códigos de formato habituales: %d día, %m mes, %Y año, %H hora, %M minutos, %A nombre del día.

## collections: contenedores especializados
| from collections import Counter, defaultdict, namedtuple, deque
| Counter("abracadabra").most_common(2)      # [('a', 5), ('b', 2)]
| grupos = defaultdict(list)
| grupos["frutas"].append("pera")            # no da KeyError: crea la lista
| Punto = namedtuple("Punto", "x y")
| p = Punto(3, 4); print(p.x)
| cola = deque([1, 2, 3]); cola.appendleft(0); cola.pop()
> Counter y defaultdict ahorran muchos if clave in dic: … al contar o agrupar.

## itertools y functools
| from itertools import combinations, permutations, product, chain, accumulate
| list(combinations("ABC", 2))     # AB, AC, BC (sin orden)
| list(permutations("ABC", 2))     # AB, AC, BA, BC, CA, CB (con orden)
| list(product([0, 1], repeat=2))  # todas las combinaciones de 0 y 1
| list(accumulate([1, 2, 3, 4]))   # sumas acumuladas: 1, 3, 6, 10
| from functools import reduce, lru_cache
| reduce(lambda a, b: a * b, [1, 2, 3, 4])   # 24

## Datos en texto: json y csv
JSON es el formato estándar para intercambiar datos entre programas y en la web:
| import json
| texto = json.dumps({"nombre": "Ana", "edad": 30}, ensure_ascii=False, indent=2)
| datos = json.loads(texto)
| with open("datos.json", "w", encoding="utf-8") as f: json.dump(datos, f)
CSV es el formato de las hojas de cálculo:
| import csv
| with open("ventas.csv", encoding="utf-8", newline="") as f:
|     for fila in csv.DictReader(f):
|         print(fila["producto"], float(fila["precio"]))
> csv lee siempre texto: convierte los números con int() o float().

## Expresiones regulares: re
Sirven para buscar patrones en texto:
| import re
| re.findall(r"\\d+", "Tengo 3 gatos y 12 peces")   # ['3', '12']
| re.sub(r"\\s+", " ", "mucho    espacio")           # 'mucho espacio'
| re.fullmatch(r"[\\w.]+@\\w+\\.\\w+", correo)          # ¿parece un correo?
Piezas básicas: \\d dígito, \\w letra o dígito, \\s espacio, . cualquier carácter, + uno o más, * cero o más, ? opcional, [abc] uno de esos, ^ inicio, $ final, ( ) grupo.
> Escribe los patrones como cadenas crudas (r"…") para que las barras invertidas no se interpreten dos veces.

## Archivos y rutas: pathlib
| from pathlib import Path
| carpeta = Path("informes")
| for archivo in carpeta.glob("*.txt"):
|     print(archivo.name, archivo.stat().st_size)
| Path("nota.txt").write_text("hola", encoding="utf-8")
` },
  { id: 'algoritmos', n: 7, name: 'Algoritmos y estructuras de datos', sum: 'Recursión, búsqueda, ordenación, pilas, colas, grafos y programación dinámica.', match: NUNCA,
    k: [['Algoritmo', 'Secuencia finita de pasos que resuelve un problema.'], ['Recursión', 'Función que se llama a sí misma con un caso más pequeño hasta llegar a un caso base.'], ['Caso base', 'Condición en la que la función recursiva deja de llamarse; sin él, la recursión no termina.'], ['Búsqueda binaria', 'Busca en una lista ordenada partiéndola por la mitad en cada paso: O(log n).'], ['Ordenación por inserción', 'Va colocando cada elemento en su sitio entre los ya ordenados: O(n²), buena con listas casi ordenadas.'], ['Ordenación por mezcla', 'Divide la lista en mitades, las ordena y las mezcla: O(n log n).'], ['Pila', 'Estructura LIFO (el último en entrar sale primero): append() y pop() de una lista.'], ['Cola', 'Estructura FIFO (el primero en entrar sale primero): deque con append() y popleft().'], ['Grafo', 'Nodos unidos por aristas; se representa con un diccionario de listas de vecinos.'], ['Búsqueda en anchura (BFS)', 'Recorre un grafo por niveles con una cola; encuentra el camino más corto en número de pasos.'], ['Memoización', 'Guardar resultados ya calculados para no repetirlos: @lru_cache.'], ['Dos punteros', 'Técnica que recorre una lista con dos índices que se acercan; evita bucles anidados.']],
    notes: `
## Pensar un algoritmo
Antes de programar conviene:
- Entender la entrada y la salida, con un ejemplo hecho a mano.
- Pensar primero la solución más simple, aunque sea lenta.
- Calcular su coste (O grande) y, si no basta, buscar una estructura de datos mejor.
- Probar los casos límite: lista vacía, un solo elemento, todos iguales, números negativos.

## Recursión
Una función recursiva resuelve un problema llamándose a sí misma con un caso más pequeño:
| def factorial(n):
|     if n <= 1:          # caso base
|         return 1
|     return n * factorial(n - 1)
| def suma_digitos(n):
|     return n if n < 10 else n % 10 + suma_digitos(n // 10)
> Python limita la profundidad de recursión (unas 1000 llamadas). Para entradas grandes, mejor un bucle.

## Búsqueda
- **Lineal**: mirar uno a uno. O(n). Es lo que hace x in lista.
- **Binaria**: solo en listas **ordenadas**. Se compara con el elemento del centro y se descarta la mitad. O(log n): en un millón de elementos, unas 20 comparaciones.
| def busqueda_binaria(lista, x):
|     izq, der = 0, len(lista) - 1
|     while izq <= der:
|         medio = (izq + der) // 2
|         if lista[medio] == x: return medio
|         if lista[medio] < x: izq = medio + 1
|         else: der = medio - 1
|     return -1
El módulo bisect la implementa: bisect.bisect_left(lista, x).

## Ordenación
En la práctica se usa sorted() o lista.sort(), que son O(n log n) y **estables** (los empates conservan su orden). Con key se ordena por cualquier criterio:
| sorted(personas, key=lambda p: (p["edad"], p["nombre"]))
| sorted(palabras, key=len, reverse=True)
Conocer los algoritmos clásicos ayuda a razonar:
- **Burbuja** e **inserción**: O(n²). Sencillos, lentos con muchos datos.
- **Mezcla** (merge sort) y **rápida** (quicksort): O(n log n). Divide y vencerás.

## Pilas y colas
| pila = []; pila.append(1); pila.append(2); pila.pop()     # → 2 (LIFO)
| from collections import deque
| cola = deque(); cola.append(1); cola.append(2); cola.popleft()   # → 1 (FIFO)
Usos típicos: una pila para deshacer acciones o comprobar paréntesis; una cola para atender tareas por orden de llegada.
> No uses lista.pop(0) para una cola: es O(n) porque desplaza todos los elementos. deque.popleft() es O(1).

## Grafos
Una red de nodos conectados se guarda como diccionario de vecinos:
| red = {"A": ["B", "C"], "B": ["D"], "C": ["D"], "D": []}
La **búsqueda en anchura** visita primero los vecinos, luego los vecinos de los vecinos, con una cola y un conjunto de visitados. Da el camino con menos pasos.

## Programación dinámica y memoización
Cuando un problema se repite con los mismos datos, se guardan los resultados:
| from functools import lru_cache
| @lru_cache(maxsize=None)
| def fib(n):
|     return n if n < 2 else fib(n - 1) + fib(n - 2)
Sin memoria, fib(35) hace millones de llamadas; con ella, 36.

## Técnicas que ahorran bucles anidados
- **Diccionario de vistos**: para «¿hay dos números que sumen k?», guarda los números vistos y pregunta si k − x ya está. O(n) en vez de O(n²).
- **Dos punteros**: en una lista ordenada, un índice al principio y otro al final que se acercan.
- **Ventana deslizante**: para sumas o máximos de tramos consecutivos, se suma el que entra y se resta el que sale.
` },
  { id: 'calidad', n: 8, name: 'Pruebas, depuración y buen código', sum: 'Leer errores, depurar, escribir pruebas, documentar, PEP 8 y entornos virtuales.', match: NUNCA,
    k: [['Traceback', 'Informe de un error: se lee de abajo arriba; la última línea dice el tipo de error y la de encima, dónde ocurrió.'], ['Depurar', 'Encontrar y corregir errores: print estratégicos, breakpoint() o el depurador del editor.'], ['assert', 'Comprueba que algo es cierto; si no, lanza AssertionError. Útil en pruebas, no para validar datos de usuarios.'], ['Prueba unitaria', 'Comprueba una pieza pequeña (una función) de forma automática.'], ['pytest', 'Herramienta de pruebas: ejecuta las funciones test_… y muestra qué falla.'], ['Docstring', 'Cadena entre triples comillas al principio de una función que explica qué hace.'], ['PEP 8', 'Guía de estilo de Python: nombres en minúsculas_con_guiones, 4 espacios, líneas cortas.'], ['Entorno virtual', 'Carpeta con un Python y paquetes propios de un proyecto: python -m venv .venv.'], ['pip', 'Instalador de paquetes: pip install requests.'], ['requirements.txt', 'Lista de paquetes de un proyecto para reproducir el entorno: pip install -r requirements.txt.'], ['logging', 'Módulo para dejar registros con niveles (DEBUG, INFO, WARNING, ERROR) en lugar de prints.'], ['Refactorizar', 'Mejorar el código sin cambiar lo que hace: nombres claros, funciones cortas, sin repetición.']],
    notes: `
## Leer un error
Cuando algo falla, Python muestra un **traceback**. Se lee **de abajo arriba**:
| Traceback (most recent call last):
|   File "app.py", line 8, in <module>
|     print(media([]))
|   File "app.py", line 3, in media
|     return sum(datos) / len(datos)
| ZeroDivisionError: division by zero
- La última línea dice **qué** pasó: división entre cero.
- Las de encima dicen **dónde**: en media, línea 3, llamada desde la línea 8.
> Antes de buscar en internet, lee el mensaje entero: la mayoría de las veces dice exactamente qué falla.

## Errores frecuentes
- **SyntaxError / IndentationError**: falta un paréntesis, dos puntos o la sangría no cuadra.
- **NameError**: nombre mal escrito o variable usada antes de crearla.
- **TypeError**: operación con tipos incompatibles, como "3" + 4.
- **IndexError / KeyError**: índice o clave que no existe.
- **AttributeError**: el objeto no tiene ese método (por ejemplo, None.upper(), porque una función no devolvió nada).

## Depurar
- Reproducir el error con el caso más pequeño posible.
- Imprimir valores intermedios: print(f"{x=}") muestra nombre y valor.
- Poner breakpoint() para pausar y examinar variables en el depurador.
- Explicar el código en voz alta, línea a línea (el «método del patito de goma»).

## Pruebas automáticas
Una prueba ejecuta el código con datos conocidos y comprueba el resultado:
| def media(datos):
|     """Devuelve la media de una lista no vacía de números."""
|     return sum(datos) / len(datos)
| def test_media():
|     assert media([2, 4, 6]) == 4
|     assert media([5]) == 5
Con **pytest** basta con guardar las funciones test_… en archivos test_*.py y ejecutar pytest en la terminal. Una buena batería de pruebas incluye casos normales, casos límite y casos que deben dar error.
> Escribir la prueba antes que la función (TDD) obliga a pensar qué debe hacer exactamente.

## Código legible: PEP 8 y documentación
- Nombres: variables y funciones en minusculas_con_guiones, clases en MayusculasPegadas, constantes en MAYUSCULAS.
- Sangría de 4 espacios, líneas de menos de 80 a 100 caracteres, una línea en blanco entre funciones.
- Funciones cortas que hacen una sola cosa y con un nombre que lo dice.
- Docstrings que explican qué hace la función, qué recibe y qué devuelve.
- Anotaciones de tipo: def media(datos: list[float]) -> float.
> Herramientas que lo revisan solas: ruff o flake8 (estilo), black (formato) y mypy (tipos).

## Registros con logging
| import logging
| logging.basicConfig(level=logging.INFO)
| logging.info("Procesando %d archivos", n)
| logging.warning("Falta el campo precio en la fila %d", i)
A diferencia de print, se puede bajar o subir el nivel de detalle sin tocar el código.

## Entornos virtuales y paquetes
Cada proyecto debería tener su propio entorno para no mezclar versiones:
| python -m venv .venv
| .venv\\Scripts\\activate          # Windows (en macOS y Linux: source .venv/bin/activate)
| pip install requests
| pip freeze > requirements.txt
> Alternativas modernas: uv o poetry hacen lo mismo más rápido y guardan las versiones exactas.
` },
  { id: 'proyectos', n: 9, name: 'Proyectos guiados', sum: 'Programas completos paso a paso: analizar texto, validar datos, gestionar un inventario y procesar ventas.', match: NUNCA,
    k: [['Descomponer', 'Dividir un programa grande en funciones pequeñas que se pueden probar por separado.'], ['Entrada, proceso, salida', 'Esquema de casi todo programa: leer datos, transformarlos y mostrar o guardar el resultado.'], ['Validar', 'Comprobar que los datos tienen el formato esperado antes de usarlos.'], ['Normalizar', 'Llevar los datos a una forma común: minúsculas, sin espacios sobrantes, sin tildes.'], ['Estado', 'Datos que el programa guarda y modifica mientras funciona (un inventario, una partida).'], ['Persistencia', 'Guardar el estado en un archivo (JSON, CSV) para recuperarlo la próxima vez.'], ['Interfaz de línea de comandos', 'Programa que se usa desde la terminal; argparse lee sus opciones.'], ['Iterar', 'Construir el programa en versiones pequeñas que funcionan y mejorarlo poco a poco.']],
    notes: `
## Cómo abordar un proyecto
- **Define el objetivo** en una frase: «contar las palabras más frecuentes de un texto».
- **Escribe ejemplos** de entrada y salida esperada.
- **Descompón** el problema en funciones: leer, limpiar, contar, mostrar.
- **Construye por partes**: haz que funcione una pieza, pruébala y pasa a la siguiente.
- **Mejora al final**: nombres, mensajes de error, casos límite.
> Un programa que hace poco y funciona vale más que uno que lo hace todo y falla.

## Proyecto 1: analizador de texto
Objetivo: dado un texto, contar palabras, encontrar las más frecuentes y calcular la longitud media.
| import re
| from collections import Counter
| def palabras(texto):
|     return re.findall(r"\\w+", texto.lower())
| def informe(texto, n=3):
|     ps = palabras(texto)
|     return {"total": len(ps), "distintas": len(set(ps)), "frecuentes": Counter(ps).most_common(n)}
Ampliaciones: ignorar palabras vacías («el», «de», «y»), leer el texto de un archivo, mostrar un gráfico de barras con caracteres.

## Proyecto 2: validador de contraseñas
Reglas habituales: al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo. Cada regla es una función o una expresión pequeña:
| def errores(clave):
|     fallos = []
|     if len(clave) < 8: fallos.append("mínimo 8 caracteres")
|     if not any(c.isupper() for c in clave): fallos.append("una mayúscula")
|     if not any(c.isdigit() for c in clave): fallos.append("un número")
|     return fallos
Devolver la lista de fallos, en lugar de un simple True o False, permite explicar al usuario qué le falta.

## Proyecto 3: inventario con clases
Una clase Producto y una clase Inventario que guarda productos en un diccionario por código. Métodos: añadir, retirar (con error si no hay existencias), valor total, productos con pocas existencias. Persistencia con json.

## Proyecto 4: informe de ventas desde un CSV
Leer el archivo con csv.DictReader, convertir los números, agrupar por producto o por mes con un diccionario o defaultdict, ordenar y escribir un resumen. Es exactamente lo que hace una hoja de cálculo, pero automatizado y repetible.

## Y después
- **Automatizar tareas**: renombrar archivos, generar informes, enviar correos (smtplib).
- **Web**: requests para descargar datos de una API; Flask o FastAPI para crear la tuya.
- **Datos**: pandas para tablas y matplotlib para gráficos (se instalan con pip; no están en esta app).
- **Interfaces**: tkinter (incluido en Python) o una web sencilla.
` });

  BANK.python.q.push(
    // ───── Biblioteca estándar ─────
    mc(1, '¿Qué hace import math?', ['Carga el módulo math para usar sus funciones', 'Instala el módulo math desde internet', 'Copia el código de math en tu archivo', 'Crea un archivo llamado math'], 'Los módulos de la biblioteca estándar vienen con Python; import solo los carga.', { tp: 'stdlib' }),
    mc(2, '¿Qué imprime este código?', ["[('a', 3), ('n', 2)]", "{'a': 3, 'n': 2, 'b': 1}", "['a', 'n']", '3'], 'most_common(2) devuelve las dos parejas (elemento, recuento) más frecuentes.', { tp: 'stdlib', c: 'from collections import Counter\nprint(Counter("banana").most_common(2))' }),
    tx(2, '¿Qué imprime este código?', ['31'], 'Restar dos fechas da un timedelta; .days son los días de diferencia (enero tiene 31).', { tp: 'stdlib', c: 'from datetime import date\nprint((date(2025, 2, 1) - date(2025, 1, 1)).days)' }),
    mc(2, '¿Qué ventaja tiene defaultdict(list) sobre un diccionario normal?', ['Crea una lista vacía al acceder a una clave que no existe', 'Ordena las claves automáticamente', 'Impide repetir valores', 'Es inmutable'], 'Así se puede hacer grupos[clave].append(x) sin comprobar antes si la clave existe.', { tp: 'stdlib' }),
    tx(2, '¿Qué imprime este código?', ['3'], 'combinations("ABC", 2) da AB, AC y BC: el orden no importa.', { tp: 'stdlib', c: 'from itertools import combinations\nprint(len(list(combinations("ABC", 2))))' }),
    mc(2, '¿Qué devuelve re.findall(r"\\d+", "Tengo 3 gatos y 12 peces")?', ["['3', '12']", '[3, 12]', "['3', '1', '2']", '15'], '\\d+ significa «uno o más dígitos seguidos»; findall devuelve las cadenas encontradas.', { tp: 'stdlib' }),
    mc(3, '¿Por qué 0.1 + 0.2 == 0.3 da False en Python?', ['Los decimales se guardan en binario de forma aproximada', 'Es un error de Python que se corrigió en la versión 3', 'Porque == compara la identidad', 'Porque 0.3 es un int'], 'Usa math.isclose() para comparar reales, o el módulo decimal para cálculos exactos con dinero.', { tp: 'stdlib' }),
    code(1, 'py', 'Usa el módulo math para imprimir la raíz cuadrada de 144 como número entero (12).', { tp: 'stdlib', starter: 'import math\n', out: '12', sol: 'import math\nprint(int(math.sqrt(144)))', e: 'math.sqrt devuelve un float (12.0); int() lo convierte en 12. También vale math.isqrt(144).' }),
    code(2, 'py', 'Completa la función para que devuelva la letra más frecuente de un texto (ignorando espacios). Usa Counter.', { tp: 'stdlib', starter: 'from collections import Counter\n\ndef mas_frecuente(texto):\n    # tu código aquí\n    pass\n', post: 'print(mas_frecuente("hola mundo hola"), mas_frecuente("aab"))', out: 'o a', sol: 'from collections import Counter\n\ndef mas_frecuente(texto):\n    return Counter(texto.replace(" ", "")).most_common(1)[0][0]', e: 'most_common(1) devuelve una lista con una pareja; [0][0] extrae la letra.' }),
    code(2, 'py', 'Completa la función para que agrupe las palabras por su primera letra y devuelva un diccionario normal. Usa defaultdict.', { tp: 'stdlib', starter: 'from collections import defaultdict\n\ndef agrupar(palabras):\n    # tu código aquí\n    pass\n', post: 'print(agrupar(["pera", "piña", "manzana", "mango", "kiwi"]))', out: "{'p': ['pera', 'piña'], 'm': ['manzana', 'mango'], 'k': ['kiwi']}", sol: 'from collections import defaultdict\n\ndef agrupar(palabras):\n    g = defaultdict(list)\n    for p in palabras:\n        g[p[0]].append(p)\n    return dict(g)', e: 'g[p[0]] crea la lista la primera vez; dict(g) lo convierte en un diccionario normal para imprimirlo.' }),
    code(2, 'py', 'Completa la función para que devuelva cuántos días faltan desde la fecha inicio hasta la fecha fin (ambas en formato "dd/mm/aaaa").', { tp: 'stdlib', starter: 'from datetime import datetime\n\ndef dias_entre(inicio, fin):\n    # tu código aquí\n    pass\n', post: 'print(dias_entre("01/01/2025", "15/03/2025"), dias_entre("28/02/2024", "01/03/2024"))', out: '73 2', sol: 'from datetime import datetime\n\ndef dias_entre(inicio, fin):\n    f = "%d/%m/%Y"\n    return (datetime.strptime(fin, f) - datetime.strptime(inicio, f)).days', e: 'strptime convierte el texto en fecha con el formato indicado. 2024 es bisiesto: del 28 de febrero al 1 de marzo hay 2 días.' }),
    code(2, 'py', 'Convierte el texto JSON de la variable datos en un diccionario y imprime el nombre y el número de aficiones separados por un espacio.', { tp: 'stdlib', starter: 'import json\ndatos = \'{"nombre": "Lucía", "aficiones": ["leer", "nadar", "bailar"]}\'\n', out: 'Lucía 3', sol: 'import json\ndatos = \'{"nombre": "Lucía", "aficiones": ["leer", "nadar", "bailar"]}\'\nd = json.loads(datos)\nprint(d["nombre"], len(d["aficiones"]))', e: 'json.loads (load string) convierte texto en objetos de Python; json.dumps hace lo contrario.' }),
    code(3, 'py', 'La variable csv_texto contiene un CSV. Calcula el importe total de las ventas (precio × unidades) e imprímelo con dos decimales.', { tp: 'stdlib', starter: 'import csv, io\ncsv_texto = """producto,precio,unidades\nlibro,12.5,3\nlápiz,0.8,10\ncuaderno,3.25,4"""\n', out: '58.50', sol: 'import csv, io\ncsv_texto = """producto,precio,unidades\nlibro,12.5,3\nlápiz,0.8,10\ncuaderno,3.25,4"""\ntotal = 0\nfor fila in csv.DictReader(io.StringIO(csv_texto)):\n    total += float(fila["precio"]) * int(fila["unidades"])\nprint(f"{total:.2f}")', e: 'io.StringIO hace que un texto se comporte como un archivo. 37,5 + 8 + 13 = 58,50.' }),
    code(3, 'py', 'Completa la función para que devuelva todas las direcciones de correo que aparecen en un texto, usando re.findall.', { tp: 'stdlib', starter: 'import re\n\ndef correos(texto):\n    # tu código aquí\n    pass\n', post: 'print(correos("Escribe a ana@mail.com o a info.ventas@empresa.es, no a @falso"))', out: "['ana@mail.com', 'info.ventas@empresa.es']", sol: 'import re\n\ndef correos(texto):\n    return re.findall(r"[\\w.]+@\\w+\\.\\w+", texto)', e: '[\\w.]+ son letras, dígitos o puntos antes de la @; después, un dominio y una extensión.' }),

    // ───── Algoritmos ─────
    mc(1, '¿Qué necesita toda función recursiva para no ejecutarse sin fin?', ['Un caso base', 'Un bucle while', 'Una variable global', 'Un return al principio'], 'El caso base es la situación en la que la función responde sin volver a llamarse.', { tp: 'algoritmos' }),
    mc(2, '¿Qué requisito tiene la búsqueda binaria?', ['La lista debe estar ordenada', 'La lista debe tener un número par de elementos', 'Los elementos deben ser números', 'La lista no puede tener repetidos'], 'Si no está ordenada, descartar una mitad no tiene sentido.', { tp: 'algoritmos' }),
    tx(2, 'En una lista ordenada de 1 000 000 elementos, ¿cuántas comparaciones hace como máximo una búsqueda binaria (aproximadamente)?', ['20', 'veinte', '21'], 'log₂(1 000 000) ≈ 20: cada paso divide la lista por la mitad.', { tp: 'algoritmos' }),
    mc(2, '¿Qué estructura usarías para atender peticiones por orden de llegada?', ['Una cola (deque)', 'Una pila (list con append y pop)', 'Un conjunto', 'Una tupla'], 'Una cola es FIFO: el primero en llegar es el primero en salir.', { tp: 'algoritmos' }),
    mc(2, '¿Por qué lista.pop(0) es mala idea para una cola grande?', ['Desplaza todos los elementos: es O(n)', 'Borra el último elemento', 'Da error con listas vacías', 'No existe ese método'], 'deque.popleft() hace lo mismo en O(1).', { tp: 'algoritmos' }),
    mc(3, '¿Qué complejidad tiene ordenar con sorted()?', ['O(n log n)', 'O(n)', 'O(n²)', 'O(1)'], 'Python usa Timsort, una mezcla de ordenación por mezcla e inserción.', { tp: 'algoritmos' }),
    tx(3, '¿Qué imprime este código?', ['[1, 2, 4, 7]'], 'Es la ordenación por inserción: cada elemento se desplaza hacia la izquierda hasta su sitio.', { tp: 'algoritmos', c: 'v = [4, 2, 7, 1]\nfor i in range(1, len(v)):\n    j = i\n    while j > 0 and v[j - 1] > v[j]:\n        v[j - 1], v[j] = v[j], v[j - 1]\n        j -= 1\nprint(v)' }),
    code(1, 'py', 'Completa la función recursiva para que devuelva la suma de los números del 1 al n.', { tp: 'algoritmos', starter: 'def suma_hasta(n):\n    # tu código aquí\n    pass\n', post: 'print(suma_hasta(1), suma_hasta(4), suma_hasta(100))', out: '1 10 5050', sol: 'def suma_hasta(n):\n    if n == 1:\n        return 1\n    return n + suma_hasta(n - 1)', e: 'Caso base n == 1; si no, n más la suma de los anteriores.' }),
    code(2, 'py', 'Completa la búsqueda binaria: devuelve la posición de x en la lista ordenada, o -1 si no está.', { tp: 'algoritmos', starter: 'def busqueda_binaria(lista, x):\n    izq, der = 0, len(lista) - 1\n    # tu código aquí\n    return -1\n', post: 'v = [2, 5, 8, 12, 16, 23, 38]\nprint(busqueda_binaria(v, 23), busqueda_binaria(v, 2), busqueda_binaria(v, 7))', out: '5 0 -1', sol: 'def busqueda_binaria(lista, x):\n    izq, der = 0, len(lista) - 1\n    while izq <= der:\n        medio = (izq + der) // 2\n        if lista[medio] == x:\n            return medio\n        if lista[medio] < x:\n            izq = medio + 1\n        else:\n            der = medio - 1\n    return -1', e: 'Se compara con el centro y se descarta la mitad donde no puede estar.' }),
    code(2, 'py', 'Completa la función para que diga si los paréntesis, corchetes y llaves de un texto están equilibrados. Usa una pila.', { tp: 'algoritmos', starter: 'def equilibrado(texto):\n    pares = {")": "(", "]": "[", "}": "{"}\n    pila = []\n    # tu código aquí\n', post: 'print(equilibrado("(a[b]{c})"), equilibrado("(]"), equilibrado("(("), equilibrado(""))', out: 'True False False True', sol: 'def equilibrado(texto):\n    pares = {")": "(", "]": "[", "}": "{"}\n    pila = []\n    for c in texto:\n        if c in "([{":\n            pila.append(c)\n        elif c in pares:\n            if not pila or pila.pop() != pares[c]:\n                return False\n    return not pila', e: 'Cada apertura se apila; cada cierre debe coincidir con la última apertura. Al final la pila debe quedar vacía.' }),
    code(2, 'py', 'Completa la función para que diga si hay dos números distintos de la lista que sumen k, en una sola pasada (sin bucles anidados).', { tp: 'algoritmos', starter: 'def dos_suman(nums, k):\n    # tu código aquí\n    pass\n', post: 'print(dos_suman([3, 9, 1, 7], 10), dos_suman([1, 2, 4], 8), dos_suman([5, 5], 10))', out: 'True False True', sol: 'def dos_suman(nums, k):\n    vistos = set()\n    for x in nums:\n        if k - x in vistos:\n            return True\n        vistos.add(x)\n    return False', e: 'Para cada número se pregunta si su complemento ya ha aparecido; buscar en un conjunto es O(1).' }),
    code(3, 'py', 'Completa la función para que devuelva el número mínimo de pasos para ir de inicio a fin en el grafo (búsqueda en anchura), o -1 si no se puede.', { tp: 'algoritmos', starter: 'from collections import deque\n\ndef pasos(grafo, inicio, fin):\n    # tu código aquí\n    pass\n', post: 'red = {"A": ["B", "C"], "B": ["D"], "C": ["D", "E"], "D": ["F"], "E": ["F"], "F": [], "G": []}\nprint(pasos(red, "A", "F"), pasos(red, "A", "A"), pasos(red, "A", "G"))', out: '3 0 -1', sol: 'from collections import deque\n\ndef pasos(grafo, inicio, fin):\n    cola = deque([(inicio, 0)])\n    vistos = {inicio}\n    while cola:\n        nodo, d = cola.popleft()\n        if nodo == fin:\n            return d\n        for v in grafo[nodo]:\n            if v not in vistos:\n                vistos.add(v)\n                cola.append((v, d + 1))\n    return -1', e: 'La cola visita los nodos por niveles de distancia; el primero que llega al destino da el camino más corto.' }),
    code(3, 'py', 'Usa @lru_cache para que esta función que cuenta las formas de subir una escalera de n peldaños (de 1 en 1 o de 2 en 2) sea rápida.', { tp: 'algoritmos', starter: 'from functools import lru_cache\n\ndef formas(n):\n    if n <= 1:\n        return 1\n    return formas(n - 1) + formas(n - 2)\n', post: 'assert hasattr(formas, "cache_info"), "añade @lru_cache encima de la función"\nprint(formas(3), formas(10), formas(80))', out: '3 89 37889062373143906', sol: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef formas(n):\n    if n <= 1:\n        return 1\n    return formas(n - 1) + formas(n - 2)', e: 'Sin memoria, formas(80) haría billones de llamadas. Con @lru_cache cada valor se calcula una sola vez.' }),

    // ───── Calidad ─────
    mc(1, 'Un traceback termina con «ZeroDivisionError: division by zero». ¿Dónde está la causa?', ['En la última línea se dice qué pasó y en las de encima, dónde', 'Siempre en la primera línea del archivo', 'En la línea de import', 'No se puede saber'], 'Los tracebacks se leen de abajo arriba.', { tp: 'calidad' }),
    mc(1, '¿Qué error da "3" + 4?', ['TypeError', 'ValueError', 'NameError', 'SyntaxError'], 'No se puede sumar una cadena y un número: hay que convertir uno de los dos con int() o str().', { tp: 'calidad' }),
    mc(2, 'Llamas a texto.upper() y obtienes «AttributeError: \'NoneType\' object has no attribute \'upper\'». ¿Qué ha pasado probablemente?', ['Una función que debía devolver el texto no tiene return', 'El texto está vacío', 'upper no existe en Python', 'Falta importar el módulo string'], 'Una función sin return devuelve None; luego None.upper() falla.', { tp: 'calidad' }),
    mc(2, 'Según PEP 8, ¿cómo debería llamarse una función que calcula el precio final?', ['calcular_precio_final', 'CalcularPrecioFinal', 'calcularPrecioFinal', 'CALCULAR_PRECIO_FINAL'], 'Funciones y variables en minúsculas con guiones bajos; clases en MayúsculasPegadas.', { tp: 'calidad' }),
    mc(2, '¿Para qué sirve un entorno virtual (python -m venv)?', ['Para que cada proyecto tenga sus propios paquetes y versiones', 'Para ejecutar Python en internet', 'Para hacer el código más rápido', 'Para ocultar el código fuente'], 'Así dos proyectos pueden usar versiones distintas del mismo paquete sin conflictos.', { tp: 'calidad' }),
    mc(3, '¿Qué imprime print(f"{x=}") si x vale 5?', ['x=5', '5', '{x=}', 'x'], 'El signo = dentro de una f-string muestra el nombre y el valor: muy útil para depurar.', { tp: 'calidad' }),
    tx(2, '¿Cómo se llama el archivo donde se suelen listar los paquetes que necesita un proyecto? (nombre con extensión)', ['requirements.txt'], 'Se genera con pip freeze > requirements.txt y se instala con pip install -r requirements.txt.', { tp: 'calidad' }),
    code(1, 'py', 'Este código tiene un error. Corrígelo para que imprima: Tengo 30 años', { tp: 'calidad', starter: 'edad = 30\nprint("Tengo " + edad + " años")\n', out: 'Tengo 30 años', sol: 'edad = 30\nprint("Tengo " + str(edad) + " años")', e: 'Hay que convertir el número en texto con str(), o usar una f-string: f"Tengo {edad} años".' }),
    code(2, 'py', 'La función media falla con una lista vacía. Corrígela para que en ese caso devuelva 0.', { tp: 'calidad', starter: 'def media(datos):\n    return sum(datos) / len(datos)\n', post: 'print(media([2, 4, 9]), media([]))', out: '5.0 0', sol: 'def media(datos):\n    if not datos:\n        return 0\n    return sum(datos) / len(datos)', e: 'Una lista vacía es «falsa» en un if; así se evita dividir entre cero.' }),
    code(2, 'py', 'Escribe una función de prueba test_es_par con al menos tres assert que comprueben la función es_par (un par, un impar y el cero). Se comprobará que tus pruebas pasan con la función buena y detectan tres versiones erróneas.', { tp: 'calidad', starter: 'def es_par(n):\n    return n % 2 == 0\n\ndef test_es_par():\n    # tus assert aquí\n    pass\n', post: 'test_es_par()\nfallos = 0\nfor _mal in [lambda n: True, lambda n: False, lambda n: n % 2 == 1]:\n    es_par = _mal\n    try:\n        test_es_par()\n    except AssertionError:\n        fallos += 1\nprint("pruebas superadas" if fallos == 3 else "tus pruebas no detectan todas las versiones erróneas")', out: 'pruebas superadas', sol: 'def es_par(n):\n    return n % 2 == 0\n\ndef test_es_par():\n    assert es_par(4)\n    assert not es_par(7)\n    assert es_par(0)', e: 'assert lanza un error si la condición es falsa; si todas pasan, no ocurre nada. pytest ejecutaría esta función automáticamente.' }),
    code(3, 'py', 'Refactoriza: la función repite tres veces la misma lógica. Guarda los precios en un diccionario llamado PRECIOS y reescribe la función para que dé el mismo resultado sin cadenas de if/elif.', { tp: 'calidad', starter: 'def precio(producto, cantidad):\n    if producto == "pan":\n        return 1.2 * cantidad\n    elif producto == "leche":\n        return 0.95 * cantidad\n    elif producto == "huevos":\n        return 2.5 * cantidad\n    return None\n', post: 'assert isinstance(globals().get("PRECIOS"), dict), "falta el diccionario PRECIOS"\nPRECIOS["kiwi"] = 0.5\nprint(precio("pan", 2), precio("huevos", 1), precio("kiwi", 3))', out: '2.4 2.5 1.5', sol: 'PRECIOS = {"pan": 1.2, "leche": 0.95, "huevos": 2.5}\n\ndef precio(producto, cantidad):\n    if producto not in PRECIOS:\n        return None\n    return PRECIOS[producto] * cantidad', e: 'Los datos van en una estructura y la lógica se escribe una sola vez: la prueba añade un kiwi al diccionario y la función lo reconoce sin tocar su código.' }),

    // ───── Proyectos ─────
    mc(1, '¿Cuál es el primer paso razonable al empezar un proyecto?', ['Definir el objetivo y escribir ejemplos de entrada y salida', 'Escribir todo el código de una vez', 'Elegir los colores de la interfaz', 'Instalar muchas librerías'], 'Saber exactamente qué debe hacer el programa evita reescribirlo después.', { tp: 'proyectos' }),
    mc(2, '¿Por qué un validador de contraseñas debería devolver la lista de fallos en vez de True o False?', ['Para explicar al usuario qué le falta', 'Porque es más rápido', 'Porque Python no permite devolver booleanos', 'Para guardar la contraseña'], 'Un mensaje concreto («falta un número») es mucho más útil que un simple «no válida».', { tp: 'proyectos' }),
    code(1, 'py', 'Proyecto 1 · Paso 1: completa la función para que devuelva la lista de palabras de un texto en minúsculas, sin signos de puntuación. Usa re.findall(r"\\w+", …).', { tp: 'proyectos', starter: 'import re\n\ndef palabras(texto):\n    # tu código aquí\n    pass\n', post: 'print(palabras("¡Hola, mundo! Hola otra vez."))', out: "['hola', 'mundo', 'hola', 'otra', 'vez']", sol: 'import re\n\ndef palabras(texto):\n    return re.findall(r"\\w+", texto.lower())', e: '\\w+ captura secuencias de letras (incluidas las tildes) y dígitos; lower() iguala mayúsculas y minúsculas.' }),
    code(2, 'py', 'Proyecto 1 · Paso 2: completa informe para que devuelva una tupla (total de palabras, palabras distintas, palabra más frecuente).', { tp: 'proyectos', starter: 'import re\nfrom collections import Counter\n\ndef palabras(texto):\n    return re.findall(r"\\w+", texto.lower())\n\ndef informe(texto):\n    # tu código aquí\n    pass\n', post: 'print(informe("El gato y el perro. El gato duerme."))', out: "(8, 5, 'el')", sol: 'import re\nfrom collections import Counter\n\ndef palabras(texto):\n    return re.findall(r"\\w+", texto.lower())\n\ndef informe(texto):\n    ps = palabras(texto)\n    return len(ps), len(set(ps)), Counter(ps).most_common(1)[0][0]', e: 'Reutilizar la función del paso 1 es la idea: cada pieza hace una sola cosa.' }),
    code(2, 'py', 'Proyecto 2: completa la función para que devuelva la lista de reglas que incumple la contraseña: "8 caracteres", "mayúscula", "número" y "símbolo" (en ese orden).', { tp: 'proyectos', starter: 'def errores(clave):\n    fallos = []\n    # tu código aquí\n    return fallos\n', post: 'print(errores("abc"))\nprint(errores("Segura#2025"))\nprint(errores("sinmayuscula1!"))', out: "['8 caracteres', 'mayúscula', 'número', 'símbolo']\n[]\n['mayúscula']", sol: 'def errores(clave):\n    fallos = []\n    if len(clave) < 8:\n        fallos.append("8 caracteres")\n    if not any(c.isupper() for c in clave):\n        fallos.append("mayúscula")\n    if not any(c.isdigit() for c in clave):\n        fallos.append("número")\n    if all(c.isalnum() for c in clave):\n        fallos.append("símbolo")\n    return fallos', e: 'any() comprueba si algún carácter cumple la condición; un símbolo es cualquier carácter que no sea letra ni dígito.' }),
    code(3, 'py', 'Proyecto 3: completa la clase Inventario. añadir suma unidades; retirar lanza ValueError si no hay suficientes; valor devuelve la suma de precio × unidades.', { tp: 'proyectos', starter: 'class Inventario:\n    def __init__(self):\n        self.items = {}   # nombre -> [precio, unidades]\n\n    def anadir(self, nombre, precio, unidades):\n        pass\n\n    def retirar(self, nombre, unidades):\n        pass\n\n    def valor(self):\n        pass\n', post: 'inv = Inventario()\ninv.anadir("tornillo", 0.1, 100)\ninv.anadir("tuerca", 0.05, 200)\ninv.anadir("tornillo", 0.1, 50)\ninv.retirar("tuerca", 20)\ntry:\n    inv.retirar("tornillo", 500)\nexcept ValueError:\n    print("sin existencias")\nprint(round(inv.valor(), 2), inv.items["tornillo"][1])', out: 'sin existencias\n24.0 150', sol: 'class Inventario:\n    def __init__(self):\n        self.items = {}\n\n    def anadir(self, nombre, precio, unidades):\n        if nombre in self.items:\n            self.items[nombre][1] += unidades\n        else:\n            self.items[nombre] = [precio, unidades]\n\n    def retirar(self, nombre, unidades):\n        if nombre not in self.items or self.items[nombre][1] < unidades:\n            raise ValueError("No hay suficientes " + nombre)\n        self.items[nombre][1] -= unidades\n\n    def valor(self):\n        return sum(p * u for p, u in self.items.values())', e: '150 tornillos a 0,10 € más 180 tuercas a 0,05 € suman 24 €.' }),
    code(3, 'py', 'Proyecto 4: con los datos del CSV, imprime cada producto y su importe total (precio × unidades) ordenados de mayor a menor importe, en formato «producto: importe» con dos decimales.', { tp: 'proyectos', starter: 'import csv, io\nfrom collections import defaultdict\nventas = """fecha,producto,precio,unidades\n2025-01-03,café,2.5,4\n2025-01-03,té,1.8,2\n2025-01-04,café,2.5,6\n2025-01-05,zumo,3.0,5\n2025-01-05,té,1.8,3"""\n', out: 'café: 25.00\nzumo: 15.00\nté: 9.00', sol: 'import csv, io\nfrom collections import defaultdict\nventas = """fecha,producto,precio,unidades\n2025-01-03,café,2.5,4\n2025-01-03,té,1.8,2\n2025-01-04,café,2.5,6\n2025-01-05,zumo,3.0,5\n2025-01-05,té,1.8,3"""\ntotal = defaultdict(float)\nfor f in csv.DictReader(io.StringIO(ventas)):\n    total[f["producto"]] += float(f["precio"]) * int(f["unidades"])\nfor prod, imp in sorted(total.items(), key=lambda x: x[1], reverse=True):\n    print(f"{prod}: {imp:.2f}")', e: 'Leer, agrupar con defaultdict y ordenar con key: el esquema de casi cualquier informe.' }),
  );

  // Secciones nuevas de la chuleta de Python
  if (window.CHEATS && CHEATS.python) CHEATS.python.s.push(
    ['Biblioteca estándar', [
      ['from collections import Counter', 'Counter(lista).most_common(3): los tres más frecuentes'],
      ['defaultdict(list)', 'Diccionario que crea una lista al usar una clave nueva: agrupar sin comprobar'],
      ['deque([…]).popleft()', 'Cola eficiente: quitar por el principio en O(1)'],
      ['namedtuple("Punto", "x y")', 'Tupla con campos con nombre: p.x, p.y'],
      ['from datetime import date, timedelta', 'date(2025, 1, 1) + timedelta(days=30)'],
      ['datetime.strptime(t, "%d/%m/%Y")', 'Texto → fecha (strftime hace lo contrario)'],
      ['json.loads(texto) / json.dumps(obj)', 'JSON → objeto / objeto → JSON (ensure_ascii=False para tildes)'],
      ['csv.DictReader(f)', 'Cada fila de un CSV como diccionario; los números llegan como texto'],
      ['re.findall(r"\\d+", t)', 'Todas las coincidencias de un patrón (re.sub para reemplazar)'],
      ['itertools.combinations(v, 2)', 'Parejas sin orden (permutations: con orden; product: todas las combinaciones)'],
      ['random.seed(1); random.randint(1, 6)', 'Azar reproducible y entero entre 1 y 6'],
      ['math.isclose(a, b)', 'Comparar números reales sin problemas de redondeo'],
      ['Path("carpeta").glob("*.txt")', 'Recorrer archivos con pathlib']]],
    ['Algoritmos útiles', [
      ['bisect.bisect_left(v, x)', 'Búsqueda binaria en una lista ordenada'],
      ['sorted(v, key=lambda p: (p.edad, p.nombre))', 'Ordenar por varios criterios'],
      ['pila.append(x); pila.pop()', 'Pila (LIFO)'],
      ['cola.append(x); cola.popleft()', 'Cola (FIFO) con deque'],
      ['@lru_cache(maxsize=None)', 'Memoización: recordar resultados de una función'],
      ['if k - x in vistos', 'Buscar parejas en una pasada con un conjunto de vistos'],
      ['heapq.nsmallest(3, v)', 'Los tres menores sin ordenar toda la lista']]],
    ['Depurar y probar', [
      ['print(f"{x=}")', 'Muestra nombre y valor: x=5'],
      ['breakpoint()', 'Pausa el programa y abre el depurador'],
      ['assert cond, "mensaje"', 'Falla con AssertionError si la condición es falsa'],
      ['def test_algo(): assert f(2) == 4', 'Prueba que pytest ejecuta automáticamente'],
      ['logging.info("…")', 'Registro con niveles en lugar de print'],
      ['python -m venv .venv', 'Crear un entorno virtual para el proyecto'],
      ['pip install -r requirements.txt', 'Instalar los paquetes del proyecto']]],
  );
})();
