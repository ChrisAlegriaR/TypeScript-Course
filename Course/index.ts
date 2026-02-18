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

// ^Arrays.
// ^Los arrays dentro de TypeScript funcionan de manera muy similar a como lo hacen en JavaScript, ya que siguen siendo estructuras que permiten almacenar múltiples valores dentro de una misma variable, organizados por índice. Sin embargo, la diferencia clave es que en TypeScript los arrays pueden y deben estar **tipados**, lo que significa que se especifica qué tipo de datos pueden almacenar. Esto aporta mayor seguridad y control, evitando que se inserten valores incompatibles dentro del arreglo. Los arrays pueden contener números, strings, booleanos u otros tipos más complejos, pero siempre respetando el tipado declarado.

// ~Tipado de arrays.
// ~El tipado de arrays en TypeScript tiene una sintaxis particular. No se puede declarar un array simplemente como `let nombre: string = []`, ya que eso indicaría que la variable es un string y no un arreglo. Para declarar correctamente un array tipado, se debe colocar primero el tipo de dato que almacenará y luego los corchetes `[]`. Por ejemplo, `string[]` indica un arreglo que solo puede contener strings. Este mismo patrón aplica para `number[]`, `boolean[]`, entre otros. Esta sintaxis garantiza que todos los elementos dentro del arreglo sean del mismo tipo.
let variableTipoArray: string[] = ['Hola', 'Mundo']; //* Declara un array tipado como string[], permitiendo únicamente cadenas de texto dentro del arreglo.

// ~TypeScript infiere los tipos de arrays.
// ~Aunque TypeScript permite declarar arrays con tipado explícito, también puede **inferir automáticamente el tipo del arreglo** basándose en los valores iniciales que contiene. Esto significa que si declaramos un array con números, TypeScript entenderá que se trata de un `number[]`, incluso si no lo especificamos manualmente. Esta característica se conoce como **type inference** y facilita escribir código más limpio sin perder seguridad de tipos.
let variableTipoArrayInferido = [1, 2, 3, 4, 5]; //* Declara un array sin tipado explícito; TypeScript infiere automáticamente que es de tipo number[].

// ~Incompatibilidad de datos en cierto tipo de arrays.
// ~Una vez que un array ha sido tipado explícitamente o inferido por TypeScript, este solo aceptará elementos del tipo correspondiente. Si se intenta insertar un valor de tipo distinto, el compilador generará un error. Esto evita inconsistencias en los datos y errores en tiempo de ejecución. Por ejemplo, un arreglo de tipo number no permitirá almacenar strings.
let variableTipoArrayNumber = [1, 2, 3, 4, 5]; //* Declara un array que TypeScript infiere como number[].
// variableTipoArrayNumber.push('Hola Mundo'); //* Esta línea generaría un error porque se intenta insertar un string en un array de números.

// ~Desglose dentro de editores de código.
// ~Al igual que con otros tipos de datos en TypeScript, los editores de código modernos aprovechan el tipado para ofrecer autocompletado inteligente. Cuando se escribe el nombre del array seguido de un punto, el editor mostrará únicamente los métodos compatibles con el tipo de arreglo declarado, como `push`, `pop`, `map`, `filter`, entre otros. Esto mejora la productividad y reduce errores al programar.
let variableTipoArrayNumberDesgloce: number[] = [1, 2, 3, 4, 5]; //* Declara un array tipado explícitamente como number[].
// variableTipoArrayNumberDesgloce. //* Al escribir el punto, el editor sugerirá métodos propios de arrays compatibles con números.

// ~¿Se pueden declarar arrays de diferentes tipos de datos?.
// ~Sí, es posible declarar arrays que contengan más de un tipo de dato. Sin embargo, para lograr esto se utilizan **tipados especializados** como los union types (`(string | number)[]`). Estos permiten combinar múltiples tipos dentro de un mismo arreglo de manera controlada. No obstante, estos conceptos se abordan en secciones más avanzadas, ya que requieren comprender previamente cómo funcionan las uniones y la composición de tipos en TypeScript.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Objetos (Introducción).
// ^La introducción a los objetos en TypeScript es muy similar a la forma en que se trabajan en JavaScript, ya que la sintaxis base se mantiene prácticamente igual. Sin embargo, la diferencia clave radica en el **sistema de tipado estático**, el cual permite que cada propiedad del objeto tenga un tipo definido o inferido. Esto aporta mayor seguridad, control y claridad en la estructura de los datos. Aunque visualmente parezca lo mismo que en JavaScript, internamente TypeScript está validando que cada clave contenga el tipo correcto, evitando errores comunes en tiempo de ejecución.

