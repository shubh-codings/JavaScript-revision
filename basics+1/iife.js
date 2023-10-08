//Immedietely Inveked Function Expressions (IIFE)

(function connect (){
    //named iife
    console.log("DB Connected")
})();// semi colon is important to end execution

((name)=>{console.log("DataBase Connected" , name)})("Shubham");