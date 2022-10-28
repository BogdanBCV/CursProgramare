const numar = (x)  => {
    
    if (x % 2 === 0) {
        console.log("numar Par")
    }
    else{
        console.log("numar Impar")
    }
}

numar(32);

const total = (arr) =>{
    let sum = 0;
    arr.forEach(i =>{
        sum += i;
    })
    console.log(sum);
    
    
}

total([1, 4, 0, 9, 2,27,28,30,1,2,3,300]);