// ~Declaración de objetos en TypeScript.
// ~Los objetos en TypeScript se declaran utilizando la misma estructura que en JavaScript: tipo de variable, nombre, operador de asignación y llaves `{}` donde se definen las claves y sus respectivos valores. Cada clave puede almacenar distintos tipos de datos como strings, números, booleanos, arrays, funciones u otros objetos. Aunque no es obligatorio utilizar `type` o `interface` para declarar un objeto, es altamente recomendable en proyectos grandes, ya que permiten definir contratos claros. Si no se usan, TypeScript aplicará **inferencia de tipos**, generando automáticamente el tipo interno del objeto basado en sus valores iniciales.
let nombreObjeto = { //* Declara un objeto utilizando la sintaxis literal estándar de JavaScript.
    clave: 'valor' //* Define una propiedad llamada `clave` con un valor string; TypeScript infiere que esta propiedad es de tipo string.
}; //* Cierre del objeto literal.

// ~Inferencia de tipo de clave.
// ~Cuando no se utilizan `type` o `interface`, TypeScript analiza automáticamente los valores iniciales del objeto y genera un tipo interno basado en ellos. Esto significa que cada propiedad queda fuertemente tipada según su valor inicial. Aunque esta inferencia es poderosa y funcional, tiene una consecuencia importante: si posteriormente se intenta reasignar el objeto con valores de tipos diferentes, TypeScript generará un error. Además, cuando se redeclara completamente un objeto, es necesario proporcionar **todas las propiedades originales** con sus respectivos tipos correctos, ya que el tipado generado internamente exige coherencia estructural.
let objetoProgramador = { //* Declara un objeto literal que representa un programador.
    nombre: 'Christian', //* Propiedad `nombre` inferida como string.
    tecnologias: ['HTML','CSS','JS','TS'], //* Propiedad `tecnologias` inferida como string[].
    tomaAgua: true, //* Propiedad `tomaAgua` inferida como boolean.
}; //* Cierre del objeto literal.

// objetoProgramador = { //* Intento de reasignación completa del objeto.
//     nombre: ['Christian'], //* Error: se intenta cambiar el tipo de string a string[].
//     tecnologias: 12, //* Error: se intenta cambiar el tipo de string[] a number.
//     tomaAgua: 'hola', //* Error: se intenta cambiar el tipo de boolean a string.
// }; //* Este bloque generaría errores de tipado porque no respeta la estructura inferida originalmente.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Type Personalizado.
// ^`Type` cuenta con diferentes funciones dentro de TypeScript, pero una de las más utilizadas es la posibilidad de **tipar objetos de manera personalizada**. Esto nos permite hacer más rígido y estructurado nuestro código, ya que ese es el objetivo principal de TypeScript: tener un sistema más sólido, robusto y predecible que JavaScript, evitando inconsistencias en los datos y errores en tiempo de ejecución.

// ~Declaracion de tipado con Type y vinculacion del type con el objeto.
// ~Para poder asignar un tipado a un objeto es necesario usar `type`, el cual nos permite especificar y declarar el tipo de dato que tendrá cada clave de nuestro objeto. Esto le proporciona mayor robustez al sistema y asegura que el objeto respete exactamente la estructura que definimos. Posteriormente, el objeto se vinculará con el `type` creado, heredando automáticamente el tipado definido para sus claves y valores.
// ?Declaracion de tipado con Type.
// ?El uso de `type` es relativamente sencillo. Primero se escribe la palabra reservada `type`, después el nombre del tipo (por convención en PascalCase), seguido del símbolo igual y un bloque de llaves `{}`. Dentro de las llaves se declaran las claves exactamente como existirán en el objeto, y después de cada clave se especifica el tipo de dato utilizando `:`. Es importante recordar que los nombres de `type`, `interface` y clases comienzan con mayúscula por convención, incluso si el objeto que lo use comienza con minúscula.
type ObjetoCoche = { //* Declara un type personalizado llamado `ObjetoCoche`.
    marca: string, //* Define la propiedad `marca` como obligatoria y de tipo string.
    anio: number, //* Define la propiedad `anio` como obligatoria y de tipo number.
    funciona: boolean //* Define la propiedad `funciona` como obligatoria y de tipo boolean.
} //* Cierre del bloque del type.

// ?Vincular tipado Type con objeto.
// ?Una vez que el `type` está definido, para vincularlo con un objeto se agrega `: NombreDelType` después del nombre del objeto. Esto hará que el objeto adopte automáticamente la estructura definida. Si alguna clave no coincide en nombre o tipo, TypeScript generará un error en tiempo de compilación.
let objetoCoche: ObjetoCoche = { //* Declara un objeto vinculado al type `ObjetoCoche`.
    marca: 'Nissan', //* Asigna un valor válido tipo string a la propiedad `marca`.
    anio: 2003, //* Asigna un valor válido tipo number a la propiedad `anio`.
    funciona: true //* Asigna un valor válido tipo boolean a la propiedad `funciona`.
}; //* Cierre del objeto literal.

