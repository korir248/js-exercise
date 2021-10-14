var myArray = [10,9,"+","D","C","+"]
var newArray = []

for(let i=0;i<myArray.length;i++){
    if(typeof(myArray[i]) === "number"){
        newArray.push(myArray[i])
        console.log(newArray)
    }else if(myArray[i] === "+"){
        newArray.push(newArray[newArray.length -1] + newArray[newArray.length-2])
        console.log(newArray);
    }else if(myArray[i] === "D"){
        newArray.push(newArray[1] * newArray[2])
        console.log(newArray)
    }else if(myArray[i] === "C"){
        newArray.pop()
        console.log(newArray)
    }else if(myArray[-1] === "+"){
        newArray.push((newArray.length-1) + (newArray.length-2))
    }else{
            
    }
    
}

var sum=0
      for(let i= 0;i<newArray.length;i++){
          sum += newArray[i]

          console.log(sum)
          
      }