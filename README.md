# Lumen

Tutor personal de ciencias, idiomas y programación con laboratorio 3D. Funciona en el navegador, también sin conexión.

- **Ciencias**: biología, física y química, con apuntes por temas, ejercicios de cálculo y de ordenar procesos.
- **Idiomas**: alemán, francés, italiano y catalán, con cursos de A1 a B2, exámenes modelo de cada nivel y grabaciones de hablantes nativos.
- **Programación**: Python y SQL, con código que se ejecuta de verdad en el navegador (Pyodide y sql.js).
- **Laboratorio 3D**: célula animal y vegetal, ADN, atlas del cuerpo humano, tabla periódica, moléculas, sistema solar, agujero negro, ondas y estados de la materia.

Es una web estática: no necesita servidor ni base de datos. El progreso se guarda en el propio navegador y se puede exportar e importar desde la portada del tutor.

## Ejecutar en local

Hace falta servirla por http (no basta con abrir index.html):

```
python -m http.server 8000
```

y abrir http://localhost:8000.

## Créditos

Las fuentes de los modelos 3D, las grabaciones y los datos se indican en cada maqueta y en la página de créditos de cada idioma.