// ~Uso de un solo Type con diferentes objetos.
// ~La declaración de los `type` no se limita a un solo objeto. Podemos utilizar un mismo `type` como plantilla para múltiples objetos que compartan la misma estructura. Esto permite reutilizar la definición y mantener coherencia estructural en diferentes partes del programa.
type EstudianteOp = { //* Declara un type reutilizable llamado `EstudianteOp`.
    nombre: string, //* Propiedad obligatoria tipo string.
    grado: number, //* Propiedad obligatoria tipo number.
    grupo: string, //* Propiedad obligatoria tipo string.
    aprovado: boolean //* Propiedad obligatoria tipo boolean.
} //* Cierre del type.

let estudianteOp1: EstudianteOp = { //* Primer objeto que utiliza el type `EstudianteOp`.
    nombre: 'Mariana Sanchez', //* Valor correcto tipo string.
    grado: 3, //* Valor correcto tipo number.
    grupo: 'A', //* Valor correcto tipo string.
    aprovado: true //* Valor correcto tipo boolean.
} //* Cierre del objeto.

let estudianteOp2: EstudianteOp = { //* Segundo objeto reutilizando el mismo type.
    nombre: 'Rodolfo Alegria', //* Valor correcto tipo string.
    grado: 5, //* Valor correcto tipo number.
    grupo: 'B', //* Valor correcto tipo string.
    aprovado: false //* Valor correcto tipo boolean.
} //* Cierre del objeto.

// ~Declaracion de claves opcionales y con diferentes tipos de datos.
// ~Así como en variables podemos permitir más de un tipo de dato utilizando `|`, y así como en funciones podemos declarar parámetros opcionales con `?`, también es posible hacer lo mismo dentro de un `type`. Para permitir múltiples tipos en una clave usamos `|` (union types), y para declarar claves opcionales utilizamos `?`.
type TrabajadorOp = { //* Declara un type con propiedades opcionales y union types.
    nombre: string, //* Propiedad obligatoria tipo string.
    edad: string | number, //* Propiedad que puede ser string o number.
    activo?: boolean //* Propiedad opcional tipo boolean.
} //* Cierre del type.

let objetoTrabajadorOp1: TrabajadorOp = { //* Objeto que usa el type `TrabajadorOp`.
    nombre: 'Pedro Perez', //* Valor válido tipo string.
    edad: '34', //* Valor válido tipo string permitido por el union type.
} //* Cierre del objeto.

let objetoTrabajadorOp2: TrabajadorOp = { //* Segundo objeto usando el mismo type.
    nombre: 'Pedro Perez', //* Valor válido tipo string.
    edad: 23, //* Valor válido tipo number permitido por el union type.
    activo: false //* Propiedad opcional incluida correctamente.
} //* Cierre del objeto.

// ~Errores de objetos con uso de Type.
// ~Existen errores comunes cuando se implementa un tipado con `type` en objetos. Estos errores afectan partes específicas de la estructura y son detectados en tiempo de compilación. Los más comunes son: falta de una clave obligatoria, declarar una clave no definida en el type o asignar un tipo diferente al especificado.
// ?Error por falta de clave valor en el objeto
// ?Este error ocurre cuando omitimos una propiedad que fue declarada como obligatoria dentro del `type`. TypeScript marcará el error directamente en el nombre de la variable del objeto indicando que falta una propiedad requerida.
type TipadoObjeto = { //* Declara un type con dos propiedades obligatorias.
    nombre: string, //* Propiedad obligatoria tipo string.
    anio: number //* Propiedad obligatoria tipo number.
} //* Cierre del type.

// let objetoFaltaClaveValorObjeto: TipadoObjeto = { //* Intento de crear objeto incompleto.
//     nombre: 'Jesus Sanchez' //* Falta la propiedad `anio`, lo que generaría error.
// } //* TypeScript marcaría error por estructura incompleta.

// ?Error por especificar una clave, valor de mas en el objeto.
// ?Este error se genera cuando agregamos una propiedad que no existe en el `type`. TypeScript marcará el error directamente en el nombre de la clave adicional.
let objetoEspecificarClaveValorDemas: TipadoObjeto = { //* Objeto correctamente vinculado al type.
    nombre: 'Jesus Sanchez', //* Propiedad válida.
    anio: 2026, //* Propiedad válida.
    // activo: true //* Esta línea generaría error porque `activo` no existe en `TipadoObjeto`.
} //* Cierre del objeto.

