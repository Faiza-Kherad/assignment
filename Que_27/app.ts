let ordinalNumbers = [1,2,3,4,5,6,7,8,9]


for (const ordinalNumber of ordinalNumbers) {
    if(ordinalNumber === 1){
        console.log(ordinalNumber + "st\n")
    }
   else if(ordinalNumber === 2){
        console.log(ordinalNumber + "nd\n")
    }
    else if(ordinalNumber === 3){
        console.log(ordinalNumber + "rd\n")
    }
    else{
        console.log(ordinalNumber + "th\n")
    }
}