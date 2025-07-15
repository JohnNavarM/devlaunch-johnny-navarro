/* Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

horas : 2

minutos 30*/


                
            let horas = 2;
            let min = 30;
            let segundos;
            //las horas a segundos
            segundos = 2*60*60;
            //ahora sumo los minutos en segundos
            segundos += 30*60;
            console.log("segundos "+segundos);