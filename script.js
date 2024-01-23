function consolelog1(){
    let inputElement = document.getElementById("wci")
    let inputvalue = inputElement.value;
    if(inputvalue> 100 || inputvalue < 0){
        console.log("You can only type number between 0-100....")
    }else{

    }
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
       
        if(radio.checked) AlgorithmOfBetting(radio.id)
    })

}

function AlgorithmOfBetting(id){
    
        let winChance = document.getElementById("wci").value / 100
        let startingValuep1 = parseInt(document.getElementById("starting1").value)
        let startingValuep2 = parseInt(document.getElementById("starting2").value)
       let drawChance = document.getElementById("drawch").value / 100
       let fibonacci1 = 1;
       let fibonacci2 = 1;
       let mart1 = 1;
       let mart2 = 1;

        let count = 0;
      while(startingValuep1>0 && startingValuep2>0){
        userOutcome = Math.random();
        if(id == "1for1"){
          if(userOutcome < winChance){
            startingValuep1++;
            startingValuep2--;
            console.log("You win "+ startingValuep1)
            
          } else if (userOutcome < winChance + drawChance && userOutcome > winChance){
            console.log("It's a draw" + startingValuep1)
          } else {
            startingValuep1--;
            startingValuep2++;
            console.log("You lose " + startingValuep1)
          }
          count++;
        } else if (id == "fibonacci"){
          if(userOutcome < winChance){
            startingValuep1 = startingValuep1 + fibonacci2;
            if(fibonacci1 < startingValuep2){
            startingValuep2 = startingValuep2 - fibonacci1;
            } else {
              startingValuep2 = 0
            }
            fibonacci1 = fibonacci1 + fibonacci2
            fibonacci2 = fibonacci1 + fibonacci2
            console.log("You win "+ startingValuep1)
            
          } else if (userOutcome < winChance + drawChance && userOutcome > winChance){
            console.log("It's a draw" + startingValuep1)
            fibonacci1 = fibonacci1 + fibonacci2
            fibonacci2 = fibonacci1 + fibonacci2
          } else {
            if(startingValuep1 > fibonacci2){
            startingValuep1 = startingValuep1 - fibonacci2;
            } else {
              startingValuep1 = 0;
            }
            startingValuep2 = startingValuep2 + fibonacci1;
            fibonacci1 = fibonacci1 + fibonacci2
            fibonacci2 = fibonacci1 + fibonacci2
            console.log("You lose " + startingValuep1)
          }
          count++
        } else if(id == "allin"){
          
            if(userOutcome < winChance){
              startingValuep1 = startingValuep1 + startingValuep2;
              startingValuep2 = 0;
              console.log("You win "+ startingValuep1)
              
            } else if (userOutcome < winChance + drawChance && userOutcome > winChance){
              console.log("It's a draw" + startingValuep1)
            } else {
              startingValuep2 = startingValuep2 + startingValuep1;
              startingValuep1 = 0;
              console.log("You lose " + startingValuep1)
            }
            count++;
        
      } else {


        if(userOutcome < winChance){
          startingValuep1 = startingValuep1 + mart2;
          startingValuep2 = startingValuep2 - mart2;
          mart2*=2
          mart1 = 1
          
          console.log("You win "+ startingValuep1)
          
        } else if (userOutcome < winChance + drawChance && userOutcome > winChance){
          console.log("It's a draw" + startingValuep1)
        } else {
          startingValuep2 = startingValuep2 + mart1;
          startingValuep1 = startingValuep1 - mart1;
          mart1*=2
          mart2= 1 
          console.log("You lose " + startingValuep1)
        }
        count++;
    
      }

}
    if(startingValuep1 > 0){
      alert("You Won, Games played: "+ count)
    } else {
      alert("You Lost, Games played: "+ count)

    }
}
