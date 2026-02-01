// ^TypeScript.
// ^TypeScript es un lenguaje de programación de **código abierto** desarrollado por **Microsoft**, cuyo objetivo principal es **extender JavaScript** añadiendo un **sistema de tipos estático**. Esto significa que TypeScript permite definir tipos de datos para variables, funciones, parámetros, objetos y otros elementos del código, lo cual ayuda a detectar errores **en tiempo de desarrollo** y no únicamente en tiempo de ejecución. Gracias a este enfoque, TypeScript facilita la creación de aplicaciones JavaScript **más robustas, seguras, mantenibles y escalables**, especialmente en proyectos grandes y complejos. Es importante destacar que TypeScript está completamente basado en JavaScript, por lo que si ya se domina JavaScript, se puede decir que aproximadamente un **80% del conocimiento es transferible**, ya que la sintaxis y la mayoría de las características son compartidas, añadiendo TypeScript principalmente capas de tipado y herramientas adicionales de desarrollo.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Observadores.
// ^En TypeScript existe una característica muy importante relacionada con el proceso de compilación. A diferencia de JavaScript, los navegadores y los archivos HTML **no pueden ejecutar directamente archivos `.ts`**, ya que solo entienden JavaScript. Por esta razón, **todo archivo TypeScript debe ser compilado a JavaScript** antes de poder ser utilizado en una aplicación web. Esta compilación puede realizarse de forma manual usando el compilador de TypeScript (`tsc`). Sin embargo, cuando se trabaja en proyectos reales, compilar manualmente cada cambio resulta ineficiente. Para resolver este problema, TypeScript ofrece el **modo observador (watch mode)**, el cual se encarga de **monitorear los cambios en los archivos `.ts`** y generar automáticamente la versión `.js` cada vez que se guarda el archivo. Además, TypeScript permite activar observadores a nivel de proyecto completo, facilitando el desarrollo continuo y reduciendo errores humanos.
console.log('=========== Observadores. ==========='); // *Indica el inicio de la sección dedicada al uso de observadores en TypeScript.

// ~Activar modo observador en archivos TS.
// ~Para poder compilar de forma automática un archivo específico de TypeScript, es necesario activar el modo observador utilizando el compilador `tsc`. Esto se hace ejecutando el comando `tsc` seguido del nombre del archivo y su extensión `.ts`, junto con el parámetro `-w` (watch). Al ejecutar este comando, TypeScript entra en un estado de observación constante, mostrando mensajes en consola que indican que el archivo está siendo monitoreado. A partir de ese momento, **cada vez que el archivo `.ts` se guarda**, el compilador generará automáticamente su correspondiente archivo `.js`, evitando la necesidad de compilar manualmente en cada cambio.
console.log('Activar observador:\t\t\ttsc nombreArchivo.ts -w'); // *Ejemplo del comando para activar el modo observador en un archivo individual.

// ~Activar modo observador en proyectos.
// ~Aunque es posible activar un observador por cada archivo TypeScript, esto no es una práctica eficiente cuando el proyecto contiene múltiples archivos `.ts`, ya que implicaría ejecutar varios procesos simultáneos, lo cual puede consumir recursos innecesarios del sistema. Para solucionar esto, TypeScript ofrece la posibilidad de **configurar un observador a nivel de proyecto**, permitiendo que todos los archivos `.ts` sean monitoreados automáticamente desde un solo comando. Además, esta configuración centralizada permite definir reglas adicionales como nivel de estrictitud, manejo de errores, rutas de salida, compatibilidad con versiones de JavaScript y más. Todo esto se gestiona mediante un archivo especial llamado `tsconfig.json`.
// &Creación del archivo "tsconfig.json".
// &Para crear el archivo de configuración del proyecto, se utiliza el comando `tsc` junto con la opción `-init`. Este comando genera automáticamente un archivo `tsconfig.json` en la raíz del proyecto. Dicho archivo contiene las configuraciones base del compilador de TypeScript, incluyendo opciones de compilación, reglas de tipado y parámetros que controlan el comportamiento general del proyecto. Este paso es fundamental para trabajar de forma profesional con TypeScript.
console.log('Crear archivo tsconfig.json:\t\ttsc -init'); // *Comando para inicializar la configuración del proyecto TypeScript.

