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

// &Function
// &Dentro de las funciones es muy similar al declarar variables, ya que en estas se debera de especificar los tipos de datos unicamente en los tipos de parametros que dichas funciones recibiran, asi mismo dependiendo el tipo de funcion deberemos especificar que tipo de dato las funcion retornara, cabe resaltar que en el aspecto de especificar eel tipo de dato a retornar no implica usar otro tipo de datos dentro de la funcion, unicxamente declaramos el tipo de dato que la variable devolvera.
// ?Funciones con tipado explícito.
// ?Las funciones con tipado explícito en TypeScript son funciones muy similares a las funciones tradicionales utilizadas en JavaScript, con la diferencia clave de que en TypeScript se deben **especificar de forma explícita los tipos de datos** que reciben los parámetros y, opcionalmente, el tipo de dato que la función va a retornar. Este tipado adicional permite que el compilador valide el uso correcto de la función, detectando errores como pasar argumentos incorrectos o retornar valores incompatibles. Para lograr esto, se añaden **dos puntos (`:`)** después de cada parámetro para indicar su tipo y, después del paréntesis de los parámetros, se vuelve a utilizar `:` para declarar el tipo de retorno. Este enfoque hace que el comportamiento de la función sea más claro, predecible y seguro en comparación con JavaScript.
console.log(`Funciones normales: \tfunction nombreFuncion(a: number, b: number): number {\n\t\t\t\treturn a + b;\n\t\t\t}`); // *Ejemplo de función tradicional con tipado explícito en parámetros y retorno.

// ?Funciones Flecha.
// ?Las funciones flecha en TypeScript funcionan de manera muy similar a las funciones flecha en JavaScript, pero con soporte de tipado para los parámetros. En este tipo de funciones, normalmente **no es obligatorio especificar el tipo de retorno**, ya que TypeScript es capaz de **inferir automáticamente** el tipo basándose en los tipos de los parámetros y en la expresión que se retorna. Este mecanismo se conoce como **type inference** y permite escribir código más limpio sin perder seguridad de tipos. Aun así, los parámetros sí deben tiparse para garantizar consistencia y evitar errores durante el desarrollo.
console.log('Funciones flecha: \tlet nombreFuncion = (a: number, b: number) => a + b;'); // *Función flecha con parámetros tipados y retorno inferido.

// ?Funciones con parámetros opcionales.
// ?En TypeScript es posible declarar **parámetros opcionales**, los cuales no son obligatorios al momento de invocar una función. Para definir un parámetro como opcional, se agrega un **signo de interrogación (`?`)** justo después del nombre del parámetro y antes de los dos puntos del tipo. Esto indica que dicho parámetro puede recibir un valor o ser `undefined`. Este tipo de parámetros es muy útil cuando una función puede comportarse de distintas formas dependiendo de si recibe o no cierta información, sin necesidad de sobrecargar funciones.
console.log(`Funciones parámetros opcionales: \tlet nombreFuncion = (a: number, b?: number) => \`Dato 1: \${a}, dato opcional: \${b}\`;`); // *Ejemplo de función con un parámetro opcional.

// ?Funciones con parámetros por defecto.
// ?Los parámetros por defecto permiten asignar un **valor inicial predefinido** a un parámetro en caso de que no se proporcione al ejecutar la función. En TypeScript, esta funcionalidad se declara de forma muy similar a JavaScript, con la diferencia de que se debe **especificar el tipo del parámetro** antes del operador de asignación (`=`). Esta técnica es especialmente útil para asegurar valores consistentes y evitar comprobaciones manuales dentro de la función cuando un argumento no es enviado.
console.log('Funciones parámetros por defecto: \t\tlet nombreFuncion = (a: number, b: number = 5) => a + b;'); // *Función con parámetro por defecto tipado.

// ~Definidos por usuario.
// ~Los tipos de datos definidos por el usuario en TypeScript surgen de la necesidad de **modelar la lógica de negocio** y las entidades propias de una aplicación. A diferencia de los tipos primitivos y compuestos, estos tipos no existen de forma nativa, sino que son creados por el desarrollador para representar conceptos específicos del dominio del problema, como usuarios, productos, pedidos, configuraciones o cualquier estructura que la aplicación requiera. Gracias a estos tipos, TypeScript permite construir sistemas **más expresivos, organizados y mantenibles**, donde el código refleja de manera clara las reglas y estructuras del negocio.
// &Class.
// &Las clases en TypeScript mantienen una estructura muy similar a las clases en JavaScript moderno, ya que ambas se basan en la sintaxis introducida en ES6. Sin embargo, la diferencia clave es que en TypeScript **todos los atributos y parámetros deben tener un tipo de dato explícito**. Esto incluye tanto las propiedades de la clase como los parámetros del constructor y los métodos. Un punto importante que suele causar confusión es que, en TypeScript, **las propiedades de la clase deben declararse fuera del constructor**, indicando su tipo y, si aplica, su valor inicial. A diferencia de JavaScript, donde basta con escribir `this.propiedad = valor`, en TypeScript es obligatorio declarar previamente esa propiedad dentro de la clase. Esto obliga a definir claramente la estructura del objeto desde el inicio, evitando errores y mejorando la legibilidad. Además, cuando una propiedad no se inicializa inmediatamente, puede marcarse como opcional o permitir explícitamente `undefined`.
console.log('Clases: \tclass nombreClase {\n\t\t\tnombre: string;\n\t\t\tciudad: string = \'CDMX\';\n\t\t\tedad?: number;\n\n\t\t\tconstructor(nombreParametro: string) {\n\t\t\t\tthis.nombre = nombreParametro;\n\t\t\t}\n\t\t};'); // *Ejemplo de clase en TypeScript con propiedades tipadas, opcionales y valores por defecto.

