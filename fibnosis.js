function fibSeries(){
  
  document.write('fibonoses series<br/>')
  var a,b,result;
  a=0;
  b=1;
  result=b;
  for(i=1;i<5;i++){
    document.write(result)
    result =a+b;
    a=b;
    b=result;
  
  }
}
document.getElementById('root').innerHTML=fibSeries();