# Lecciones aprendidas: de generar JSON a verificar una migración

Este proyecto consiguió migraciones generadas por IA y verificadas contra SQLite
en PostgreSQL, MariaDB y MongoDB. El aprendizaje principal no fue conseguir una
respuesta con apariencia correcta, sino separar generación, validación y escritura.
Este documento resume problemas, pruebas y decisiones con evidencia al 1 de noviembre de 2026.

## Resultado y alcance en un minuto

- La fuente de prueba contiene 151 Pokémon y 218 relaciones de tipos.
- Los tres destinos se leyeron después de escribir y coincidieron con la fuente.
- El modelo genera los registros; la aplicación coordina y Python verifica.
- Es un prototipo local para una estructura conocida, no un migrador universal.
- La carga de archivos y el rediseño de la interfaz son trabajo futuro.

## 1. Problema: obtener JSON válido no bastaba

**Observación.** Qwen podía producir una respuesta estructurada y aun así cambiar
datos originales: en una prueba de copia, `caterpie` pasó a ser `cassiepie`.
Un analizador JSON no puede detectar por sí solo que ese nombre es incorrecto.

**Prueba.** Se separó la copia exacta de dos campos de la transformación relacional
y de la generación de un documento MongoDB. El banco de pruebas aislado no importa
la lógica de migración ni expone una API de base de datos.

**Solución.** El esquema estructural limita campos, tipos y anidamiento; Python
compara cada valor, identidad, relación y cobertura con la fuente SQLite.
El esquema no incluye valores esperados mediante `const` o enumeraciones.

**Lección.** Hay tres comprobaciones distintas: sintaxis JSON, estructura válida
y fidelidad al origen. Superar las dos primeras no demuestra la tercera.

## 2. Problema: un fallo del runtime ocultaba otro de fidelidad

**Observación.** El modo `response_format: {type: "json_object"}` sin esquema
reprodujo el error `Cannot pass non-string to std::string` al inicializar la gramática.

**Prueba.** Se reprodujo fuera del migrador y se compararon WebLLM 0.2.86 y 0.2.87.
También se probaron las variantes Qwen 3B q4f16 y q4f32.

**Solución.** Enviar `response_format.schema` como una cadena JSON serializada
resolvió ese error en la prueba real posterior. No resolvió los valores alterados
por Qwen: cambiar de versión o de variante tampoco eliminó el fallo observado.

**Lección.** Corregir la integración no demuestra que el contenido sea fiable.
Conviene aislar fallos y cambiar una hipótesis cada vez, sin atribuir una causa
universal al modelo, a WebGPU o a la tarjeta gráfica.

## 3. Decisión: pasar de Qwen a Llama con evidencia acotada

**Observación.** La comparación posterior con Llama superó los casos aislados
de copia, registro relacional y documento MongoDB.

**Solución.** La configuración recomendada pasó a ser
`Llama-3.2-3B-Instruct-q4f32_1-MLC` con WebLLM 0.2.87 y esquema serializado.
Cada inferencia espera a que termine `resetChat()` antes de generar la respuesta.
Qwen sigue disponible como alternativa para reproducir comparaciones.

**Lección.** La recomendación responde a pruebas de este proyecto, no a una
clasificación general de familias de modelos. Una copia correcta tampoco prueba
una migración completa: hacen falta pilotos y verificación del destino real.

## 4. Arquitectura: la IA propone y la aplicación controla

```text
SQLite -> modelo en el navegador -> JSON con estructura de destino
       -> validación Python por lote -> correcciones acotadas del modelo
       -> validación global -> escritura aislada -> lectura y comparación
```

El navegador coordina instrucciones, intentos y diagnósticos. El modelo transforma
los registros al contrato del destino: tablas relacionadas para SQL o documentos
con `_id` y tipos embebidos para MongoDB. No ejecuta SQL ni administra los servidores.

Python valida la salida completa antes de conectarse al destino y escribir.
Los registros rechazados no se sustituyen por una transformación determinista:
debe regenerarlos el modelo. Después de escribir se vuelve a leer el destino.

**Lección.** La validación debe ser independiente del generador. Detectar y bloquear
una alteración no equivale a impedir que el modelo la produzca.

## 5. Problema: algunos lotes MongoDB perdían documentos

**Observación.** Una respuesta podía omitir documentos aunque otros del mismo lote
fueran correctos. Repetir todo sin límite aumentaba el coste sin asegurar fidelidad.