// ?Error por especificar una clave, valor con tipo diferente de dato.
// ?Este error ocurre cuando el tipo del valor no coincide con el tipo declarado en el `type`. TypeScript indicará el error señalando la clave incompatible.
// let objetoEspecificarClaveValorDatoDiferente: TipadoObjeto = { //* Intento de crear objeto con tipo incorrecto.
//     nombre: 'Jesus Sanchez', //* Correcto.
//     anio: '2026', //* Error: debería ser number, no string.
// } //* TypeScript marcaría error por incompatibilidad de tipos.

// ~Funciones con Type.
// ~Dentro del mundo de TypeScript también podemos asignarle a un parámetro un `type` como tipo de dato. Esto, al igual que con `interface`, no crea un tipo nuevo inexistente en memoria, sino que define un alias estructural que funcionará como contrato. Es decir, cuando declaramos un parámetro con un `type`, le estamos indicando a la función que el objeto que se pase como argumento TIENE que cumplir obligatoriamente con la estructura definida en dicho `type`. Por lo tanto, el uso de `type` como tipo de dato en parámetros también funciona como un filtro de seguridad estructural. Si intentamos pasar un objeto que no tenga la misma forma que el `type` declarado, TypeScript generará un error y no permitirá compilar el código, protegiendo así la coherencia del programa.
console.log('----- Declaracion de y uso de funciones con type. -----'); //* Muestra título en consola para esta sección.

// ?Declaracion de type para usar en parametros.
// ?Para utilizar un `type` en un parámetro, primero debemos declarar el alias utilizando la palabra reservada `type`, seguida del nombre (por convención en PascalCase), el signo igual `=`, y posteriormente la estructura del objeto entre llaves `{}`. Dentro de estas llaves declaramos las claves exactamente como deberán existir en el objeto que se pase como argumento, especificando el tipo de dato de cada una con `:`.
type TypeDesarrollador = { //* Declaración del type `TypeDesarrollador` como alias estructural.
    nombre: string, //* Propiedad `nombre` obligatoria de tipo string.
    tecnologias: string[] //* Propiedad `tecnologias` como arreglo de strings.
}; //* Cierre del type `TypeDesarrollador`.

let desarrollador1 = { //* Objeto literal que cumple con la estructura del type.
    nombre: 'Andres', //* Propiedad válida según el contrato.
    tecnologias: ['React','Node','TypeScript'] //* Propiedad válida según el contrato.
}; //* Cierre del objeto `desarrollador1`.

function funcionUsoType(parametroRecibira: TypeDesarrollador){ //* Función que recibe un parámetro tipado con `TypeDesarrollador`.
    console.log(`El nombre del desarrollador es: ${parametroRecibira.nombre}`); //* Se accede únicamente a propiedades garantizadas por el type.
} //* Cierre de la función `funcionUsoType`.

funcionUsoType(desarrollador1); //* Se ejecuta correctamente porque el objeto cumple con el contrato estructural.

// ?Paso de objetos con informacion de mas como parametro usando type.
// ?Algo importante a destacar es que cuando utilizamos un `type` como tipo de parámetro, TypeScript también permitirá que el objeto que se pase tenga información adicional, siempre y cuando cumpla con las propiedades mínimas definidas en el `type`. Es decir, si el `type` exige `nombre` y `tecnologias`, y el objeto además incluye otra propiedad extra como `experiencia`, seguirá siendo aceptado como argumento válido, ya que el `type` solo verifica que se cumpla el contrato mínimo requerido.
console.log('----- Paso de objetos con informacion de mas como parametro usando type. -----'); //* Separador visual en consola.

let desarrollador2 = { //* Objeto con propiedad adicional no declarada en el type.
    nombre: 'Laura', //* Propiedad requerida por el type.
    tecnologias: ['Angular','TS'], //* Propiedad requerida por el type.
    experiencia: 5 //* Propiedad adicional que no está declarada en el type.
}; //* Cierre del objeto `desarrollador2`.

function funcionUsoType2(parametroRecibira: TypeDesarrollador){ //* Función que recibe el mismo type como contrato.
    console.log(`El nombre del desarrollador es: ${parametroRecibira.nombre}`); //* Uso correcto de propiedad declarada.
} //* Cierre de la función `funcionUsoType2`.

funcionUsoType2(desarrollador2); //* Se ejecuta correctamente porque cumple con el contrato mínimo.

// ?Uso de dato de mas de objeto como parametro usando type.
// ?Ahora bien, aunque el `type` acepta el parámetro que contiene datos adicionales, hay algo extremadamente importante que debemos entender. Si dentro de la función intentamos utilizar un dato que está de más en el objeto que se pasó como parámetro, la función generará un error. Esto sucede porque dicho dato adicional no forma parte de la estructura definida en el `type`, y por lo tanto no está reconocido dentro del contrato tipado. En términos simples, cuando declaramos que un parámetro es de tipo `type`, estamos limitando el acceso únicamente a las propiedades que ese `type` garantiza. Por ende, intentar usar un dato que no está declarado en el `type` provocará un error en tiempo de compilación, ya que TypeScript no reconoce esa propiedad dentro del contrato estructural.
console.log('----- Uso de dato de mas de objetos como parametro usando type. -----'); //* Separador visual.

