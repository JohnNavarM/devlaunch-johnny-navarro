/* Un triángulo, una forma geométrica fundamental, es un polígono de tres lados y tres vértices.
De acuerdo con el teorema de desigualdad de triángulos, en cualquier triángulo, la suma de las
 longitudes de dos lados siempre es mayor que la longitud del tercer lado.

 Tu tarea es crear un objeto que represente un triángulo. 
 Este objeto debe tener 3 propiedades, cada una correspondiente a uno de sus lados. 
 Además, se requiere una función para validadr si los lados dados cumplen con el teorema 
de desigualdad de triángulos.

Por ejemplo, considera un triángulo con las longitudes de sus lados a = 7, b = 10 y c = 5.

Para determinar si estos lados forman un triángulo válido. Evaluamos si la suma de
cada par de lados es mayor que la longitud del lado restante.

En este caso, verificamos si (a + c) > b, (a + b) > c y (b + c) > a.

Si cumplen con estas condiciones, el triángulo es válido.

*/


let triangle = { 
    a: 4, 
    b: 10, 
    c: 1 
};


function isValidTriangle(triangle) {
    const { a, b, c } = triangle;
    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isValidTriangle(triangle)); // true