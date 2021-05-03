




var today  = new Date();
var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var months = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre', 'Diciembre'];

let weekDay = days[today.getDay()];//Dia de la semana
let monthDay = today.getDate();//Dia del mes
let mes  = 5;
/*
let montn = today.getMonth(); //mes

let monthName = months[montn];*/
let year = today.getFullYear();//año

//Obtiene el elemento h1 con Id (fecha)
var fecha = document.getElementById('fecha');


//agrega codigo javascript a
fecha.innerHTML = `${monthDay}, ${mes}, ${year}`;



 var inputTarea = document.getElementById('inputTarea');
 var btnAdd = document.getElementById('btnAdd');

 const lista = document.querySelector('.lista');


 lista.addEventListener('click', function(){btnDone(event) });
 btnAdd.addEventListener('click',function(){ addElement('li',inputTarea.value)});


 function addElement(lbl, text){

    if(text === ''){
        return;
    }
     const htmlCode =`<p class="work">${text}</p>`+
                     '<i job="done" class="fa fa-check-circle fa-2x done"></i>'+
                     '<i job= "remove" class="fa fa-trash fa-2x remove" ></i>' ;
     const element = document.createElement(lbl);
     element.innerHTML = htmlCode;



     lista.appendChild(element);
     inputTarea.value = '';   
 }
function btnDone(event){

    let elem = event.target;
    elementJob = elem.attributes.job.value;
   if( elementJob === 'done'){
       const p = elem.parentNode.firstElementChild;
       p.classList.toggle('workDone');
       alert ("tarea completada");
    
 

   }
   

  
   else if(elementJob === 'remove'){ 
       alert ( "quieres eleminar esta tarea");

    const li = elem.parentNode;
   

    lista.removeChild(li);

   }
 /*  let paragraph = event.target.parentNode.firstElementChild;
paragraph.classList.toggle('workDone'); */

}

 