let desarrollador3 = { //* Objeto que contiene propiedad extra.
    nombre: 'Sofia', //* Propiedad requerida.
    tecnologias: ['Vue','JS'], //* Propiedad requerida.
    experiencia: 3 //* Propiedad adicional no declarada en el type.
}; //* Cierre del objeto `desarrollador3`.

function funcionUsoType3(parametroRecibira: TypeDesarrollador){ //* Función tipada con el type como contrato.
    console.log(`El nombre del desarrollador es: ${parametroRecibira.nombre}`); //* Uso válido de propiedad declarada en el type.
    // console.log(parametroRecibira.experiencia); //* Esto generaría error porque `experiencia` no existe dentro del type.
} //* Cierre de la función `funcionUsoType3`.

funcionUsoType3(desarrollador3); //* Ejecución correcta mientras no se intente acceder a propiedades no declaradas.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Interface
// ^Si bien quizás las interfaces parecen y se ven muy similares a los `type`, cabe resaltar que para los casos donde únicamente queremos declarar el tipado de ciertos datos su sintaxis puede resultar muy parecida. Sin embargo, realmente ambos tienen diferentes usos y propósitos que conforme se vaya avanzando y profundizando en el curso se irán analizando con mayor detalle. Esto se debe a que cuentan con funcionalidades distintas entre sí y están diseñadas para escenarios específicos. Por lo tanto, en esta sección se verán únicamente interfaces básicas, las cuales nos permitirán, al igual que `type`, declarar el tipado de objetos y otros elementos, pero entendiendo que conceptualmente una `interface` representa un contrato estructural más enfocado al diseño de forma y comportamiento.
console.log('\n=========== Interface. ==========='); //* Muestra en consola el título de la sección dedicada a interfaces.

// ~Declaracion de tipado con Interface y vinculacion del Interface con el objeto.
// ~La forma de declarar una `interface` en TypeScript es muy similar a la de `type` cuando se trata de tipar objetos. La diferencia principal es que para declarar una `interface` no se utiliza el signo igual (`=`). Todo lo demás mantiene una estructura parecida: se utilizan llaves `{}`, se declara cada clave seguida de dos puntos `:` y posteriormente se especifica el tipo de dato que almacenará dicha clave en nuestro objeto. Además, la forma de vincular un objeto con una `interface` es exactamente la misma que con un `type`, utilizando `:` seguido del nombre de la interface después del nombre de la variable.
// ?Declaracion de tipado con Interface.
// ?El uso de `interface` es relativamente sencillo pero conceptualmente importante. Primero se escribe la palabra reservada `interface`, después el nombre del tipo (por convención en PascalCase), y posteriormente se abre un bloque de llaves `{}`. Dentro de las llaves se declaran las claves exactamente como existirán en el objeto, y después de cada clave se especifica el tipo de dato utilizando `:`. Es importante recordar que los nombres de `type`, `interface` y clases comienzan con mayúscula por convención, incluso si el objeto que lo utilice comienza con minúscula.
interface ObjetoCoche2 { //* Se declara la interface `ObjetoCoche2`, la cual funcionará como contrato estructural.
    marca: string, //* Define que la propiedad `marca` debe ser de tipo string.
    anio: number, //* Define que la propiedad `anio` debe ser de tipo number.
    funciona: boolean //* Define que la propiedad `funciona` debe ser de tipo boolean.
} //* Cierre de la declaración de la interface.

// ?Vincular tipado Interface con objeto.
// ?Una vez que el `interface` está definido, para vincularlo con un objeto simplemente se agrega `: NombreDeInterface` después del nombre del objeto. Esto hará que el objeto adopte automáticamente la estructura definida en la interface. Si alguna clave no coincide en nombre o tipo, TypeScript generará un error en tiempo de compilación, impidiendo que el código continúe hasta que la estructura sea corregida.
let objetoCoche2: ObjetoCoche2 = { //* Se declara un objeto cuyo tipo está definido por la interface `ObjetoCoche2`.
    marca: 'Nissan', //* Se asigna un valor string válido para la propiedad `marca`.
    anio: 2003, //* Se asigna un valor number válido para la propiedad `anio`.
    funciona: true //* Se asigna un valor boolean válido para la propiedad `funciona`.
}; //* Cierre del objeto `objetoCoche2`.

