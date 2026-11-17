// Índice de temas de Python. n = orden en el índice. El orden del array es el de reparto de las preguntas
// que no indican su tema con tp: el último tema recoge el resto.
// Formato de los apuntes: "## " título · "- " lista · "$ " fórmula · "> " nota · "| " línea de código · **negrita**
window.TOPICS = window.TOPICS || {};
TOPICS.python = [
  { id: 'avanzado', n: 5, name: 'Python avanzado', sum: 'Referencias, funciones de orden superior, decoradores, generadores y eficiencia.',
    match: /yield|decorador|\bis\b|L=\[\]|complejidad|b = a|fib\(|frecuencias|palindromo|lambda/i,
    k: [['Mutable e inmutable', 'Listas, diccionarios y conjuntos pueden modificarse; números, cadenas y tuplas no.'], ['Referencia', 'b = a no copia el objeto: ambas variables apuntan al mismo. Para copiar una lista: a.copy() o a[:].'], ['Copia superficial y profunda', 'copy() duplica solo el contenedor; copy.deepcopy() duplica también los objetos que contiene.'], ['is frente a ==', 'is compara identidad (mismo objeto); == compara valor.'], ['Función de orden superior', 'La que recibe o devuelve otra función: sorted(key=…), map, filter.'], ['lambda', 'Función anónima de una sola expresión: lambda x: x * 2.'], ['Clausura', 'Función interna que recuerda las variables de la función que la creó.'], ['Decorador', 'Función que recibe otra función y devuelve una versión ampliada; @deco equivale a f = deco(f).'], ['Generador', 'Función con yield que produce valores bajo demanda, sin guardarlos todos en memoria.'], ['Expresión generadora', '(x * x for x in datos): como una lista por comprensión, pero perezosa.'], ['Anotaciones de tipo', 'def f(x: int) -> str: documentan los tipos esperados; Python no las comprueba al ejecutar.'], ['Notación O grande', 'Describe cómo crece el tiempo de un algoritmo con el tamaño de la entrada: O(1), O(log n), O(n), O(n²)…']],
    notes: `
## Variables, objetos y referencias
En Python una variable no es una caja que contiene un valor: es una **etiqueta** que apunta a un objeto. Por eso asignar no copia:
| a = [1, 2, 3]
| b = a          # b y a son la MISMA lista
| b.append(4)
| print(a)       # [1, 2, 3, 4]
Para obtener una copia independiente se usa a.copy() o a[:]. Esa copia es **superficial**: duplica la lista, pero no los objetos que contiene. Si la lista tiene listas dentro, hace falta una copia **profunda**:
| import copy
| tabla = [[1, 2], [3, 4]]
| c = copy.deepcopy(tabla)

## Mutables e inmutables
- **Inmutables**: int, float, str, tuple, bool. No pueden cambiar; cualquier «modificación» crea un objeto nuevo.
- **Mutables**: list, dict, set. Pueden cambiar sin dejar de ser el mismo objeto.

Esto explica por qué una función puede modificar una lista que recibe como argumento, pero no un número.
> Trampa clásica: un valor por defecto mutable se crea una sola vez y se comparte entre llamadas.
| def f(a, L=[]):      # MAL: la lista persiste entre llamadas
|     L.append(a)
|     return L
| def f(a, L=None):    # BIEN
|     if L is None:
|         L = []
|     L.append(a)
|     return L

## is y ==
**==** compara valores; **is** comprueba si son el mismo objeto en memoria.
| a = [1, 2]
| b = [1, 2]
| a == b      # True: mismo contenido
| a is b      # False: son dos listas distintas
En la práctica, is se usa casi solo con None: if x is None.

## Funciones como objetos
Las funciones son valores como cualquier otro: pueden guardarse en variables, pasarse como argumento y devolverse. Una función que recibe o devuelve otra es de **orden superior**.
| def aplicar(f, x):
|     return f(x)
| aplicar(abs, -3)       # 3
Una **lambda** es una función anónima de una sola expresión, útil para funciones pequeñas de usar y tirar:
| cuadrado = lambda x: x ** 2
| sorted(palabras, key=len)                    # ordena por longitud
| sorted(personas, key=lambda p: p[1])         # ordena por el segundo campo
| max(precios, key=precios.get)                # clave con el valor más alto

## map, filter y compañía
- **map(f, datos)** aplica f a cada elemento.
- **filter(f, datos)** se queda con los elementos para los que f es verdadera.
- **any()** y **all()** comprueban si alguna o todas las condiciones se cumplen.
| list(map(lambda x: x * 2, [1, 2, 3]))        # [2, 4, 6]
| list(filter(lambda x: x > 1, [1, 2, 3]))     # [2, 3]
| any(n < 0 for n in nums)
En Python moderno suelen preferirse las listas por comprensión, que dicen lo mismo con más claridad.

## Clausuras
Una función definida dentro de otra recuerda las variables de la función exterior, incluso después de que esta haya terminado:
| def multiplicador(n):
|     def por(x):
|         return x * n
|     return por
|
| doble = multiplicador(2)
| doble(5)       # 10

## Decoradores
Un decorador es una función que recibe otra y devuelve una versión ampliada, sin tocar su código. Se apoya en las clausuras:
| def avisar(f):
|     def envoltura(*args, **kwargs):
|         print("Llamando a", f.__name__)
|         return f(*args, **kwargs)
|     return envoltura
|
| @avisar
| def suma(a, b):
|     return a + b
Escribir @avisar equivale a suma = avisar(suma). Se usan para medir tiempos, registrar llamadas, comprobar permisos o guardar resultados ya calculados (functools.lru_cache).

## Generadores
Una función con **yield** no devuelve un resultado de golpe: devuelve un generador, que calcula cada valor cuando se le pide y recuerda por dónde iba.
| def pares(n):
|     for i in range(n):
|         if i % 2 == 0:
|             yield i
|
| for p in pares(10):
|     print(p)
Son ideales para secuencias muy largas o infinitas, porque no ocupan memoria por adelantado. Solo se pueden recorrer una vez.

Una **expresión generadora** es la versión perezosa de una lista por comprensión; basta cambiar los corchetes por paréntesis:
| sum(x * x for x in range(1000000))     # no crea la lista entera

## Iteradores y gestores de contexto
Todo lo que se puede recorrer con for es un **iterable**. Por debajo, for pide un iterador con iter() y va llamando a next() hasta que se agota.

Un **gestor de contexto** es lo que se usa con with: garantiza que algo se libera al salir del bloque, pase lo que pase. El caso típico son los archivos.

## Anotaciones de tipo
Indican qué tipos espera y devuelve una función. Python no las comprueba al ejecutar, pero ayudan a quien lee y a los editores a detectar errores:
| def saludo(nombre: str, veces: int = 1) -> str:
|     return ("Hola, " + nombre + " ") * veces

## Eficiencia: la notación O grande
Describe cómo crece el coste de un algoritmo cuando crece la entrada (n):
- **O(1)**, constante: acceder a lista[i], buscar una clave en un diccionario o un elemento en un conjunto.
- **O(log n)**, logarítmico: búsqueda binaria en una lista ordenada.
- **O(n)**, lineal: recorrer una lista, buscar con in en una lista.
- **O(n log n)**: ordenar con sorted().
- **O(n²)**, cuadrático: dos bucles anidados sobre los mismos datos.
> Ejemplo: comprobar si hay duplicados comparando cada elemento con todos los demás es O(n²). Con len(set(datos)) != len(datos) es O(n).
> Ejemplo: fib recursivo ingenuo repite cálculos y crece exponencialmente; la versión con bucle es O(n).
Regla práctica: si vas a preguntar muchas veces «¿está x en esta colección?», usa un conjunto o un diccionario, no una lista.
` },
  { id: 'poo', n: 4, name: 'Clases, módulos y archivos', sum: 'Programación orientada a objetos, import y lectura y escritura de archivos.',
    match: /\bclass\b|__init__|\bself\b|\bimport\b|open\(/,
    k: [['Clase y objeto', 'La clase es el molde; cada objeto (instancia) creado con ella tiene sus propios datos.'], ['__init__', 'Método que se ejecuta al crear el objeto; inicializa sus atributos.'], ['self', 'Primer parámetro de todo método: el objeto concreto sobre el que se llama.'], ['Atributo y método', 'Atributo: dato del objeto (p.nombre). Método: función del objeto (p.saludar()).'], ['__str__', 'Método especial que define cómo se muestra el objeto con print().'], ['Herencia', 'class Hija(Madre): la hija recibe los atributos y métodos de la madre y puede redefinirlos.'], ['super()', 'Da acceso a los métodos de la clase madre, normalmente para llamar a su __init__.'], ['import', 'Carga un módulo: import math · from math import sqrt · import numpy as np.'], ['Biblioteca estándar', 'Módulos que vienen con Python: math, random, datetime, json, csv, collections…'], ['with open(…) as f', 'Abre un archivo y lo cierra automáticamente al salir del bloque.'], ['Modos de apertura', '"r" leer (por defecto), "w" escribir desde cero, "a" añadir al final.'], ['if __name__ == "__main__"', 'El bloque solo se ejecuta si el archivo se lanza directamente, no si se importa.']],
    notes: `
## Por qué clases
Hasta ahora los datos (variables) y el código que los maneja (funciones) iban por separado. La **programación orientada a objetos** los junta: una **clase** describe un tipo de cosa, con sus datos y lo que sabe hacer, y a partir de ella se crean **objetos** o instancias. En realidad llevas usándolos desde el principio: una lista es un objeto de la clase list, y nums.append(4) es una llamada a uno de sus métodos.

## Definir una clase
| class Perro:
|     def __init__(self, nombre, edad):
|         self.nombre = nombre
|         self.edad = edad
|
|     def ladrar(self):
|         return self.nombre + " dice: ¡Guau!"
|
| toby = Perro("Toby", 3)
| print(toby.nombre)       # Toby
| print(toby.ladrar())     # Toby dice: ¡Guau!
- **__init__** es el constructor: se ejecuta solo al crear el objeto y prepara sus atributos.
- **self** es el propio objeto. Es siempre el primer parámetro de un método, pero al llamarlo no se escribe: Python lo pasa por ti.
- Los **atributos** (self.nombre) son los datos de cada objeto. Cada instancia tiene los suyos.
- Los **métodos** son funciones definidas dentro de la clase.

Por convención, los nombres de clase se escriben con mayúscula inicial: Perro, CuentaBancaria.

## Métodos especiales
Los métodos con doble guion bajo permiten que tus objetos se comporten como los de Python:
| class Punto:
|     def __init__(self, x, y):
|         self.x, self.y = x, y
|     def __str__(self):
|         return f"({self.x}, {self.y})"
|     def __eq__(self, otro):
|         return self.x == otro.x and self.y == otro.y
|
| print(Punto(1, 2))               # (1, 2)
| Punto(1, 2) == Punto(1, 2)       # True
- __str__: texto que muestra print().
- __eq__: qué significa ==.
- __len__: qué devuelve len().

## Herencia
Una clase puede basarse en otra. La clase hija recibe todo lo de la madre y puede añadir o redefinir métodos:
| class Animal:
|     def __init__(self, nombre):
|         self.nombre = nombre
|     def hablar(self):
|         return "..."
|
| class Gato(Animal):
|     def hablar(self):                # redefine el método
|         return "Miau"
|
| class Cachorro(Perro):
|     def __init__(self, nombre):
|         super().__init__(nombre, 0)  # llama al constructor de la madre
super() da acceso a la clase madre. La herencia sirve para no repetir código, pero conviene no abusar: si la relación no es «un gato **es un** animal», probablemente no hace falta.

## Clases de datos
Cuando una clase solo guarda datos, dataclass escribe por ti el __init__, el __str__ y el __eq__:
| from dataclasses import dataclass
|
| @dataclass
| class Producto:
|     nombre: str
|     precio: float

## Módulos e import
Un **módulo** es un archivo .py con funciones, clases y variables que se pueden usar desde otro archivo. Hay tres formas de importar:
| import math                    # se usa como math.sqrt(16)
| from math import sqrt, pi      # se usa directamente: sqrt(16)
| import statistics as st        # con un alias: st.mean(datos)
Cualquier archivo tuyo es también un módulo: si tienes utilidades.py, puedes escribir import utilidades.

Cuando un archivo se importa, se ejecuta entero. Para que una parte solo se ejecute al lanzarlo directamente se usa:
| if __name__ == "__main__":
|     main()

## La biblioteca estándar
Python viene con cientos de módulos listos para usar. Los más útiles al empezar:
- **math**: sqrt, pi, floor, ceil.
- **random**: random(), randint(a, b), choice(lista), shuffle(lista).
- **datetime**: fechas y horas.
- **json** y **csv**: leer y escribir esos formatos.
- **collections**: Counter para contar, defaultdict para diccionarios con valor inicial.
- **pathlib**: rutas de archivos.
| from collections import Counter
| Counter("banana")        # Counter({'a': 3, 'n': 2, 'b': 1})
|
| import random
| random.choice(["cara", "cruz"])

## Paquetes externos
Lo que no está en la biblioteca estándar se instala con **pip** desde la terminal: pip install requests. Para que cada proyecto tenga sus propias versiones se trabaja dentro de un **entorno virtual** (python -m venv .venv).

## Leer archivos
| with open("notas.txt", encoding="utf-8") as f:
|     texto = f.read()             # todo el contenido en una cadena
|
| with open("notas.txt", encoding="utf-8") as f:
|     for linea in f:              # línea a línea, sin cargar todo en memoria
|         print(linea.strip())
**with** cierra el archivo al salir del bloque, incluso si se produce un error. Indicar encoding="utf-8" evita problemas con tildes y eñes.

## Escribir archivos
El segundo argumento de open() es el modo:
- **"r"**: leer (por defecto). Da error si el archivo no existe.
- **"w"**: escribir. Crea el archivo o **borra** su contenido si ya existía.
- **"a"**: añadir al final.
| with open("salida.txt", "w", encoding="utf-8") as f:
|     f.write("Primera línea")
|     print("Segunda línea", file=f)

## JSON y CSV
**JSON** es el formato habitual para guardar diccionarios y listas:
| import json
| with open("datos.json", "w", encoding="utf-8") as f:
|     json.dump({"nombre": "Ana", "edad": 30}, f)
| with open("datos.json", encoding="utf-8") as f:
|     datos = json.load(f)
**CSV** es el de las tablas, compatible con las hojas de cálculo:
| import csv
| with open("ventas.csv", encoding="utf-8") as f:
|     for fila in csv.DictReader(f):
|         print(fila["producto"], fila["precio"])
> En los ejercicios de Lumen el código se ejecuta dentro del navegador, así que no puede leer archivos de tu ordenador. Para practicar esta parte, instala Python y prueba los ejemplos en tu equipo.
` },
  { id: 'fundamentos', n: 1, name: 'Fundamentos', sum: 'Variables, tipos, operadores, texto y entrada/salida.',
    match: /muestra texto|comentario|tipo es|2 \+ 3|x = 5|Hola, mundo|total|7 \/\/ 2/i,
    k: [['Variable', 'Nombre que apunta a un valor; se crea al asignar con =.'], ['Tipos básicos', 'int (enteros), float (decimales), str (texto), bool (True/False).'], ['None', 'Valor especial que significa «nada» o «sin valor».'], ['print()', 'Muestra valores en pantalla.'], ['input()', 'Lee un texto escrito por el usuario; devuelve siempre una cadena.'], ['Conversión de tipos', 'int("7") → 7 · float("3.5") → 3.5 · str(7) → "7".'], ['Operador //', 'División entera: descarta la parte decimal.'], ['Operador %', 'Resto de la división (módulo).'], ['Operador **', 'Potencia: 2 ** 3 vale 8.'], ['= frente a ==', '= asigna un valor; == compara si dos valores son iguales.'], ['and, or, not', 'Operadores lógicos: y, o, no.'], ['f-string', 'Texto con valores insertados: f"Hola, {nombre}".']],
    notes: `
## Qué es Python
Python es un lenguaje de programación de propósito general, famoso por su sintaxis clara. Se usa en ciencia de datos, inteligencia artificial, desarrollo web y automatización. Es un lenguaje **interpretado**: no hace falta compilar, las instrucciones se ejecutan directamente, de arriba abajo y una por línea.

## Tu primer programa
La función **print()** muestra algo en pantalla:
| print("Hola, mundo")
| print("Tengo", 3, "gatos")      # varios valores, separados por espacios
Todo lo que sigue a # es un **comentario**: el intérprete lo ignora. Sirve para explicar el porqué del código a quien lo lea después, que a menudo serás tú.

## Variables
Una variable es un nombre que apunta a un valor. Se crea al asignarle algo con =, y no hace falta declarar su tipo:
| edad = 25
| nombre = "Ana"
| edad = edad + 1      # ahora vale 26
| edad += 1            # forma abreviada: ahora 27
El signo = no significa «igual» como en matemáticas, sino «guarda en»: primero se calcula lo de la derecha y luego se asigna al nombre de la izquierda.

Reglas para los nombres:
- Solo letras, números y guion bajo; no pueden empezar por un número.
- Distinguen mayúsculas: edad y Edad son variables diferentes.
- No pueden ser palabras reservadas (if, for, class…).
- Por convención se escriben en minúsculas con guiones bajos: precio_total.

## Tipos de datos básicos
- **int**: enteros, como 42 o -7. No tienen límite de tamaño.
- **float**: números con decimales, como 3.14. El separador es el punto.
- **str**: texto entre comillas simples o dobles, como "hola".
- **bool**: True o False, con mayúscula inicial.
- **None**: la ausencia de valor.
La función type() dice de qué tipo es un valor:
| type(42)          # <class 'int'>
| type("42")        # <class 'str'>
> Los float no son exactos: 0.1 + 0.2 da 0.30000000000000004. Para comparar decimales se redondea con round(x, 2).

## Conversión de tipos
int(), float(), str() y bool() convierten entre tipos:
| int("7") + 1        # 8
| str(7) + "1"        # "71"
| float("3.5")        # 3.5
| int(3.9)            # 3  (trunca, no redondea)
Python no mezcla texto y números por su cuenta: "7" + 1 da un TypeError.

## Operadores aritméticos
| 7 + 2     # 9      suma
| 7 - 2     # 5      resta
| 7 * 2     # 14     multiplicación
| 7 / 2     # 3.5    división (siempre float)
| 7 // 2    # 3      división entera
| 7 % 2     # 1      resto
| 7 ** 2    # 49     potencia
La **precedencia** es la de las matemáticas: primero potencias, luego multiplicaciones y divisiones, al final sumas y restas. Los paréntesis la cambian.
> Ejemplo: 2 + 3 * 4 vale 14, pero (2 + 3) * 4 vale 20.
El resto (%) es más útil de lo que parece: n % 2 == 0 indica que n es par, y n % 10 da su última cifra.

## Comparaciones y lógica
Los operadores ==, !=, <, >, <= y >= devuelven un booleano. Cuidado: = asigna y == compara.
| 3 == 3.0        # True
| "a" != "b"      # True
| 1 < x < 10      # las comparaciones se pueden encadenar
Se combinan con **and** (ambas ciertas), **or** (al menos una) y **not** (lo contrario):
| edad >= 18 and tiene_carnet
| dia == "sábado" or dia == "domingo"
not se evalúa primero, luego and y al final or.

## Verdadero y falso
En una condición, cualquier valor cuenta como verdadero o falso. Son **falsos**: False, None, 0, la cadena vacía "" y las colecciones vacías. Todo lo demás es verdadero. Por eso se puede escribir:
| if nombre:              # equivale a: if nombre != ""
|     print("Hola,", nombre)

## Trabajar con texto
Las cadenas se unen con + y se repiten con *:
| "Hola, " + "Ana"       # "Hola, Ana"
| "ja" * 3               # "jajaja"
| len("python")          # 6
Las **f-strings** insertan valores dentro de un texto, y admiten formato:
| print(f"{nombre} tiene {edad} años")
| print(f"Total: {precio:.2f} €")       # dos decimales
| print(f"{3 * 4}")                     # cualquier expresión

## Entrada de datos
input() muestra un mensaje y espera a que el usuario escriba. **Siempre devuelve una cadena**, así que hay que convertirla si se quiere un número:
| nombre = input("¿Cómo te llamas? ")
| edad = int(input("¿Cuántos años tienes? "))

## Errores típicos al empezar
- **SyntaxError**: algo está mal escrito (falta un paréntesis, unas comillas o los dos puntos).
- **NameError**: se usa una variable que no existe, casi siempre por una errata.
- **TypeError**: se mezclan tipos incompatibles, como "7" + 1.
- **IndentationError**: la sangría no es coherente.
> Lee siempre la última línea del mensaje de error: dice qué ha fallado, y unas líneas antes, en qué línea.
` },
  { id: 'colecciones', n: 2, name: 'Cadenas y colecciones', sum: 'Cadenas, listas, tuplas, diccionarios, conjuntos y comprensiones.',
    match: /nums\[|\[1:4\]|diccionario|inmutable|"ab" \* 2|range\(4\)/i,
    k: [['Índice', 'Posición de un elemento; empieza en 0 y los negativos cuentan desde el final.'], ['Corte (slice)', 's[a:b] toma desde a hasta b sin incluir b; s[::-1] invierte.'], ['Métodos de cadena', 'upper(), lower(), strip(), replace(), split(), join(), startswith(), find().'], ['Lista', 'Secuencia ordenada y modificable: [1, 2, 3].'], ['append / pop', 'append(x) añade al final; pop() quita y devuelve el último.'], ['sort() frente a sorted()', 'lista.sort() ordena la propia lista; sorted(lista) devuelve una copia ordenada.'], ['Tupla', 'Secuencia ordenada e inmutable: (1, 2, 3).'], ['Diccionario', 'Pares clave-valor: {"a": 1}. Acceso por clave en tiempo constante.'], ['dict.get(clave, defecto)', 'Devuelve el valor o el valor por defecto si la clave no existe, sin error.'], ['Conjunto', 'Colección sin orden ni duplicados: {1, 2, 3}.'], ['Operador in', 'Comprueba pertenencia: 3 in lista, "a" in texto, clave in diccionario.'], ['Lista por comprensión', '[expresión for x in iterable if condición]'], ['zip y enumerate', 'zip(a, b) recorre dos secuencias a la vez; enumerate(a) da índice y elemento.']],
    notes: `
## Cadenas de texto
Una cadena (str) es una secuencia de caracteres. Se accede a cada uno por su **índice**, que empieza en 0:
| s = "python"
| s[0]       # 'p'
| s[-1]      # 'n'   (los negativos cuentan desde el final)
| len(s)     # 6
Un **corte** (slice) extrae un trozo con la forma s[inicio:fin:paso]. El fin no se incluye, y cualquiera de los tres puede omitirse:
| s[1:4]     # 'yth'
| s[:2]      # 'py'      desde el principio
| s[2:]      # 'thon'    hasta el final
| s[::2]     # 'pto'     de dos en dos
| s[::-1]    # 'nohtyp'  invertida
Las cadenas son **inmutables**: s[0] = "P" da error. Sus métodos devuelven siempre una cadena nueva.

## Métodos de cadena
| "  Hola  ".strip()                # 'Hola'  (quita espacios de los extremos)
| "Hola".upper()                    # 'HOLA'
| "Hola".lower()                    # 'hola'
| "banana".replace("a", "o")        # 'bonono'
| "banana".count("a")               # 3
| "banana".find("n")                # 2  (-1 si no está)
| "hola".startswith("ho")           # True
| "a,b,c".split(",")                # ['a', 'b', 'c']
| "-".join(["a", "b", "c"])         # 'a-b-c'
| "an" in "banana"                  # True
split() y join() son inversos: uno trocea un texto en una lista y el otro une una lista en un texto.

## Listas
Colección **ordenada y modificable**. Puede mezclar tipos, aunque lo normal es que todos los elementos sean del mismo:
| nums = [10, 20, 30]
| nums[0] = 5            # modifica
| nums.append(40)        # añade al final
| nums.insert(1, 15)     # inserta en la posición 1
| nums.extend([50, 60])  # añade varios
| nums.pop()             # quita y devuelve el último
| nums.remove(20)        # quita la primera aparición del valor
| del nums[0]            # borra por posición
| 20 in nums             # ¿está?
| nums.index(30)         # posición del valor
Admiten los mismos índices y cortes que las cadenas. Funciones útiles: len(), sum(), min(), max().

Para ordenar hay dos caminos:
| nums.sort()                      # ordena la propia lista; devuelve None
| nueva = sorted(nums)             # devuelve una copia ordenada
| sorted(nums, reverse=True)       # de mayor a menor
| sorted(palabras, key=len)        # con un criterio propio
> Error frecuente: escribir nums = nums.sort(). Como sort() devuelve None, la lista se pierde.

## Tuplas
Como una lista, pero **inmutable**. Se usan para datos que van juntos y no deben cambiar, y pueden ser clave de un diccionario:
| punto = (3, 4)
| x, y = punto           # desempaquetado
| a, b = b, a            # intercambio de dos variables
Una función que devuelve varios valores (return a, b) devuelve en realidad una tupla.

## Diccionarios
Guardan pares **clave: valor**. Buscar por clave es inmediato, tenga el diccionario diez entradas o diez millones:
| edades = {"Ana": 30, "Luis": 25}
| edades["Ana"]              # 30
| edades["Eva"] = 41         # añade o modifica
| edades.get("Pau", 0)       # 0 si no existe, sin error
| "Ana" in edades            # True (busca en las claves)
| del edades["Luis"]         # borra
| len(edades)                # número de pares
Pedir edades["Pau"] cuando la clave no existe da un KeyError; por eso get() es tan útil. Para recorrerlo:
| for nombre in edades:                    # las claves
| for edad in edades.values():             # los valores
| for nombre, edad in edades.items():      # ambos
Las claves deben ser inmutables (cadenas, números, tuplas); los valores pueden ser cualquier cosa, incluidas listas u otros diccionarios.
> Patrón para contar: conteo[x] = conteo.get(x, 0) + 1.

## Conjuntos
Colección **sin orden y sin duplicados**. Comprobar si algo está dentro es tan rápido como en un diccionario:
| vistos = {1, 2, 3}
| vistos.add(4)
| set([1, 2, 2, 3])      # {1, 2, 3}: elimina repetidos
| a | b                  # unión
| a & b                  # intersección
| a - b                  # diferencia: están en a pero no en b
Un conjunto vacío se crea con set(); {} es un diccionario vacío.

## Comprensiones
Forma compacta de construir una colección a partir de otra:
| cuadrados = [x * x for x in range(5)]            # [0, 1, 4, 9, 16]
| pares = [x for x in nums if x % 2 == 0]         # con filtro
| mayus = [p.upper() for p in palabras]
| longitudes = {p: len(p) for p in palabras}      # diccionario
| iniciales = {p[0] for p in palabras}            # conjunto
Se leen así: «x al cuadrado, para cada x en el rango, si se cumple la condición». Si la expresión se complica, un bucle normal es más legible.

## Recorrer varias cosas a la vez
| for i, fruta in enumerate(frutas):          # índice y elemento
|     print(i, fruta)
| for nombre, nota in zip(nombres, notas):    # dos listas en paralelo
|     print(nombre, nota)

## Qué colección elegir
- **Lista**: el orden importa y los datos van a cambiar.
- **Tupla**: datos fijos que van juntos.
- **Diccionario**: hay que buscar por una clave.
- **Conjunto**: importa si algo está o no, o hay que eliminar duplicados.
` },
  { id: 'funciones', n: 3, name: 'Control de flujo y funciones', sum: 'Condicionales, bucles, funciones y gestión de errores.',
    match: /./,
    k: [['Sangría', 'Los bloques se delimitan con 4 espacios de sangría, no con llaves.'], ['if / elif / else', 'Ejecuta un bloque u otro según una condición.'], ['Bucle for', 'Recorre los elementos de una secuencia.'], ['Bucle while', 'Repite mientras la condición sea verdadera.'], ['range(a, b, paso)', 'Enteros desde a hasta b sin incluirlo; range(n) va de 0 a n−1.'], ['break y continue', 'break sale del bucle; continue salta a la siguiente vuelta.'], ['Patrón acumulador', 'Partir de un valor inicial y actualizarlo en cada vuelta: total += n.'], ['def y return', 'def define una función; return devuelve su resultado y termina la función.'], ['Parámetro por defecto', 'def f(x, n=1): si no se pasa n, vale 1.'], ['*args y **kwargs', 'Recogen un número variable de argumentos posicionales (tupla) y con nombre (diccionario).'], ['Ámbito local', 'Las variables creadas dentro de una función no existen fuera de ella.'], ['try / except', 'Captura errores para que el programa no se detenga.'], ['raise', 'Lanza una excepción a propósito: raise ValueError("mensaje").']],
    notes: `
## La sangría importa
Python delimita los bloques con la **sangría**, no con llaves. Toda línea que abre un bloque termina en dos puntos, y las líneas del bloque van 4 espacios más adentro. Todas deben tener exactamente la misma sangría.
| if llueve:
|     print("Coge paraguas")      # dentro del if
|     print("y botas")            # dentro del if
| print("Adiós")                  # fuera: se ejecuta siempre

## Condicionales
| if nota >= 9:
|     print("Sobresaliente")
| elif nota >= 5:
|     print("Aprobado")
| else:
|     print("Suspenso")
Las condiciones se comprueban en orden y solo se ejecuta el **primer** bloque que se cumple. elif y else son opcionales, y puede haber tantos elif como haga falta.

Para elegir entre dos valores en una sola línea existe la expresión condicional:
| estado = "mayor" if edad >= 18 else "menor"

## Bucle for
Recorre una secuencia elemento a elemento. Sirve con listas, cadenas, diccionarios, rangos y archivos:
| for fruta in ["pera", "kiwi"]:
|     print(fruta)
|
| for letra in "hola":
|     print(letra)
**range()** genera una serie de enteros, sin incluir el final:
| range(3)           # 0, 1, 2
| range(2, 6)        # 2, 3, 4, 5
| range(0, 10, 2)    # 0, 2, 4, 6, 8
| range(5, 0, -1)    # 5, 4, 3, 2, 1
Si hace falta el índice además del elemento, se usa enumerate() en lugar de range(len(lista)).

## Bucle while
Repite mientras se cumpla la condición. Se usa cuando no se sabe de antemano cuántas vueltas habrá:
| n = 3
| while n > 0:
|     print(n)
|     n -= 1
Hay que asegurarse de que algo cambia dentro del bucle para que la condición deje de cumplirse; si no, es un **bucle infinito**.

## break, continue y else
- **break** sale del bucle inmediatamente.
- **continue** abandona la vuelta actual y pasa a la siguiente.
| for n in nums:
|     if n < 0:
|         continue        # ignora los negativos
|     if n == 0:
|         break           # se detiene en el primer cero
|     print(n)
Un patrón muy común es el bucle «infinito» con salida:
| while True:
|     texto = input("Escribe algo (o 'salir'): ")
|     if texto == "salir":
|         break

## Patrones con bucles
Casi todos los problemas con bucles son variantes de unos pocos patrones:
| total = 0                       # acumulador
| for n in nums:
|     total += n
|
| cuenta = 0                      # contador
| for n in nums:
|     if n > 10:
|         cuenta += 1
|
| mayor = nums[0]                 # máximo
| for n in nums:
|     if n > mayor:
|         mayor = n
|
| encontrado = False              # búsqueda
| for n in nums:
|     if n == objetivo:
|         encontrado = True
|         break
Python ya trae hechos los más habituales: sum(), len(), max(), min() y el operador in.

## Funciones
Una función agrupa código con un nombre para poder reutilizarlo. Recibe **parámetros** y devuelve un resultado con **return**:
| def area_rectangulo(base, altura):
|     return base * altura
|
| area_rectangulo(3, 4)     # 12
- return termina la función en ese mismo punto.
- Sin return, la función devuelve None.
- **Imprimir no es devolver**: print() muestra algo en pantalla; return entrega el valor a quien llamó, que puede guardarlo o seguir operando con él.

## Parámetros
| def saludar(nombre, saludo="Hola"):       # valor por defecto
|     return f"{saludo}, {nombre}"
|
| saludar("Ana")                            # 'Hola, Ana'
| saludar("Ana", "Buenas")                  # por posición
| saludar(saludo="Hey", nombre="Ana")       # por nombre, en cualquier orden
Los parámetros con valor por defecto van siempre al final. Una función puede devolver varios valores separados por comas:
| def minmax(nums):
|     return min(nums), max(nums)
| menor, mayor = minmax([3, 1, 4])
Para aceptar un número variable de argumentos se usan *args (los recoge en una tupla) y **kwargs (los recoge en un diccionario):
| def sumar(*nums):
|     return sum(nums)
| sumar(1, 2, 3)        # 6

## Ámbito de las variables
Las variables creadas dentro de una función son **locales**: nacen al llamarla y desaparecen al terminar. Una función puede leer variables definidas fuera, pero lo recomendable es que reciba por parámetro todo lo que necesita y devuelva su resultado con return.

## Documentar una función
La primera línea de la función puede ser una cadena que explique qué hace (docstring). Es lo que muestra help():
| def media(nums):
|     """Devuelve la media aritmética de una lista de números."""
|     return sum(nums) / len(nums)
> Buena práctica: cada función debe hacer una sola cosa y tener un nombre que diga cuál.

## Gestión de errores
Cuando algo falla, Python lanza una **excepción** y el programa se detiene. Con try / except se captura y se decide qué hacer:
| try:
|     numero = int(texto)
| except ValueError:
|     print("Eso no es un número")
| else:
|     print("Correcto:", numero)       # solo si no hubo error
| finally:
|     print("Fin")                     # se ejecuta siempre
Conviene capturar solo el error concreto que se espera; un except sin tipo esconde fallos inesperados. También se puede lanzar un error a propósito:
| if edad < 0:
|     raise ValueError("La edad no puede ser negativa")
Excepciones frecuentes: ValueError (valor no válido), TypeError (tipos incompatibles), IndexError (índice fuera de rango), KeyError (clave inexistente), ZeroDivisionError y FileNotFoundError.
` },
];
