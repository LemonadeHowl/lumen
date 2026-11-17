// Más Python (segunda ampliación): POO avanzada, automatización con archivos, retos de programación y práctica
// adicional para los temas básicos. Se carga después de python_mas.js. Todo el código usa solo la biblioteca estándar;
// los archivos se crean en el sistema de archivos en memoria del intérprete, así que no tocan tu ordenador.
(function () {
  const NUNCA = /$^/;
  TOPICS.python.unshift(
  { id: 'poo2', n: 10, name: 'POO avanzada', sum: 'Propiedades, métodos de clase, herencia y composición, clases abstractas, enumeraciones y protocolos.', match: NUNCA,
    k: [['@property', 'Convierte un método en un atributo calculado o protegido: se lee como obj.area, sin paréntesis.'], ['Setter', 'Método @x.setter que valida un valor antes de guardarlo.'], ['@classmethod', 'Método que recibe la clase (cls) en lugar del objeto; se usa para constructores alternativos.'], ['@staticmethod', 'Función agrupada dentro de una clase que no usa ni self ni cls.'], ['Composición', 'Una clase contiene objetos de otras («tiene un») en lugar de heredar de ellas («es un»).'], ['Polimorfismo', 'Objetos de clases distintas responden al mismo método, cada uno a su manera.'], ['Clase abstracta', 'Clase que no se instancia y obliga a sus hijas a implementar ciertos métodos (abc.ABC y @abstractmethod).'], ['Enum', 'Conjunto cerrado de valores con nombre: Color.ROJO.'], ['__eq__ y __lt__', 'Definen cuándo dos objetos son iguales y cómo se ordenan.'], ['__iter__', 'Hace que un objeto se pueda recorrer con for.'], ['__enter__ y __exit__', 'Hacen que un objeto funcione con with.'], ['dataclass(order=True, frozen=True)', 'Genera comparaciones automáticas y objetos inmutables.']],
    notes: `
## Propiedades: atributos con control
Una **propiedad** se usa como un atributo, pero por debajo ejecuta un método. Sirve para calcular valores o validar los que se asignan:
| class Circulo:
|     def __init__(self, radio):
|         self.radio = radio            # pasa por el setter
|     @property
|     def radio(self):
|         return self._radio
|     @radio.setter
|     def radio(self, valor):
|         if valor <= 0:
|             raise ValueError("El radio debe ser positivo")
|         self._radio = valor
|     @property
|     def area(self):
|         return 3.1416 * self._radio ** 2
| c = Circulo(2); print(c.area)       # sin paréntesis
> El guion bajo (_radio) indica «uso interno»: Python no lo impide, pero es una convención que todo el mundo respeta.

## Métodos de clase y estáticos
| class Fecha:
|     def __init__(self, d, m, a): self.d, self.m, self.a = d, m, a
|     @classmethod
|     def desde_texto(cls, texto):          # constructor alternativo
|         d, m, a = map(int, texto.split("/"))
|         return cls(d, m, a)
|     @staticmethod
|     def es_bisiesto(a):                   # no necesita ni self ni cls
|         return a % 4 == 0 and (a % 100 != 0 or a % 400 == 0)
| f = Fecha.desde_texto("15/06/2025")

## Herencia y super()
| class Empleado:
|     def __init__(self, nombre, sueldo): self.nombre, self.sueldo = nombre, sueldo
|     def coste(self): return self.sueldo
| class Gerente(Empleado):
|     def __init__(self, nombre, sueldo, bonus):
|         super().__init__(nombre, sueldo)  # reutiliza el __init__ del padre
|         self.bonus = bonus
|     def coste(self): return super().coste() + self.bonus
Esto es **polimorfismo**: sum(e.coste() for e in plantilla) funciona con empleados y gerentes sin preguntar qué son.

## Composición antes que herencia
Hereda solo si la relación es «**es un**» (un gerente es un empleado). Si es «**tiene un**» (un coche tiene un motor), guarda el objeto como atributo:
| class Coche:
|     def __init__(self, motor): self.motor = motor
|     def arrancar(self): return self.motor.encender()
> Las jerarquías de herencia profundas son difíciles de cambiar. La composición es más flexible.

## Clases abstractas
| from abc import ABC, abstractmethod
| class Figura(ABC):
|     @abstractmethod
|     def area(self): ...
| class Cuadrado(Figura):
|     def __init__(self, l): self.l = l
|     def area(self): return self.l ** 2
Figura() da error: obliga a que cada figura concreta defina area().

## Enumeraciones
| from enum import Enum
| class Estado(Enum):
|     PENDIENTE = 1
|     ENVIADO = 2
|     ENTREGADO = 3
| pedido = Estado.ENVIADO; print(pedido.name, pedido.value)
Evitan errores de escribir mal cadenas como "enviado" o "Enviado".

## Hacer que tus objetos se comporten como los de Python
- **__str__** y **__repr__**: cómo se muestran.
- **__eq__** y **__lt__**: comparar y ordenar (con functools.total_ordering basta definir esos dos).
- **__len__**, **__getitem__**, **__contains__**: len(obj), obj[i], x in obj.
- **__iter__**: recorrer con for (puede ser un generador con yield).
- **__enter__** y **__exit__**: usar el objeto con with.
- **__add__**: sumar objetos con +.

## dataclasses a fondo
| from dataclasses import dataclass, field
| @dataclass(order=True, frozen=True)
| class Version:
|     mayor: int
|     menor: int = 0
| Version(1, 2) < Version(2, 0)       # True: order=True compara campo a campo
| @dataclass
| class Carrito:
|     productos: list = field(default_factory=list)   # nunca [] directamente
` },
  { id: 'automatizar', n: 11, name: 'Automatizar tareas con archivos', sum: 'Leer y escribir archivos, recorrer carpetas, renombrar, scripts con argumentos y tareas repetitivas.', match: NUNCA,
    k: [['Script', 'Programa que se ejecuta desde la terminal para automatizar una tarea: python informe.py.'], ['sys.argv', 'Lista con los argumentos con que se lanzó el script; sys.argv[0] es el nombre del archivo.'], ['argparse', 'Módulo para leer opciones de la línea de comandos con ayuda automática (-h).'], ['with open(…)', 'Abre un archivo y lo cierra solo al terminar el bloque, aunque haya un error.'], ['Modo "w", "a", "r"', 'Escribir (borra lo anterior), añadir al final y leer.'], ['encoding="utf-8"', 'Indica cómo se guardan los caracteres; evita problemas con tildes y eñes.'], ['pathlib.Path', 'Representa rutas de archivos de forma portable: Path("datos") / "enero.csv".'], ['glob', 'Patrón para buscar archivos: "*.txt", "**/*.csv" (recursivo).'], ['shutil', 'Copiar, mover y borrar archivos y carpetas enteras.'], ['os.makedirs(…, exist_ok=True)', 'Crea una carpeta (y las intermedias) sin error si ya existe.'], ['if __name__ == "__main__":', 'Bloque que solo se ejecuta cuando el archivo se lanza como script, no al importarlo.'], ['Idempotente', 'Tarea que se puede repetir sin estropear nada: si ya está hecha, no hace nada.']],
    notes: `
## Leer y escribir archivos de texto
| with open("notas.txt", "w", encoding="utf-8") as f:
|     f.write("primera línea\\n")
|     f.write("segunda línea\\n")
| with open("notas.txt", encoding="utf-8") as f:
|     for linea in f:                 # recorre línea a línea sin cargarlo todo
|         print(linea.strip())
Modos: **"r"** leer (por defecto), **"w"** escribir desde cero, **"a"** añadir al final, **"x"** crear solo si no existe.
> Indica siempre encoding="utf-8": sin él, en Windows las tildes pueden estropearse.

## Rutas con pathlib
| from pathlib import Path
| base = Path("informes")
| ruta = base / "2025" / "enero.txt"      # une con / en cualquier sistema
| ruta.parent.mkdir(parents=True, exist_ok=True)
| ruta.write_text("Ventas: 120", encoding="utf-8")
| print(ruta.name, ruta.stem, ruta.suffix)   # enero.txt enero .txt
| for p in base.rglob("*.txt"):              # todos los .txt, también en subcarpetas
|     print(p)

## Organizar carpetas: os y shutil
| import os, shutil
| os.makedirs("copias", exist_ok=True)
| shutil.copy("datos.csv", "copias/datos.csv")
| shutil.move("viejo.txt", "archivo/viejo.txt")
| os.rename("IMG_001.jpg", "vacaciones_001.jpg")
> Antes de mover o borrar en bloque, haz una pasada que solo imprima lo que haría («modo ensayo»). Evita disgustos.

## Scripts con argumentos
| import argparse
| p = argparse.ArgumentParser(description="Resume un CSV de ventas")
| p.add_argument("archivo")
| p.add_argument("--mes", type=int, default=1)
| args = p.parse_args()
| print(args.archivo, args.mes)
Se usa así: python resumen.py ventas.csv --mes 3. Y python resumen.py -h muestra la ayuda.

## La estructura de un script
| def main():
|     ...                          # el programa
| if __name__ == "__main__":
|     main()
Así el archivo se puede ejecutar como programa o importar desde otro sin que se ponga en marcha solo.

## Ideas de automatización
- Renombrar fotos con la fecha.
- Unir todos los CSV de una carpeta en uno.
- Generar un informe semanal en texto o en una hoja de cálculo (openpyxl).
- Descargar datos de una web con requests y guardarlos.
- Programar la ejecución: Programador de tareas en Windows, cron en macOS y Linux.
` },
  { id: 'retos', n: 12, name: 'Retos de programación', sum: 'Problemas clásicos para practicar la lógica, de menor a mayor dificultad.', match: NUNCA,
    k: [['Kata', 'Ejercicio corto que se repite para afianzar una técnica, como en las artes marciales.'], ['Caso límite', 'Entrada extrema que suele romper los programas: vacía, un elemento, negativos, muy grande.'], ['Invariante', 'Algo que se mantiene cierto en cada vuelta de un bucle y ayuda a razonar que es correcto.'], ['Criba de Eratóstenes', 'Algoritmo para obtener todos los primos hasta n tachando múltiplos.'], ['Codificación por longitud (RLE)', 'Comprimir repeticiones: «aaabb» → «a3b2».'], ['Cifrado César', 'Desplazar cada letra un número fijo de posiciones en el alfabeto.']],
    notes: `
## Cómo practicar con retos
- Lee el enunciado dos veces y escribe a mano un ejemplo de entrada y salida.
- Empieza por la solución más directa, aunque no sea elegante.
- Prueba los casos límite antes de darla por buena.
- Cuando funcione, mejórala: nombres claros, menos líneas, menos coste.
- Vuelve a hacerla unos días después sin mirar: así se fija.

## Estrategias que se repiten
- **Recorrer y acumular**: un bucle con una variable que suma, cuenta o guarda el máximo.
- **Diccionario contador**: frecuencias, agrupar, detectar repetidos.
- **Dos índices**: comparar extremos (palíndromos) o mezclar listas ordenadas.
- **Construir el resultado poco a poco**: una lista a la que se añade y, al final, "".join().
- **Dividir en subproblemas**: una función por cada paso.
> Si una solución tiene tres bucles anidados, casi siempre hay una estructura de datos que la simplifica.

## Plataformas para seguir practicando
Exercism (con mentores, también en español), Codewars, Advent of Code (retos en diciembre) y Project Euler (más matemático).
` });

  BANK.python.q.push(
    // ───── POO avanzada ─────
    mc(2, '¿Cómo se usa una propiedad definida con @property def area(self)?', ['obj.area', 'obj.area()', 'obj.get_area()', 'area(obj)'], 'Una propiedad se lee como un atributo, sin paréntesis.', { tp: 'poo2' }),
    mc(2, '¿Para qué se usa típicamente @classmethod?', ['Para crear constructores alternativos', 'Para hacer privados los atributos', 'Para que el método sea más rápido', 'Para heredar de varias clases'], 'Recibe cls y puede crear objetos: Fecha.desde_texto("15/06/2025").', { tp: 'poo2' }),
    mc(2, 'Un coche tiene un motor. ¿Qué relación conviene usar?', ['Composición: el coche guarda un objeto Motor', 'Herencia: Coche hereda de Motor', 'Herencia: Motor hereda de Coche', 'Ninguna: copiar el código del motor'], 'Herencia para «es un»; composición para «tiene un».', { tp: 'poo2' }),
    mc(3, '¿Qué pasa al hacer Figura() si Figura hereda de ABC y tiene un método con @abstractmethod?', ['TypeError: no se puede instanciar una clase abstracta', 'Se crea un objeto vacío', 'Se llama al método abstracto', 'Nada, es igual que una clase normal'], 'Las clases abstractas solo sirven de plantilla para sus hijas.', { tp: 'poo2' }),
    tx(2, '¿Qué imprime este código?', ['ENVIADO 2'], '.name es el nombre del miembro y .value su valor.', { tp: 'poo2', c: 'from enum import Enum\nclass Estado(Enum):\n    PENDIENTE = 1\n    ENVIADO = 2\nprint(Estado.ENVIADO.name, Estado.ENVIADO.value)' }),
    code(2, 'py', 'Completa la clase Termometro: la propiedad celsius debe impedir valores por debajo de −273,15 lanzando ValueError, y la propiedad fahrenheit debe calcularse (C × 9/5 + 32).', { tp: 'poo2', starter: 'class Termometro:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._c\n\n    @celsius.setter\n    def celsius(self, valor):\n        # tu código aquí\n        pass\n\n    @property\n    def fahrenheit(self):\n        # tu código aquí\n        pass\n', post: 't = Termometro(25)\nprint(t.fahrenheit)\ntry:\n    t.celsius = -300\nexcept ValueError:\n    print("valor imposible")\nprint(t.celsius)', out: '77.0\nvalor imposible\n25', sol: 'class Termometro:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._c\n\n    @celsius.setter\n    def celsius(self, valor):\n        if valor < -273.15:\n            raise ValueError("Por debajo del cero absoluto")\n        self._c = valor\n\n    @property\n    def fahrenheit(self):\n        return self._c * 9 / 5 + 32', e: 'El setter valida y guarda en _c; si lanza el error, el valor anterior se conserva.' }),
    code(2, 'py', 'Añade a la clase Fecha un método de clase desde_texto que cree una Fecha a partir de un texto "dd/mm/aaaa".', { tp: 'poo2', starter: 'class Fecha:\n    def __init__(self, d, m, a):\n        self.d, self.m, self.a = d, m, a\n\n    def __str__(self):\n        return f"{self.a}-{self.m:02d}-{self.d:02d}"\n\n    # tu método de clase aquí\n', post: 'print(Fecha.desde_texto("5/6/2025"), Fecha.desde_texto("31/12/1999"))', out: '2025-06-05 1999-12-31', sol: 'class Fecha:\n    def __init__(self, d, m, a):\n        self.d, self.m, self.a = d, m, a\n\n    def __str__(self):\n        return f"{self.a}-{self.m:02d}-{self.d:02d}"\n\n    @classmethod\n    def desde_texto(cls, texto):\n        d, m, a = map(int, texto.split("/"))\n        return cls(d, m, a)', e: 'cls es la propia clase: cls(d, m, a) equivale a Fecha(d, m, a), pero también funciona con clases hijas.' }),
    code(2, 'py', 'Completa la clase Gerente: hereda de Empleado, añade un bonus y su coste es el sueldo más el bonus. Usa super().', { tp: 'poo2', starter: 'class Empleado:\n    def __init__(self, nombre, sueldo):\n        self.nombre, self.sueldo = nombre, sueldo\n\n    def coste(self):\n        return self.sueldo\n\nclass Gerente(Empleado):\n    # tu código aquí\n    pass\n', post: 'plantilla = [Empleado("Ana", 2000), Gerente("Luis", 3000, 500), Empleado("Eva", 1800)]\nprint(sum(e.coste() for e in plantilla), plantilla[1].nombre)', out: '7300 Luis', sol: 'class Empleado:\n    def __init__(self, nombre, sueldo):\n        self.nombre, self.sueldo = nombre, sueldo\n\n    def coste(self):\n        return self.sueldo\n\nclass Gerente(Empleado):\n    def __init__(self, nombre, sueldo, bonus):\n        super().__init__(nombre, sueldo)\n        self.bonus = bonus\n\n    def coste(self):\n        return super().coste() + self.bonus', e: 'Polimorfismo: la suma llama a coste() de cada objeto, sea empleado o gerente.' }),
    code(3, 'py', 'Haz que los objetos Carta se puedan comparar y ordenar por su valor, y que se muestren como «7♥». Define __eq__, __lt__ y __str__.', { tp: 'poo2', starter: 'class Carta:\n    def __init__(self, valor, palo):\n        self.valor, self.palo = valor, palo\n    # tus métodos aquí\n', post: 'mano = [Carta(7, "♥"), Carta(2, "♠"), Carta(11, "♦")]\nprint(" ".join(str(c) for c in sorted(mano)), Carta(3, "♠") == Carta(3, "♥"), max(mano))', out: '2♠ 7♥ 11♦ True 11♦', sol: 'class Carta:\n    def __init__(self, valor, palo):\n        self.valor, self.palo = valor, palo\n\n    def __eq__(self, otra):\n        return self.valor == otra.valor\n\n    def __lt__(self, otra):\n        return self.valor < otra.valor\n\n    def __str__(self):\n        return f"{self.valor}{self.palo}"', e: 'sorted() y max() usan __lt__; print usa __str__. Aquí dos cartas son «iguales» si tienen el mismo valor.' }),
    code(3, 'py', 'Haz que la clase Playlist se pueda recorrer con for (en orden), que len() devuelva el número de canciones y que «in» funcione.', { tp: 'poo2', starter: 'class Playlist:\n    def __init__(self, *canciones):\n        self._canciones = list(canciones)\n    # tus métodos aquí\n', post: 'p = Playlist("Intro", "Verano", "Final")\nprint(len(p), "Verano" in p, "Otoño" in p)\nfor c in p:\n    print("-", c)', out: '3 True False\n- Intro\n- Verano\n- Final', sol: 'class Playlist:\n    def __init__(self, *canciones):\n        self._canciones = list(canciones)\n\n    def __len__(self):\n        return len(self._canciones)\n\n    def __contains__(self, cancion):\n        return cancion in self._canciones\n\n    def __iter__(self):\n        return iter(self._canciones)', e: 'Con estos tres métodos especiales, tu clase se comporta como una colección de Python.' }),
    code(3, 'py', 'Crea una dataclass Version con campos mayor, menor y parche (enteros, menor y parche con valor 0 por defecto), que se pueda ordenar (order=True). Luego imprime la mayor de la lista.', { tp: 'poo2', starter: 'from dataclasses import dataclass\n\n# tu dataclass aquí\n\nversiones = [Version(1, 4), Version(2), Version(1, 10, 3)]\n', post: 'print(max(versiones), Version(1, 4) < Version(1, 10))', out: 'Version(mayor=2, menor=0, parche=0) True', sol: 'from dataclasses import dataclass\n\n@dataclass(order=True)\nclass Version:\n    mayor: int\n    menor: int = 0\n    parche: int = 0\n\nversiones = [Version(1, 4), Version(2), Version(1, 10, 3)]', e: 'order=True compara campo a campo como una tupla: (1, 4, 0) < (1, 10, 0). Como texto, "1.4" > "1.10"; como números, no.' }),

    // ───── Automatizar ─────
    mc(1, '¿Qué hace el modo "a" en open("log.txt", "a")?', ['Añade al final sin borrar lo que había', 'Abre solo para leer', 'Borra el contenido y escribe desde cero', 'Crea una copia del archivo'], '"w" empieza de cero; "a" (append) añade.', { tp: 'automatizar' }),
    mc(2, '¿Para qué sirve if __name__ == "__main__": main()?', ['Para que main() solo se ejecute al lanzar el archivo como script, no al importarlo', 'Para que el programa sea más rápido', 'Para declarar la función principal obligatoria de Python', 'Para que funcione en Windows'], 'Al importar un módulo, __name__ es su nombre; al ejecutarlo directamente, es "__main__".', { tp: 'automatizar' }),
    mc(2, '¿Qué devuelve Path("informes/2025/enero.csv").suffix?', ['".csv"', '"enero"', '"enero.csv"', '"informes/2025"'], '.name es "enero.csv", .stem es "enero", .suffix es ".csv" y .parent es la carpeta.', { tp: 'automatizar' }),
    mc(2, 'Vas a renombrar 500 archivos con un script. ¿Qué es lo más prudente?', ['Hacer primero una pasada que solo imprima los cambios', 'Ejecutarlo directamente y revisar después', 'Renombrarlos a mano', 'Borrar los originales antes'], 'El «modo ensayo» permite comprobar el resultado sin riesgo.', { tp: 'automatizar' }),
    tx(2, '¿Qué módulo de la biblioteca estándar se usa para leer opciones como --mes 3 desde la terminal?', ['argparse'], 'argparse genera además la ayuda con -h.', { tp: 'automatizar' }),
    code(1, 'py', 'Escribe tres líneas (uno, dos, tres) en el archivo numeros.txt y después léelo e imprime cuántas líneas tiene.', { tp: 'automatizar', starter: '', out: '3', sol: 'with open("numeros.txt", "w", encoding="utf-8") as f:\n    f.write("uno\\ndos\\ntres\\n")\nwith open("numeros.txt", encoding="utf-8") as f:\n    print(len(f.readlines()))', e: 'with cierra el archivo al acabar el bloque. El archivo se crea en la memoria del intérprete de la app.' }),
    code(2, 'py', 'Completa la función para que añada una línea con el mensaje al final de registro.log (sin borrar lo anterior) y devuelva cuántas líneas tiene el archivo.', { tp: 'automatizar', starter: 'def registrar(mensaje):\n    # tu código aquí\n    pass\n', post: 'import os\nif os.path.exists("registro.log"):\n    os.remove("registro.log")\nregistrar("inicio")\nregistrar("proceso")\nprint(registrar("fin"))', out: '3', sol: 'def registrar(mensaje):\n    with open("registro.log", "a", encoding="utf-8") as f:\n        f.write(mensaje + "\\n")\n    with open("registro.log", encoding="utf-8") as f:\n        return len(f.readlines())', e: 'El modo "a" conserva lo anterior; con "w" solo quedaría la última línea.' }),
    code(2, 'py', 'Crea la carpeta fotos con los archivos IMG_1.jpg, IMG_2.jpg y nota.txt (ya está hecho en el código de partida). Renombra solo los .jpg a vacaciones_1.jpg, vacaciones_2.jpg… y luego imprime los nombres ordenados.', { tp: 'automatizar', starter: 'from pathlib import Path\nimport shutil\nshutil.rmtree("fotos", ignore_errors=True)\ncarpeta = Path("fotos")\ncarpeta.mkdir()\nfor n in ["IMG_1.jpg", "IMG_2.jpg", "nota.txt"]:\n    (carpeta / n).write_text("x")\n\n# tu código aquí\n\nprint(sorted(p.name for p in carpeta.iterdir()))\n', out: "['nota.txt', 'vacaciones_1.jpg', 'vacaciones_2.jpg']", sol: 'from pathlib import Path\nimport shutil\nshutil.rmtree("fotos", ignore_errors=True)\ncarpeta = Path("fotos")\ncarpeta.mkdir()\nfor n in ["IMG_1.jpg", "IMG_2.jpg", "nota.txt"]:\n    (carpeta / n).write_text("x")\n\nfor p in carpeta.glob("*.jpg"):\n    p.rename(carpeta / p.name.replace("IMG", "vacaciones"))\n\nprint(sorted(p.name for p in carpeta.iterdir()))', e: 'glob("*.jpg") filtra por extensión y rename cambia el nombre dentro de la misma carpeta.' }),
    code(3, 'py', 'Hay tres CSV de meses distintos en la carpeta ventas (creados en el código de partida). Únelos y imprime el total de unidades vendidas.', { tp: 'automatizar', starter: 'from pathlib import Path\nimport csv, shutil\nshutil.rmtree("ventas", ignore_errors=True)\nPath("ventas").mkdir()\nPath("ventas/enero.csv").write_text("producto,unidades\\npan,10\\nleche,5\\n")\nPath("ventas/febrero.csv").write_text("producto,unidades\\npan,8\\n")\nPath("ventas/marzo.csv").write_text("producto,unidades\\nleche,7\\nhuevos,12\\n")\n\n# tu código aquí\n', out: '42', sol: 'from pathlib import Path\nimport csv, shutil\nshutil.rmtree("ventas", ignore_errors=True)\nPath("ventas").mkdir()\nPath("ventas/enero.csv").write_text("producto,unidades\\npan,10\\nleche,5\\n")\nPath("ventas/febrero.csv").write_text("producto,unidades\\npan,8\\n")\nPath("ventas/marzo.csv").write_text("producto,unidades\\nleche,7\\nhuevos,12\\n")\n\ntotal = 0\nfor archivo in Path("ventas").glob("*.csv"):\n    with open(archivo, encoding="utf-8") as f:\n        total += sum(int(fila["unidades"]) for fila in csv.DictReader(f))\nprint(total)', e: '10 + 5 + 8 + 7 + 12 = 42. Con glob da igual cuántos archivos haya: el script sirve el mes que viene sin cambios.' }),

    // ───── Retos ─────
    code(1, 'py', 'Reto · Completa la función para que devuelva el texto al revés.', { tp: 'retos', starter: 'def al_reves(texto):\n    pass\n', post: 'print(al_reves("Python"), al_reves(""), al_reves("ana"))', out: 'nohtyP  ana', sol: 'def al_reves(texto):\n    return texto[::-1]', e: 'Un corte con paso −1 recorre la cadena desde el final.' }),
    code(1, 'py', 'Reto · Completa la función para que devuelva el número de palabras de una frase (separadas por uno o más espacios).', { tp: 'retos', starter: 'def contar_palabras(frase):\n    pass\n', post: 'print(contar_palabras("Hola  mundo cruel"), contar_palabras("   "), contar_palabras("una"))', out: '3 0 1', sol: 'def contar_palabras(frase):\n    return len(frase.split())', e: 'split() sin argumentos separa por cualquier cantidad de espacios e ignora los de los extremos.' }),
    code(2, 'py', 'Reto · ¿Son anagramas? Dos palabras lo son si tienen las mismas letras en distinto orden (ignora mayúsculas y espacios).', { tp: 'retos', starter: 'def anagramas(a, b):\n    pass\n', post: 'print(anagramas("Roma", "amor"), anagramas("listen", "silent"), anagramas("hola", "holas"), anagramas("La ruta", "Tu lara"))', out: 'True True False True', sol: 'def anagramas(a, b):\n    limpia = lambda s: sorted(s.lower().replace(" ", ""))\n    return limpia(a) == limpia(b)', e: 'Ordenar las letras da la misma secuencia si y solo si son anagramas. También vale comparar dos Counter.' }),
    code(2, 'py', 'Reto · Comprime un texto con codificación por longitud: «aaabccdd» → «a3b1c2d2».', { tp: 'retos', starter: 'def comprimir(texto):\n    pass\n', post: 'print(comprimir("aaabccdd"), comprimir("x"), repr(comprimir("")))', out: "a3b1c2d2 x1 ''", sol: 'def comprimir(texto):\n    if not texto:\n        return ""\n    partes, actual, n = [], texto[0], 0\n    for c in texto:\n        if c == actual:\n            n += 1\n        else:\n            partes.append(actual + str(n))\n            actual, n = c, 1\n    partes.append(actual + str(n))\n    return "".join(partes)', e: 'Se cuenta mientras se repite el carácter y se guarda el tramo al cambiar. Con itertools.groupby queda en una línea.' }),
    code(2, 'py', 'Reto · Cifrado César: desplaza cada letra minúscula n posiciones en el alfabeto inglés (a–z), dando la vuelta al final. Lo demás no cambia.', { tp: 'retos', starter: 'def cesar(texto, n):\n    pass\n', post: 'print(cesar("hola, mundo", 3), cesar("xyz", 2), cesar(cesar("secreto", 5), -5))', out: 'krod, pxqgr zab secreto', sol: 'def cesar(texto, n):\n    res = []\n    for c in texto:\n        if "a" <= c <= "z":\n            res.append(chr((ord(c) - ord("a") + n) % 26 + ord("a")))\n        else:\n            res.append(c)\n    return "".join(res)', e: 'ord da el código de la letra; % 26 hace que después de la z vuelva a la a. Desplazar −n descifra.' }),
    code(2, 'py', 'Reto · Devuelve la lista de números primos menores o iguales que n usando la criba de Eratóstenes.', { tp: 'retos', starter: 'def primos(n):\n    pass\n', post: 'print(primos(30), primos(1), len(primos(1000)))', out: '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29] [] 168', sol: 'def primos(n):\n    if n < 2:\n        return []\n    es = [True] * (n + 1)\n    es[0] = es[1] = False\n    for i in range(2, int(n ** 0.5) + 1):\n        if es[i]:\n            for j in range(i * i, n + 1, i):\n                es[j] = False\n    return [i for i, p in enumerate(es) if p]', e: 'Se tachan los múltiplos de cada primo empezando por su cuadrado. Basta con llegar hasta √n.' }),
    code(2, 'py', 'Reto · Aplana una lista de listas (de un solo nivel) en una lista simple.', { tp: 'retos', starter: 'def aplanar(listas):\n    pass\n', post: 'print(aplanar([[1, 2], [3], [], [4, 5, 6]]))', out: '[1, 2, 3, 4, 5, 6]', sol: 'def aplanar(listas):\n    return [x for sub in listas for x in sub]', e: 'En una comprensión con dos for, el orden es el mismo que en dos bucles anidados.' }),
    code(3, 'py', 'Reto · Convierte un número entre 1 y 3999 a números romanos.', { tp: 'retos', starter: 'def romano(n):\n    pass\n', post: 'print(romano(4), romano(9), romano(14), romano(1994), romano(2025))', out: 'IV IX XIV MCMXCIV MMXXV', sol: 'def romano(n):\n    tabla = [(1000, "M"), (900, "CM"), (500, "D"), (400, "CD"), (100, "C"), (90, "XC"),\n             (50, "L"), (40, "XL"), (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")]\n    res = ""\n    for valor, letras in tabla:\n        while n >= valor:\n            res += letras\n            n -= valor\n    return res', e: 'Incluir 900, 400, 90, 40, 9 y 4 en la tabla resuelve los casos de resta sin reglas especiales.' }),
    code(3, 'py', 'Reto · Une los intervalos que se solapan: [[1, 3], [2, 6], [8, 10], [9, 12]] → [[1, 6], [8, 12]].', { tp: 'retos', starter: 'def unir(intervalos):\n    pass\n', post: 'print(unir([[1, 3], [2, 6], [8, 10], [9, 12]]), unir([[5, 7], [1, 2]]), unir([[1, 4], [4, 5]]))', out: '[[1, 6], [8, 12]] [[1, 2], [5, 7]] [[1, 5]]', sol: 'def unir(intervalos):\n    res = []\n    for ini, fin in sorted(intervalos):\n        if res and ini <= res[-1][1]:\n            res[-1][1] = max(res[-1][1], fin)\n        else:\n            res.append([ini, fin])\n    return res', e: 'Ordenando por el inicio, cada intervalo solo puede solaparse con el último añadido.' }),
    code(3, 'py', 'Reto · Devuelve la subcadena más larga sin caracteres repetidos de un texto (si hay empate, la primera).', { tp: 'retos', starter: 'def sin_repetir(texto):\n    pass\n', post: 'print(sin_repetir("abcabcbb"), sin_repetir("bbbb"), sin_repetir("pwwkew"), repr(sin_repetir("")))', out: "abc b wke ''", sol: 'def sin_repetir(texto):\n    visto, ini, mejor = {}, 0, ""\n    for i, c in enumerate(texto):\n        if c in visto and visto[c] >= ini:\n            ini = visto[c] + 1\n        visto[c] = i\n        if i - ini + 1 > len(mejor):\n            mejor = texto[ini:i + 1]\n    return mejor', e: 'Ventana deslizante: cuando aparece un repetido, el inicio salta justo después de su aparición anterior. O(n).' }),

    // ───── Práctica extra de los temas básicos ─────
    code(1, 'py', 'Con la variable edad ya dada, muestra cuántos años tendrás dentro de 10 con el formato: «Dentro de 10 años tendrás 41».', { tp: 'fundamentos', starter: 'edad = 31\n', out: 'Dentro de 10 años tendrás 41', sol: 'edad = 31\nprint(f"Dentro de 10 años tendrás {edad + 10}")', e: 'Las f-strings permiten poner expresiones entre llaves dentro del texto.' }),
    code(1, 'py', 'Calcula el precio con un 21 % de IVA de un producto de 50 € y muéstralo con dos decimales: «Total: 60.50 €».', { tp: 'fundamentos', starter: 'precio = 50\n', out: 'Total: 60.50 €', sol: 'precio = 50\nprint(f"Total: {precio * 1.21:.2f} €")', e: ':.2f dentro de las llaves redondea a dos decimales.' }),
    code(2, 'py', 'Convierte 7384 segundos en horas, minutos y segundos e imprime «2 h 3 min 4 s». Usa // y %.', { tp: 'fundamentos', starter: 'segundos = 7384\n', out: '2 h 3 min 4 s', sol: 'segundos = 7384\nh = segundos // 3600\nm = segundos % 3600 // 60\ns = segundos % 60\nprint(f"{h} h {m} min {s} s")', e: '// es la división entera y % el resto: 7384 = 2·3600 + 3·60 + 4.' }),
    code(2, 'py', 'Completa la función para que devuelva las iniciales en mayúscula de un nombre completo: «ana maría lópez» → «AML».', { tp: 'colecciones', starter: 'def iniciales(nombre):\n    pass\n', post: 'print(iniciales("ana maría lópez"), iniciales("Guido van Rossum"))', out: 'AML GVR', sol: 'def iniciales(nombre):\n    return "".join(p[0].upper() for p in nombre.split())', e: 'split() separa las palabras, p[0] toma la primera letra y join las une.' }),
    code(2, 'py', 'Completa la función para que devuelva un diccionario con la nota media de cada alumno, redondeada a un decimal.', { tp: 'colecciones', starter: 'def medias(notas):\n    pass\n', post: 'print(medias({"Ana": [7, 8, 10], "Luis": [5, 6], "Eva": [9]}))', out: "{'Ana': 8.3, 'Luis': 5.5, 'Eva': 9.0}", sol: 'def medias(notas):\n    return {nombre: round(sum(ns) / len(ns), 1) for nombre, ns in notas.items()}', e: 'Una comprensión de diccionario recorre .items() y construye cada pareja clave: valor.' }),
    code(2, 'py', 'Completa la función para que devuelva los elementos que están en las dos listas, sin repetidos y ordenados.', { tp: 'colecciones', starter: 'def comunes(a, b):\n    pass\n', post: 'print(comunes([5, 1, 3, 3, 9], [3, 9, 7, 1]))', out: '[1, 3, 9]', sol: 'def comunes(a, b):\n    return sorted(set(a) & set(b))', e: '& es la intersección de conjuntos. sorted devuelve una lista ordenada.' }),
    code(2, 'py', 'Completa la función: recibe una lista de números y devuelve una tupla (mínimo, máximo, media) sin usar min, max ni sum.', { tp: 'funciones', starter: 'def resumen(nums):\n    pass\n', post: 'print(resumen([4, 8, 1, 7]))', out: '(1, 8, 5.0)', sol: 'def resumen(nums):\n    menor = mayor = nums[0]\n    total = 0\n    for n in nums:\n        if n < menor:\n            menor = n\n        if n > mayor:\n            mayor = n\n        total += n\n    return menor, mayor, total / len(nums)', e: 'Un solo recorrido basta para acumular las tres cosas. Devolver varios valores con comas crea una tupla.' }),
    code(2, 'py', 'Completa la función para que pida números de la lista entradas hasta encontrar un 0 (que no cuenta) y devuelva su suma. Usa while.', { tp: 'funciones', starter: 'def sumar_hasta_cero(entradas):\n    pass\n', post: 'print(sumar_hasta_cero([4, 6, 0, 99]), sumar_hasta_cero([0]), sumar_hasta_cero([1, 2, 3]))', out: '10 0 6', sol: 'def sumar_hasta_cero(entradas):\n    total, i = 0, 0\n    while i < len(entradas) and entradas[i] != 0:\n        total += entradas[i]\n        i += 1\n    return total', e: 'La condición del while comprueba primero que quedan elementos y luego que no sea el 0 de parada.' }),
    code(3, 'py', 'Completa la función para que convierta un texto en número entero y, si no es válido, devuelva el valor por defecto que se le pase (0 si no se indica).', { tp: 'funciones', starter: 'def a_entero(texto, defecto=0):\n    pass\n', post: 'print(a_entero("42"), a_entero("4,2"), a_entero("hola", -1), a_entero(" 7 "))', out: '42 0 -1 7', sol: 'def a_entero(texto, defecto=0):\n    try:\n        return int(texto)\n    except ValueError:\n        return defecto', e: 'int() ya ignora los espacios de los extremos; si el texto no es un entero lanza ValueError.' }),
  );

  if (window.CHEATS && CHEATS.python) CHEATS.python.s.push(
    ['POO avanzada', [
      ['@property / @x.setter', 'Atributo calculado o validado: obj.x sin paréntesis'],
      ['@classmethod def desde_…(cls, …)', 'Constructor alternativo'],
      ['@staticmethod', 'Función agrupada en la clase, sin self'],
      ['super().__init__(…)', 'Reutilizar el constructor de la clase padre'],
      ['class Figura(ABC) + @abstractmethod', 'Clase plantilla que obliga a implementar métodos'],
      ['class Color(Enum): ROJO = 1', 'Conjunto cerrado de valores con nombre'],
      ['__eq__, __lt__, __len__, __iter__, __contains__', 'Comparar, ordenar, len(), for e in con tus objetos'],
      ['@dataclass(order=True, frozen=True)', 'Comparaciones automáticas y objetos inmutables'],
      ['field(default_factory=list)', 'Valor por defecto mutable en una dataclass']]],
    ['Archivos y automatización', [
      ['open(r, "a", encoding="utf-8")', 'Añadir al final ("w" borra; "r" lee)'],
      ['Path("a") / "b" / "c.txt"', 'Unir rutas de forma portable'],
      ['p.name, p.stem, p.suffix, p.parent', 'Partes de una ruta'],
      ['Path(".").rglob("*.csv")', 'Buscar archivos en subcarpetas'],
      ['p.rename(nueva) · shutil.copy(a, b)', 'Renombrar y copiar'],
      ['os.makedirs(c, exist_ok=True)', 'Crear carpetas sin error si existen'],
      ['argparse.ArgumentParser()', 'Leer opciones de la línea de comandos'],
      ['if __name__ == "__main__": main()', 'Ejecutar solo al lanzar el script']]],
  );
})();
