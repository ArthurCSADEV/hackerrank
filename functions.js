function factorial(n){
    var result = 0;
    var arr = [];
    for (let i=n; i >= 1 ; i--){
        arr.push(i);
    }
    result = arr.reduce((a,b) => a*b);
    return result;
}

