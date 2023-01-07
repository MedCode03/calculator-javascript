let btn = document.querySelectorAll(".btn");
let result = document.getElementById("result");
let ac = document.getElementById("ac");
let equal = document.getElementById("equal");
let x = btn.value;
//get buttons values
function getBtn() {
    

btn.forEach((el)=>{
    el.addEventListener("click", (e)=>{ 
        if(result.innerHTML.length<8) {
            
            
            result.innerHTML += el.value;

      
       
    }else {
      result.innerHTML = 0;

     }
    })
})
}
getBtn()

                        //clear all values

ac.onclick = function() {
    result.innerHTML = '';
}
equal.onclick = function() {
    result.innerHTML = eval(result.innerHTML );
}

