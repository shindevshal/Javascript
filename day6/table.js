let userInput = Number(prompt("Enter A Number "));
let tables = null;
let pTables = document.getElementById('ptable');
console.log(userInput !=="");

if(userInput !=null && userInput !=""){
    
    for(i=1;i<=12;i++){
        tables = `${userInput} x ${i} = ${userInput*i}<br>`;
        
        pTables.innerHTML += tables;
    }
}