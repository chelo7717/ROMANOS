function convertirRomanos(num) {
  var cant = 0;
  var romano="";
  while(num>0){
    if(num == 100){
      romano += "C"
      num -= 100
    }else{
      if(num >= 90){
        romano += "XC"
        num -= 90
      }else{
        if(num >= 50){
          romano += "L"
          num -= 50
        }else{
          if(num >=40){
            romano += "XL"
            num -= 40
          }else{
            if(num >= 10){
              cant=parseInt(num/10);
              for(var i=0;i<cant;i++){
                romano += "X"
                num -= 10
              }
            }else{
              if(num == 9){
                romano += "IX"
                num -= 9
              }else{
                if(num >= 5){
                  romano += "V"
                  num -= 5
                }
                else{
                  if(num == 4){
                    romano += "IV"
                    num -= 4
                  }else{
                    for(var i = 0;i < num;i++){
                      romano += "I"
                    }
                    num = 0;
                  }
                } 
              }   
            }
          }
        }
      }
    }
  }

  return romano;
}

export default convertirRomanos;
