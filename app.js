const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let counter =0;
btns.forEach(function(btn){
btn.addEventListener("click",function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        counter--;
    }else if(styles.contains("increase")){
        counter++;
    }else{
        counter=0;
    }
    if(counter>0){
        value.style.color = "skyblue";
    }
    if(counter<0){
        value.style.color = "pink";
    }
    if(counter==0){
        value.style.color = "#222";
    }
    value.textContent = counter;
})
})