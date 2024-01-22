function consolelog1(){
    let inputElement = document.getElementById("wci")
    let inputvalue = inputElement.value;
    if(inputvalue> 100 || inputvalue < 0){
        alert("You can only type number between 0-100....")
    }else{
    alert(inputvalue)
}
}