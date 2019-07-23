function sumFibs(num) {
  
    var fibAr = [1,1];
  
    for(var i = 1; i <= num; i++){
      var c = fibAr[i];
      var p = fibAr[i-1];
      var n = c+p;
      fibAr.push(n);
    }
    console.log(fibAr)
    var n = true;
    var res = 0;
    for(var j = 0 ; n; j++){
      n=false;
      if(fibAr[j] <=num){
        n = true;
        if(fibAr[j] % 2 !== 0){
          res +=fibAr[j];
        }
      }
    }
    return res;
  }
  
  sumFibs(4);