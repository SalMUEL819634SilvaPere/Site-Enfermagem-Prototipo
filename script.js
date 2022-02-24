let form = document.querySelector('#form'); // pega pelo id #

form.addEventListener('submit' , function(e){

    e.preventDefault(); // metodo para evitar carregamento

    //setResultado ('Olá mundo') // argumento da função setResultado

  const pg1 = e.target.querySelector('#pg1') // ou form porque eu sei que o evento esta vindo do form
  const pg2 = e.target.querySelector('#pg2')
  //console.log(inputPeso); <--- vai mostrar o imput

  const pg3 = e.target.querySelector('#pg3')
  const pg4 = e.target.querySelector('#pg4')
  const pg5 = e.target.querySelector('#pg5')

   if (!pg1){ // se o peso for NaN,

    setResultado ('Peso inválido' , false);

      return; // protego o return com if

        
    }
        function converter(){
            const getPg1 = pg.value;
            if (getPg1 == "sim"){
                console.log(getPg1);
            }
        }
    /* if (!pg2){ // se o peso for NaN,

      setResultado ('Altura inválida' , false);
  
        return;  // protego o return com if
        
    }

    if (!pg3){ // se o peso for NaN,

      setResultado ('Peso inválido' , false);
    
        return; // protego o return com if
          
    }

     if (!pg4){ // se o peso for NaN,

      setResultado ('Peso inválido' , false);
        
        return; // protego o return com if
              
    }

     if (!pg5){ // se o peso for NaN,

      setResultado ('Peso inválido' , false);
            
        return; // protego o return com if
                  
    } */

/*       const = getImc(peso, altura);

      const nivelImc = getNivelImc(imc);

      const msg = `Seu IMC é ${imc}  (${nivelImc})`

      setResultado(msg, true) */
    
   
});