// &Activación de observadores en el proyecto.
// &Una vez creado el archivo `tsconfig.json`, es posible activar el modo observador para **todo el proyecto** ejecutando únicamente el comando `tsc -w`. A partir de este momento, el compilador observará todos los archivos `.ts` definidos en la configuración y generará automáticamente sus versiones `.js` cada vez que se detecte un cambio. Como parte del proceso de compilación, TypeScript añade por defecto la instrucción `"use strict"` en los archivos JavaScript generados, lo cual activa el **modo estricto de JavaScript**, haciendo que el lenguaje sea más riguroso al validar errores, malas prácticas y usos inseguros del código.
console.log('Activación observadores proyecto:\ttsc -w'); // *Ejecuta el modo observador para todos los archivos TypeScript del proyecto.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Tipos De Datos.
// ^En TypeScript, los tipos de datos juegan un papel fundamental, ya que el lenguaje introduce un **sistema de tipado estático** que permite definir explícitamente qué tipo de información puede almacenar una variable, función u objeto. En términos generales, los tipos de datos en TypeScript se agrupan en **tres grandes categorías**: tipos primitivos, tipos compuestos o estructurados y tipos definidos por el usuario. Cada una de estas categorías contiene distintos tipos con reglas específicas de uso y declaración. A diferencia de JavaScript, donde el tipado es dinámico y flexible, TypeScript es **más estricto y robusto**, lo que ayuda a prevenir errores comunes, mejorar la legibilidad del código y mantener una estructura clara, especialmente en proyectos grandes y escalables.
console.log('\n=========== Tipos de datos en TS. ==========='); // *Indica el inicio de la sección dedicada a los tipos de datos en TypeScript.

// ~Primitivos.
// ~Los tipos de datos primitivos en TypeScript se **pasan y comparan por valor**, lo que significa que el valor se copia directamente y no se comparte una referencia en memoria. Estos tipos son **inmutables**, es decir, una vez creado su valor, no puede modificarse internamente, sino que únicamente puede ser **reasignado**. En cuanto a su definición, TypeScript mantiene una sintaxis muy similar a JavaScript, pero con la diferencia clave de que aquí se debe **especificar explícitamente el tipo de dato**. Para declarar una variable primitiva tipada, se añaden dos elementos esenciales: los **dos puntos (`:`)** seguidos del **nombre del tipo**. La estructura general consiste en declarar el tipo de variable (`const`, `let`), el nombre, el tipo primitivo y el valor asignado, por ejemplo: `const mensaje: string = 'Hola mundo';`.
console.log('----- Primitivos. -----'); // *Marca el inicio de la subsección de tipos primitivos.

// &String.
// &El tipo de dato primitivo `string` representa **cadenas de texto**. En TypeScript, al igual que en JavaScript, los strings pueden declararse utilizando **comillas simples (`' '`), comillas dobles (`" "`) o backticks (`` ` ` ``)**. Cualquiera de estas tres formas es válida y compatible con el tipado de TypeScript. La diferencia principal es que en TS se debe indicar explícitamente que la variable es de tipo `string`, lo que evita asignaciones incorrectas como números o booleanos a variables destinadas a texto.
console.log('String:  \tconst nombreVariable: string = \'Hola mundo\';'); // *Ejemplo de declaración de una variable string tipada.

// &Number.
// &El tipo de dato primitivo `number` engloba **todos los valores numéricos**, sin distinguir entre enteros y decimales. TypeScript trata de la misma manera números enteros, decimales, notación exponencial positiva o negativa, así como valores hexadecimales, octales y binarios. Este comportamiento es idéntico a JavaScript, pero con la ventaja de que el tipado impide asignar valores no numéricos a una variable declarada como `number`.
console.log('Number:  \tconst nombreVariable: number = 1;'); // *Ejemplo de variable numérica tipada.

