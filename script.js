const str = document.getElementById("str");
const btn = document.getElementById("btn");
const display = document.getElementById("display");

str.addEventListener("keyup",()=>{
    if(str.value){
        btn.classList.add("active");
    }
    else
    btn.classList.remove("active");
})

btn.addEventListener("click",()=>{
    let getstr = str.value
    let count = 0 ;
    for(i=0;i<getstr.length;i++){
        let l = getstr.charAt(i);
        if(l=="a"||l=="e"||l=="i"||l=="o"||l=="u"
          ||l=="A"||l=="E"||l=="I"||l=="O"||l=="U")
          {
            count++;
          }
    }
    display.style.display = "block";
    display.innerHTML = `<span>'${count}' </span>vowels are placed.!` ;
})