// &Interface.
// &Las interfaces son uno de los pilares más importantes de TypeScript, ya que permiten **definir la forma que debe tener un objeto, una función o una clase**. Aunque en JavaScript los objetos se crean de manera libre utilizando literales, en TypeScript es necesario **especificar el tipo de cada propiedad** para garantizar coherencia y seguridad. Las interfaces funcionan como un **contrato**, indicando qué propiedades deben existir y qué tipo de dato deben contener. Una ventaja clave de las interfaces es que pueden **extenderse y ampliarse** con el tiempo, permitiendo agregar nuevas propiedades o comportamientos sin romper el código existente. Esto las hace especialmente útiles en proyectos grandes, donde la estructura de los datos evoluciona conforme crece la aplicación.
console.log('Interface básica: \t\t\tinterface NombreInterface {\n\t\t\t\t\t\tnombre: string;\n\t\t\t\t\t};'); // *Interfaz simple con una propiedad obligatoria.
console.log('Interface propiedades opcionales: \tinterface NombreInterface {\n\t\t\t\t\t\tnombre?: string;\n\t\t\t\t\t};'); // *Interfaz con propiedades opcionales.
console.log('Interface para funciones: \t\tinterface NombreInterface {\n\t\t\t\t\t\t(a: number, b: number): boolean;\n\t\t\t\t\t};'); // *Interfaz que define la firma de una función.
console.log('Interface para clases: \t\t\tinterface NombreInterface {\n\t\t\t\t\t\tsaludar(): void;\n\t\t\t\t\t};'); // *Interfaz que define métodos que una clase debe implementar.

// &Type.
// &Los `type` en TypeScript permiten crear **alias de tipos**, lo que significa que se puede asignar un nombre a tipos simples o complejos para mejorar la legibilidad del código. Son especialmente útiles cuando se trabaja con **union types**, estructuras complejas o firmas de funciones. Aunque `type` e `interface` pueden parecer similares, existe una diferencia importante: mientras que las interfaces pueden extenderse y fusionarse, los `type` son **más rígidos** y no permiten ampliaciones posteriores. Por esta razón, los `type` se utilizan comúnmente para definir estructuras cerradas o combinaciones específicas de tipos, donde no se espera que el contrato cambie con el tiempo.
console.log('Type básico: \t\t\ttype Numero = number;'); // *Alias simple para un tipo primitivo.
console.log('Type objeto literal: \t\ttype Persona1 = {\n\t\t\t\t\tnombre: string;\n\t\t\t\t};'); // *Alias para un objeto con propiedades tipadas.
console.log('Type con union types: \t\ttype Nombre = string | null;'); // *Alias que permite múltiples tipos posibles.
console.log('Type propiedades opcionales: \ttype Persona1 = {\n\t\t\t\t\tnombre?: string;\n\t\t\t\t};'); // *Alias con propiedades opcionales.
console.log('Type para funciones: \t\ttype Comprador1 = {\n\t\t\t\t\t(a: number, b: number): boolean;\n\t\t\t\t};'); // *Alias para la firma de una función.
console.log('Type para clases: \t\ttype Persona2 = {\n\t\t\t\t\tsaludar(): void;\n\t\t\t\t};'); // *Alias que define métodos esperados en una clase.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Tipos de datos primitivos.
// ^Los tipos de datos primitivos son aquellos que se **pasan y se comparan por valor**, lo que significa que al asignarlos o compararlos se trabaja directamente con el contenido y no con una referencia en memoria. Una característica clave de estos tipos es que son **inmutables**, es decir, su valor no puede modificarse internamente una vez creado; únicamente pueden ser **reasignados**, lo cual implica reemplazar completamente el valor anterior por uno nuevo. Dentro de esta categoría se incluyen tipos como `string`, `number`, `boolean`, entre otros. En TypeScript, la declaración de estos tipos es más estricta que en JavaScript, ya que se debe indicar explícitamente el tipo de dato siguiendo una estructura clara: tipo de variable, nombre de la variable, dos puntos, tipo de dato, operador de asignación y el valor que se almacenará.
console.log('\n=========== Tipos de datos primitivos. ==========='); //* Indica el inicio visual de la sección dedicada a los tipos de datos primitivos en consola.