// &Boolean.
// &El tipo de dato primitivo `boolean` solo admite **dos valores posibles: `true` o `false`**. Su comportamiento es idéntico al de JavaScript, pero al estar tipado, TypeScript evita que se asignen valores distintos, como números o strings, reforzando la lógica condicional del programa.
console.log('Boolean:\tconst nombreVariable: boolean = true;'); // *Ejemplo de variable booleana tipada.

// &Undefined.
// &El tipo `undefined` representa una variable que **no tiene un valor asignado**. En TypeScript, declarar una variable como `undefined` implica que su valor es desconocido y que no se le asignará un valor inicial. A diferencia de otros tipos primitivos, este tipo normalmente se declara sin asignación, ya que su propósito es indicar la ausencia de valor desde el inicio.
console.log('Undefined:\tconst nombreVariable: undefined;'); // *Declaración de una variable explícitamente undefined.

// &Null.
// &El tipo `null` es similar a `undefined`, pero con una diferencia conceptual importante. Mientras que `undefined` indica ausencia de valor, `null` representa un **valor vacío asignado de forma intencional**. Es decir, el desarrollador decide explícitamente que una variable no contenga ningún valor. Su declaración es similar a la de `undefined`, reforzando la intención de que la variable esté vacía.
console.log('Null:   \tconst nombreVariable: null;'); // *Declaración de una variable null.

// ~Compuestos estructurados.
// ~Los tipos de datos compuestos o estructurados se **pasan y comparan por referencia**, lo que significa que no se copia el valor directamente, sino que se comparte una referencia en memoria. Esto provoca que estos datos sean **mutables**, permitiendo modificar su contenido después de haber sido creados. Una forma común de entender esto es imaginar dos cajas distintas que contienen información: aunque el contenido sea similar, cada caja ocupa un espacio diferente en memoria. En TypeScript, los tipos compuestos no se tipan de la misma forma que los primitivos, ya que cada uno cuenta con **reglas y estructuras específicas de declaración**.
console.log('\n----- Compuestos estructurados. -----'); // *Marca el inicio de la subsección de tipos compuestos.

// &Object.
// &Para trabajar con objetos en TypeScript, normalmente se requiere definir una **interfaz (`interface`) o un tipo (`type`)** que describa la estructura del objeto. Sin embargo, en su forma más básica, la declaración de un objeto es igual a la utilizada en JavaScript. El tipado adicional se introduce cuando se busca mayor control y validación sobre las propiedades del objeto.
console.log('Object: \tconst nombreVariable = {\n\t\t\tclave: valor\n\t\t};'); // *Ejemplo básico de declaración de un objeto.

// &Array.
// &Los arrays en TypeScript permiten definir de forma explícita **qué tipo de elementos pueden almacenar**. Esto significa que un arreglo puede ser únicamente de strings, numbers, booleans, u otros tipos definidos. Existen diferentes formas de declarar arrays, pero una de las más comunes es utilizando el tipo seguido de `[]`. Gracias a esto, TypeScript evita que se inserten valores de un tipo incorrecto dentro del arreglo.
console.log('Array string: \tconst nombreVariable: string[] = [\'Pedro\', \'Juan\', \'Miguel\'];'); // *Array que solo acepta strings.
console.log('Array number: \tconst nombreVariable: number[] = [1, 2, 3, 4, 5];'); // *Array que solo acepta numbers.
console.log('Array boolean:\tconst nombreVariable: boolean[] = [true, false, true];'); // *Array que solo acepta booleans.

// &Enum.
// &El tipo de dato `enum` permite definir un **conjunto de valores constantes con nombre**, lo que mejora significativamente la legibilidad, seguridad y mantenimiento del código. A diferencia de JavaScript, los enums son una característica propia de TypeScript y resultan especialmente útiles cuando se trabaja con valores predefinidos, como estados, roles o categorías. Los enums pueden ser numéricos o de tipo string, permitiendo asociar información descriptiva a cada valor y evitando el uso de valores mágicos en el código.
console.log('Enum común:\tenum nombreEnum {\n\t\t\tVALOR\n\t\t}'); // *Ejemplo de enum numérico.
console.log('Enum string:\tenum nombreEnum {\n\t\t\tVALOR = \'informacion\'\n\t\t};'); // *Ejemplo de enum con valores string.

