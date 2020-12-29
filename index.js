const but = document.querySelector("#but");
var list_data = document.getElementById("list_data");

let Tlist = []; //creating empty array for storage

document.addEventListener('DOMContentLoaded',gettodo); //get data from localstorage as soon as DOM gets loaded
const todo =() =>{
    let inp_val = document.getElementById("inp").value;
    // CREATE PARAGRAPH 
    var para = document.createElement('div');
    var icon ='<i class="fas fa-trash-alt"></i>';

    if(inp_val != "")
    {
        para.classList.add('ans_style');
       
        para.innerHTML = inp_val + icon;
       
        list_data.appendChild(para);
    
        // save locally
        savetodo(inp_val);
        
        document.getElementById("inp").value = "";

        //click to get line through to items
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through"; 
        location.reload(true) 
    })

        //double click to delete the item
    para.addEventListener("dblclick",()=>{
        list_data.removeChild(para);
   })
 }
}

// mouse click
but.addEventListener("click",()=>{
        todo();
})

// enter button
addEventListener("keyup",(event)=>{
    if(event.keyCode === 13){
        event.preventDefault();
        todo();
    }
})

// saving data to localstorage

function savetodo(localtodo){
    console.log("save");
    let todos;
    if(localStorage.getItem("data") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("data"));
    }
    todos.push(localtodo);
    localStorage.setItem("data",JSON.stringify(todos));

}

// get data from  todo localstorage

function gettodo(){
   
    let todos;
    if(localStorage.getItem("data") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("data"));
    }
    todos.forEach(function(t1){

    var para = document.createElement('p');
    var icon ='<i class="fas fa-trash-alt"></i>';

    
        para.classList.add('ans_style');
        para.innerHTML = t1 + icon;
        list_data.appendChild(para);

        //click to get line through to items
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through"; 
    })

    //double click to delete items from localstorage
    para.addEventListener("dblclick",()=>{
        list_data.removeChild(para);
        removeitems(t1);
        location.reload(true);
   })

    })
}

// remove todo

function removeitems(t1){
    let todos;
    if(localStorage.getItem("data") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("data"));
    }
    const todoindex = t1
    const n = todos.splice(todos.indexOf(todoindex),1)
    localStorage.setItem("data",JSON.stringify(todos));
}