// ~Algunos casos de uso de los tipos de datos primitivos.
// ~El manejo de los tipos de datos primitivos en TypeScript es muy similar al de JavaScript en cuanto a su uso y manipulación. La diferencia principal radica en la **declaración explícita del tipo**, ya que TypeScript exige definir qué tipo de dato se va a utilizar desde el inicio. Una vez declarados y tipados, los valores primitivos se comportan de la misma forma que en JavaScript, permitiendo concatenaciones, operaciones aritméticas y evaluaciones lógicas. Este enfoque combina la flexibilidad de JavaScript con la seguridad adicional que ofrece el tipado estático.
console.log('----- Casos de uso de los tipos de datos primitivos. -----'); //* Marca en consola el inicio de los ejemplos prácticos.

// &Caso de uso: String.
// &Los valores de tipo `string` permiten trabajar con **texto y cadenas de caracteres**. Al ser tipos primitivos, las operaciones como la concatenación generan **nuevos valores**, sin modificar los strings originales. Este comportamiento refuerza la inmutabilidad de los datos primitivos y es ampliamente utilizado para construir mensajes, textos dinámicos o valores derivados de otros strings.
let datoPrimitivoString1: string = 'Hola '; //* Declara una variable string tipada que almacena la primera parte del texto.
let datoPrimitivoString2: string = 'Mundo'; //* Declara una segunda variable string tipada con la otra parte del texto.
let datoPrimitivoStringResultado: string = datoPrimitivoString1 + datoPrimitivoString2; //* Concatena ambos strings y guarda el nuevo valor en una tercera variable.
console.log(`String: El resultado de la unión de datoPrimitivoString1 y datoPrimitivoString2 es: ${datoPrimitivoStringResultado}.`); //* Muestra en consola el resultado de la concatenación.

// &Caso de uso: Number.
// &El tipo de dato `number` se utiliza para realizar **operaciones matemáticas** como sumas, restas, multiplicaciones o divisiones. En TypeScript, al igual que en JavaScript, no existe una distinción entre números enteros y decimales; todos se tratan como `number`. El tipado garantiza que solo valores numéricos puedan participar en estas operaciones, evitando errores comunes como intentar sumar texto con números.
let datoPrimitivoNumber1: number = 5; //* Declara una variable numérica tipada con un valor inicial.
let datoPrimitivoNumber2: number = 2; //* Declara una segunda variable numérica tipada.
let datoPrimitivoNumberResultado: number = datoPrimitivoNumber1 + datoPrimitivoNumber2; //* Realiza una suma entre ambos valores y guarda el resultado.
console.log(`Number: El resultado de la suma entre datoPrimitivoNumber1 y datoPrimitivoNumber2 es de: ${datoPrimitivoNumberResultado}.`); //* Imprime el resultado de la operación aritmética.

// &Caso de uso: Boolean.
// &Los valores booleanos representan **condiciones lógicas**, pudiendo ser únicamente `true` o `false`. Su uso es fundamental en estructuras de control como condicionales y bucles. En TypeScript, los booleanos se manejan de la misma forma que en JavaScript, pero el tipado asegura que la variable solo pueda almacenar valores booleanos, reforzando la lógica del programa y evitando asignaciones incorrectas.
let datoPrimitivoBoolean: boolean = true; //* Declara una variable booleana tipada con valor verdadero.
if (datoPrimitivoBoolean) { //* Evalúa la condición; si es true, se ejecuta este bloque.
    console.log('Boolean: El valor de datoPrimitivoBoolean es: true.'); //* Se ejecuta cuando la condición es verdadera.
} else { //* Bloque alternativo que se ejecuta si la condición es falsa.
    console.log('Boolean: El valor de datoPrimitivoBoolean es: false.'); //* Se ejecuta cuando la condición es falsa.
} //* Cierre de la estructura condicional if/else.

// ~Desglose dentro de editores de código.
// ~Los editores de código modernos ofrecen múltiples herramientas que facilitan el desarrollo, como autocompletado, sugerencias y validaciones en tiempo real. En el caso de TypeScript, una de las ventajas más importantes es que, al declarar una variable con un tipo específico, el editor puede **inferir automáticamente qué métodos y propiedades están disponibles** para ese tipo. Esto significa que al escribir el nombre de la variable seguido de un punto, el editor mostrará únicamente las funciones compatibles con ese tipo de dato, ayudando a evitar errores y acelerando el desarrollo. Esta característica mejora significativamente la experiencia del desarrollador y reduce la posibilidad de usar métodos incorrectos.
let datoString: string = ''; //* Declara una variable string vacía para demostrar el autocompletado del editor.
// datoString. //* Al escribir el punto, el editor mostrará únicamente métodos propios del tipo string.

