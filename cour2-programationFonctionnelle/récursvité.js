function facturielle(n){
    if(n===0){
        return 1
    }

    return n * facturielle(n-1)
}
console.log(facturielle(5));