// ~Uso de un solo Interface con diferentes objetos.
// ~La declaración de una `interface` no se limita a un solo objeto. Podemos utilizar un mismo `interface` como plantilla estructural para múltiples objetos que compartan la misma forma. Esto permite reutilizar la definición, mantener coherencia estructural y asegurar que todos los objetos relacionados cumplan con el mismo contrato de datos.
interface EstudianteOp2 { //* Se declara la interface `EstudianteOp2`.
    nombre: string, //* La propiedad `nombre` debe ser string.
    grado: number, //* La propiedad `grado` debe ser number.
    grupo: string, //* La propiedad `grupo` debe ser string.
    aprobado: boolean //* La propiedad `aprobado` debe ser boolean.
} //* Cierre de la interface `EstudianteOp2`.

let estudianteOp11: EstudianteOp2 = { //* Se crea el primer objeto que implementa la interface.
    nombre: 'Mariana Sanchez', //* Valor válido para `nombre`.
    grado: 3, //* Valor válido para `grado`.
    grupo: 'A', //* Valor válido para `grupo`.
    aprobado: true //* Valor válido para `aprobado`.
} //* Cierre del objeto `estudianteOp11`.

let estudianteOp12: EstudianteOp2 = { //* Se crea un segundo objeto usando la misma interface.
    nombre: 'Rodolfo Alegria', //* Valor válido para `nombre`.
    grado: 5, //* Valor válido para `grado`.
    grupo: 'B', //* Valor válido para `grupo`.
    aprobado: false //* Valor válido para `aprobado`.
} //* Cierre del objeto `estudianteOp12`.

// ~Declaracion de claves opcionales y con diferentes tipos de datos.
// ~Así como en variables podemos permitir más de un tipo de dato utilizando `|` (union types), y así como en funciones podemos declarar parámetros opcionales utilizando `?`, también es posible hacer exactamente lo mismo dentro de una `interface`. Para permitir múltiples tipos en una clave usamos `|`, y para declarar claves opcionales utilizamos `?`, lo que nos brinda mayor flexibilidad estructural sin perder el control del tipado.
interface TrabajadorOp2 { //* Declaración de interface con propiedades flexibles.
    nombre: string, //* Propiedad obligatoria de tipo string.
    edad: string | number, //* Propiedad que puede ser string o number.
    activo?: boolean //* Propiedad opcional de tipo boolean.
} //* Cierre de la interface `TrabajadorOp2`.

let objetoTrabajadorOp11: TrabajadorOp2 = { //* Objeto que cumple la interface sin incluir la propiedad opcional.
    nombre: 'Pedro Perez', //* Valor válido para `nombre`.
    edad: '34', //* Valor válido (string) para `edad`.
} //* Cierre del objeto `objetoTrabajadorOp11`.

let objetoTrabajadorOp12: TrabajadorOp2 = { //* Objeto que incluye la propiedad opcional.
    nombre: 'Pedro Perez', //* Valor válido para `nombre`.
    edad: 23, //* Valor válido (number) para `edad`.
    activo: false //* Propiedad opcional incluida correctamente.
} //* Cierre del objeto `objetoTrabajadorOp12`.

// ~Funciones con Interfaces.
// ~Dentro del mundo de TypeScript podemos asignarle a un parámetro una `interface` como tipo de dato. Esto no crea un nuevo tipo inexistente, sino que establece un contrato estructural. Esto significa que cuando declaramos el parámetro con una interface como tipo de dato, le indicamos a la función que, para poder ejecutarse correctamente, el objeto que se pase como argumento TIENE que cumplir obligatoriamente con la forma definida en la interface. Por lo tanto, el uso de interfaces como tipo de dato en parámetros funciona como un filtro de seguridad estructural. Si intentamos pasar un objeto que no tenga la misma estructura, TypeScript generará un error y no permitirá compilar el código.
console.log('----- Declaracion de y uso de funciones con interfaces. -----'); //* Muestra título en consola.

interface InterfaceProgramador { //* Declaración de interface para programadores.
    nombre: string, //* Propiedad `nombre` obligatoria.
    lenguajes: string[] //* Propiedad `lenguajes` como arreglo de strings.
} //* Cierre de la interface.

let programador1 = { //* Objeto literal que cumple la estructura requerida.
    nombre: 'Christian', //* Propiedad válida.
    lenguajes: ['HTML','CSS','JS','TS'] //* Propiedad válida.
} //* Cierre del objeto.

function funcionUsoInterfaces(parametroRecibira: InterfaceProgramador){ //* Función que recibe un parámetro tipado con la interface.
    console.log(`El nombre del programador es: ${parametroRecibira.nombre}`) //* Se accede únicamente a propiedades garantizadas por la interface.
} //* Cierre de la función.

funcionUsoInterfaces(programador1); //* Se ejecuta correctamente porque cumple el contrato.

