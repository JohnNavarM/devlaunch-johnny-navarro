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

interface triangle {
    a: number  
    b: number 
    c: number 
}


let t1: triangle = { 
    a: 7, 
    b: 10, 
    c: 5 
};

let t2: triangle = { 
    a: 2, 
    b: 3, 
    c: 6 
};


function isValidTriangle ({ a, b, c }: triangle): boolean { 
    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isValidTriangle(t1)); // true
