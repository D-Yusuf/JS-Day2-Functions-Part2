function isOdd(n){
    if(n%2){
        return true
    }else{
        return false
    }
}
// isOdd(7)

function oddsSmallerThan(n){
    let inputtedNum = n
    let odds = 0
    while(n > 0){
        isOdd(n-1) && odds++
        n--

    }
    console.log(`Number of odds less than ${inputtedNum} is: ${odds}`)
}
oddsSmallerThan(3)

function squareOrDouble(n){
    if(n%2){
        return n*n
    }else{
        return n+n
    }
}
console.log(squareOrDouble(9))