// ?Paso de objetos con informacion de mas como parametro.
// ?Algo importante a destacar es que cuando se utiliza una interface como tipo de parámetro, TypeScript permitirá que el objeto que se pase tenga información adicional, siempre y cuando cumpla con las propiedades mínimas definidas en la interface. Es decir, si la interface exige `nombre` y `lenguajes`, y el objeto además incluye `genero`, seguirá siendo aceptado como argumento válido, ya que la interface solo verifica que se cumpla el contrato mínimo requerido.
console.log('----- Paso de objetos con informacion de mas como parametro. -----'); //* Separador visual.

let programador2 = { //* Objeto con propiedad adicional.
    nombre: 'Luis', //* Propiedad requerida.
    lenguajes: ['JS','TS'], //* Propiedad requerida.
    genero: 'masculino' //* Propiedad adicional no declarada en la interface.
} //* Cierre del objeto.

function funcionUsoInterfaces2(parametroRecibira: InterfaceProgramador){ //* Función tipada con la misma interface.
    console.log(`El nombre del programador es: ${parametroRecibira.nombre}`) //* Uso correcto de propiedad declarada.
} //* Cierre de la función.

funcionUsoInterfaces2(programador2); //* Se ejecuta sin error porque cumple con el contrato mínimo.

// ?Uso de dato de mas de objeto como parametro.
// ?Ahora bien, aunque la interface acepta el parámetro que contiene datos adicionales, hay algo extremadamente importante que debemos entender. Si dentro de la función intentamos utilizar un dato que está de más en el objeto que se pasó como parámetro, la función generará un error. Esto sucede porque dicho dato adicional no forma parte de la estructura definida en la interface, y por lo tanto no está reconocido dentro del contrato tipado. En términos simples, cuando declaramos que un parámetro es de tipo interface, estamos limitando el acceso únicamente a las propiedades que la interface garantiza. Por ende, intentar usar un dato que no está declarado en la interface provocará un error en tiempo de compilación.
console.log('----- Uso de dato de mas de objetos como parametro. -----'); //* Separador visual.

let programador3 = { //* Objeto con propiedad extra.
    nombre: 'Miguel', //* Propiedad requerida.
    lenguajes: ['HTML','CSS'], //* Propiedad requerida.
    genero: 'masculino' //* Propiedad adicional.
} //* Cierre del objeto.

function funcionUsoInterfaces3(parametroRecibira: InterfaceProgramador){ //* Función tipada con la interface.
    console.log(`El nombre del programador es: ${parametroRecibira.nombre}`) //* Uso válido de propiedad existente.
    // console.log(parametroRecibira.genero); //* Esto generaría error porque `genero` no existe en la interface.
} //* Cierre de la función.

funcionUsoInterfaces3(programador3); //* Ejecución correcta mientras no se intente usar propiedades no declaradas.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ^Clases y OOP
// ^Bien sabemos que existe la programación orientada a objetos (POO), en la cual se utilizan conceptos fundamentales como abstracción, clases, polimorfismo, herencia, instancias, encapsulamiento y más. En JavaScript, pese a ser un lenguaje flexible y multiparadigma, también se puede trabajar con Programación Orientada a Objetos. Sin embargo, una de las estructuras más fuertes y características de TypeScript son precisamente las clases, ya que este lenguaje depende en gran medida de ellas, especialmente cuando hablamos del manejo estructurado de la información y del uso formal de la POO. Debido a que TypeScript es un lenguaje tipado, resulta mucho más adecuado para trabajar con este paradigma, ya que nos obliga a definir estructuras claras y contratos bien establecidos. Por lo tanto, al ser un lenguaje con tipado estático, TypeScript cuenta con más herramientas y restricciones que hacen que su sintaxis y comportamiento orientado a objetos se asemeje mucho más a lenguajes como Java o incluso C#, ya que si comparamos la POO en TypeScript con la de Java, por ejemplo, podremos observar muchísimas similitudes tanto en estructura como en filosofía de diseño.
console.log('\n=========== Clases y POO. ==========='); //* Muestra en consola el título de la sección dedicada a Clases y Programación Orientada a Objetos.

