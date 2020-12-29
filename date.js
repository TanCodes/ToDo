
// date
var sp1 = document.getElementById("sp1");
var nowDate = new Date();
var final_date = nowDate.getDate() 
var date = nowDate.getDay()+'/'+ nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
final_day = days[d.getDay()];


var months = ["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","December"];
var m = new Date();
final_month =months[m.getMonth()];

sp1.innerHTML = `${final_day} ,&nbsp; ${final_month}  ${final_date}`;


// function savetodo(localtodo){
//     console.log("save");
//     let todos;
//     if(localStorage.getItem("data") === null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem("data"));
//     }
//     todos.push(localtodo);
//     localStorage.setItem("data",JSON.stringify(todos));

// }

// function getlocally(){
//     for (let i = 0; i < localStorage.length; i++) {
//         let storedValue = localStorage.key(i);
//         console.log(`Item at ${i}: ${storedValue}`);
//     }
// }