**Solución.** Tras un máximo de tres intentos de lote, una recuperación selectiva
puede conservar sin cambios los registros aprobados y pedir solo los rechazados
u omitidos. Cada registro dispone de un máximo de tres intentos adicionales.
Un lote de cinco tiene así un techo de 18 llamadas: tres más tres por registro.

La recuperación exige identidades no ambiguas y validación individual. En MongoDB
puede partir de una lista incompleta o vacía; no inventa documentos ausentes.
No se recuperan por esta vía respuestas truncadas, JSON mal formado o identidades
duplicadas o ajenas. Después se validan de nuevo el lote combinado y el conjunto global.

**Prueba real.** MongoDB completó 31 lotes con 76 llamadas al modelo:
44 de lote y 32 de recuperación. Se regeneraron 20 registros en los lotes
51–55, 101–105, 111–115, 121–125 y 131–135.

**Lección.** Recuperar de forma selectiva conserva trabajo válido sin relajar el
contrato. No hay reintentos ilimitados, recuperación recursiva ni puntos de
reanudación entre ejecuciones; las escrituras tampoco se reintentan automáticamente.

## 6. Qué demostraron las pruebas

| Capa de evidencia | Qué comprueba | Qué no demuestra |
|---|---|---|
| Pruebas deterministas | Orquestación, límites y rechazo de entradas incorrectas | Comportamiento real de WebGPU o del modelo |
| Casos aislados y pilotos sin escritura | Generación sobre registros seleccionados | Conexión o migración completa al destino |
| Migración real y lectura independiente | Igualdad de datos almacenados con SQLite | Fiabilidad universal con otros datos |

| Destino verificado | Resultado observado |
|---|---|
| PostgreSQL | 151 Pokémon y 218 relaciones iguales a la fuente |
| MariaDB | 151 Pokémon y 218 relaciones iguales a la fuente |
| MongoDB | 151 documentos y 218 relaciones embebidas iguales a la fuente |

La inspección independiente de MongoDB comprobó campos, URL de sprites y relaciones
ordenadas; el hash del archivo SQLite permaneció sin cambios. Estos resultados
históricos no sustituyen una nueva ejecución cuando cambien datos, modelo o entorno.

## 7. Límites que forman parte de la solución

Las credenciales permanecen en el servidor y fuera del repositorio. Los pesos del
modelo se descargan por acción explícita del usuario y la inferencia ocurre en el
navegador. Los servicios de destino se configuran por separado; no se requiere Docker.

La aplicación usa destinos nuevos y aislados, pero no ofrece una garantía de
reversión global entre motores. No es un agente autónomo universal ni un sistema
listo para producción. Los informes brutos se conservan localmente: pueden contener
datos de entrada y deben revisarse antes de compartirlos.

## 8. Próximos hitos: archivos e interfaz, todavía no implementados

1. **Definir la entrada.** Decidir qué formatos de archivos de bases de datos se
   admitirán y sus límites de tamaño, seguridad y compatibilidad. No se promete
   aceptar cualquier archivo; exportar archivos hoy no equivale a poder subirlos.
2. **Diseñar inspección y mapeo.** Explorar la estructura de la base aportada,
   proponer correspondencias y tratar tipos, claves y relaciones. La introspección
   y las reglas de conversión siguen pendientes de diseño y validación.
3. **Extender la migración con control.** Incorporar revisión del mapeo, pilotos y
   comparación del destino antes de ampliar el prototipo a estructuras nuevas.
4. **Mejorar la interfaz gráfica.** Diseñar un recorrido más claro para seleccionar
   origen y destino, revisar el mapeo y entender progreso, errores y resultados.

Para una defensa o publicación profesional, la idea central es: «No bastó con pedir
JSON. Aislé fallos, comparé modelos y separé generación de validación; después
verifiqué los datos almacenados». La evolución hacia archivos e interfaz es una
dirección del proyecto, no una funcionalidad entregada.

## Evidencia y lectura complementaria

- [Estado verificado y límites actuales](status.md): resultados completos y recuperación real.
- [Diagnóstico de modelos](model-diagnostics.md): contratos, pilotos y presupuestos de intentos.
- [Prueba aislada de WebLLM](webllm-probe.md): comparación Qwen/Llama y corrección del esquema.
- [Arquitectura y límites de seguridad](architecture.md): responsabilidades y persistencia.