// ~Declaracion de clases y su contenido.
// ~Recordemos que TypeScript está basado en JavaScript, por lo que la forma de declarar y crear clases es prácticamente igual en ambos lenguajes. Se utiliza la palabra reservada `class`, seguida del nombre de la clase (por convención iniciando con mayúscula), y finalmente un bloque de llaves `{}` donde se define su contenido. Sin embargo, a diferencia de JavaScript, en TypeScript debemos declarar explícitamente los tipos de datos que vamos a utilizar, especialmente dentro del constructor. Esto implica que debemos tipar los parámetros que recibe el constructor y también debemos tipar los atributos de instancia. Estos atributos, que en JavaScript conocemos como `this.nombreAtributo`, en TypeScript deben declararse previamente dentro del cuerpo de la clase utilizando la estructura `nombreAtributo: tipoDeDato;`. Es importante recordar que estos atributos no son variables tradicionales, por lo que no se utiliza `let`, `const` o `var`. El valor real se les asigna dentro del constructor. Si no se declara alguno de estos tipados, TypeScript nos arrojará un error, ya que exige consistencia estructural.
class PeliculaClase1 { //* Declaración de la clase `PeliculaClase1`.
    nombre: string; //* Declaración del atributo de instancia `nombre` tipado como string.
    calificacion: number; //* Declaración del atributo de instancia `calificacion` tipado como number.

    constructor(nombre: string, calificacion: number){ //* Constructor que recibe parámetros tipados.
        this.nombre = nombre; //* Asigna el valor recibido al atributo de instancia `nombre`.
        this.calificacion = calificacion; //* Asigna el valor recibido al atributo de instancia `calificacion`.
    } //* Cierre del constructor.
} //* Cierre de la clase `PeliculaClase1`.

// ~Declaracion de atributos de instancias sin inicializar.
// ~Si únicamente declaramos los atributos de instancia pero no les asignamos un valor dentro del constructor mediante `this.atributo = valor;`, TypeScript nos arrojará un error. Esto ocurre porque es una regla propia del lenguaje que todos los atributos deben estar correctamente inicializados. Para solucionar esto, podemos asignarles un valor por defecto directamente en su declaración, o bien utilizar el símbolo de interrogación `?`, el cual indica que dicho atributo puede ser `undefined`. Es importante recordar que también podríamos declarar el tipo como una unión utilizando `| undefined`, lo cual conceptualmente es similar al uso del `?`. Otra forma correcta de inicializar es asignar el valor dentro del constructor utilizando el parámetro recibido.
class PeliculaClase2 { //* Declaración de la clase `PeliculaClase2`.
    nombre?: string; //* Atributo opcional que puede ser string o undefined.
    calificacion: number = 7; //* Atributo inicializado directamente con valor por defecto.
    genero: string; //* Atributo obligatorio que deberá inicializarse en el constructor.

    constructor(generoRecibido: string){ //* Constructor que recibe el género como parámetro tipado.
        this.genero = generoRecibido; //* Inicializa el atributo `genero` con el valor recibido.
    } //* Cierre del constructor.
} //* Cierre de la clase `PeliculaClase2`.

// ~Uso de This en metodos y mas.
// ~Si hemos trabajado con métodos en JavaScript, sabemos que existe un concepto extremadamente importante dentro de la Programación Orientada a Objetos: el uso de `this`. Para comprender correctamente `this`, debemos entender primero los atributos de instancia. Cada vez que trabajamos con atributos definidos en una clase, debemos acceder a ellos utilizando `this.nombreAtributo`. Esto le indica a TypeScript que estamos haciendo referencia al atributo perteneciente a esa instancia específica. Es posible que dentro de un método declaremos una variable local con el mismo nombre que un atributo de instancia; en ese caso, la diferencia entre usar `this.nombre` o simplemente `nombre` será crucial. `this.nombre` hará referencia al atributo de la instancia, mientras que `nombre` sin `this` hará referencia a la variable local. Aunque en algunos casos podría funcionar omitir `this` si no existe conflicto de nombres, es una excelente práctica utilizarlo siempre para mejorar la claridad, evitar ambigüedades y hacer el código más legible y profesional.
console.log('----- Uso de This en metodos y mas. -----'); //* Muestra en consola el inicio de la subsección sobre el uso de `this`.

class PeliculaClase3 { //* Declaración de la clase `PeliculaClase3`.
    nombre?: string; //* Atributo opcional de instancia.

    constructor(nombreRecibido: string){ //* Constructor que recibe un nombre tipado.
        this.nombre = nombreRecibido; //* Asigna el valor recibido al atributo de instancia `nombre`.
    } //* Cierre del constructor.

    asignarNombre(){ //* Método que demuestra la diferencia entre variable local y atributo de instancia.
        let nombre: string = 'Nemo'; //* Declaración de una variable local llamada `nombre`.
        console.log('Nombre almacenado en variable: ' + nombre) //* Muestra el valor de la variable local.
        console.log('Nombre almacenado en atributo de la instancia: ' + this.nombre); //* Muestra el valor del atributo de instancia usando `this`.
    } //* Cierre del método `asignarNombre`.
} //* Cierre de la clase `PeliculaClase3`.

let pelicula1 = new PeliculaClase3('Peter Pan'); //* Se crea una instancia de la clase pasando el nombre al constructor.
pelicula1.asignarNombre(); //* Se ejecuta el método para observar el comportamiento de `this`.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
