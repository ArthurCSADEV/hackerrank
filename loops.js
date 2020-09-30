function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr1 =[];
    const arr2 =[];
    const arr3 =[];
    for(let i=0; i < s.length; i++){
        if(vowels.includes(s[i])){
            arr1.push(s[i]);
        }else{
            arr2.push(s[i]);
        }
    }
    arr3.push(arr1.join('\n'));
    arr3.push(arr2.join('\n'));
    console.log(arr3.join('\n'));
    
}