// ~Declaración de una variable con más de un tipo de dato.
// ~En TypeScript, aunque normalmente se declara un único tipo de dato para cada variable, el lenguaje permite definir **variables que acepten múltiples tipos posibles**. Esta característica es conocida como **Union Types** y resulta especialmente útil cuando una variable puede almacenar distintos valores dependiendo del flujo del programa, como datos provenientes de formularios, respuestas de una API o estados intermedios. Para declarar una variable con más de un tipo, se utiliza el **símbolo de barra vertical (`|`)**, el cual indica que la variable puede ser cualquiera de los tipos especificados. Este enfoque mantiene el código flexible sin perder la seguridad del tipado, ya que TypeScript seguirá validando que solo se asignen los tipos permitidos.
let datoPrimitivoConMasDeUnTipoDeDatoPrimitivo: string | number | null | undefined = 'Hola Mundo'; //* Declara una variable utilizando Union Types, permitiendo que el valor sea string, number, null o undefined, e inicializándola con un string válido.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Any: Cualquier dato.
// ^`any` es uno de los conceptos **más delicados e importantes** dentro de TypeScript. Su propósito principal es permitir que una variable pueda almacenar **cualquier tipo de dato**, sin aplicar reglas de tipado ni validaciones por parte del compilador. En la práctica, utilizar `any` equivale a **desactivar completamente el sistema de tipos**, haciendo que TypeScript se comporte de forma muy similar a JavaScript puro. Por esta razón, aunque existen escenarios donde su uso es inevitable (como migraciones de JS a TS o datos externos no controlados), la **recomendación principal es evitarlo siempre que sea posible**, ya que rompe la seguridad, estructura y robustez que TypeScript ofrece. Si un proyecto depende excesivamente de `any`, generalmente es mejor considerar directamente JavaScript.
console.log('\n=========== Any: Cualquier Dato. ==========='); //* Muestra en consola el inicio de la sección dedicada al tipo de dato `any`.

// ~¿Cómo se declaran y usan las variables tipo Any?
// ~Para declarar una variable de tipo `any`, TypeScript ofrece dos formas principales. La primera consiste simplemente en **declarar una variable sin asignarle un tipo ni un valor inicial**, lo que provoca que TypeScript infiera automáticamente el tipo `any`. La segunda forma es **declarar explícitamente el tipo `any`** utilizando dos puntos y la palabra reservada `any`. En ambos casos, la variable podrá almacenar cualquier tipo de dato y cambiar de tipo en cualquier momento. Este comportamiento es riesgoso, ya que TypeScript deja de validar operaciones, métodos y asignaciones. Además, cuando una variable `any` contiene un valor específico, el editor puede sugerir métodos según el valor actual, lo que puede generar una **falsa sensación de seguridad**.
console.log('----- ¿Cómo se declaran y usan las variables tipo Any?. -----'); //* Indica en consola el inicio de los ejemplos sobre el uso de `any`.
let tipoDatoAny; //* Declara una variable sin tipo ni valor inicial, por lo que TypeScript infiere automáticamente el tipo `any`.
let tipoDatoAny2: any; //* Declara explícitamente una variable con tipo `any`, desactivando el sistema de tipos para ella.
tipoDatoAny = 'Hola Mundo'; //* Asigna un valor string a la variable `any`, sin restricciones de tipado.
console.log(`Tipo de dato Any como string: ${tipoDatoAny}.`); //* Imprime el valor actual de la variable, tratándola como string.
tipoDatoAny = 10; //* Reasigna la misma variable `any` con un valor numérico, demostrando que puede cambiar de tipo libremente.
console.log(`Mismo dato Any pero ahora como number: ${tipoDatoAny}.`); //* Imprime el nuevo valor, ahora interpretado como number.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Arrays
// ^Sabemos que los array en JS se declaran sin tipado ya que dicho lenguaje es mas flexble y no incluiye un tipado al igual que TS lo hace, port lo que bien, sabemos que TS usa de estructura o base a TS por lo que dentro de dicho lenguaje de igual manerap odemos declarar un array sin necesidad de espoecificar el tipado, ya que lo que hace en estos casos TS infiere el tip ode array que estamos declarando ,esto quiere decir que basandose ts en lo que contiene el arry y el tipo de datos este inferie que tido de array es.
console.log('\n=========== Arrays. ==========='); 

let variableTipoArray = [1,2,3,4,5]



