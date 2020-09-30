function getLetter(s) {
    s = s.toLowerCase();
    let letter  = s;
    let arr = ['a', 'e', 'i', 'o', 'u' ];
    let arr1 = ['b', 'c', 'd', 'f', 'g' ];
    let arr2 = ['h', 'j', 'k', 'l', 'm' ];
    let arr3 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' ];

    if(arr.includes(s[0])){
       return letter = 'A'
    }else if(arr1.includes(s[0])){
        return letter = 'B';
    }else if(arr2.includes(s[0])){
       return letter='C';
    }else if(arr3.includes(s[0])){
        return letter = 'D';
    }
    
    return letter;
}

