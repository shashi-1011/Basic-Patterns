function rightangle(){
document.write("rightangle triangle <br/> <br/>")
    var rows=5;
    for(var i=1; i<=rows;i++){
        //rows
        for(var s=1; s<=(rows-1);s++){
            //prints spaces
            document.write('&nbsp;')
        }
        for(j=1;j<=i;j++){
            //prints spaces
            document.write("*");
        }
        document.write('<br/>');
    }
}
function eqruilateralTriangle(){
    document.write("equlateral triangle <br/> <br/>")
    for(var j=0; j<=5;j++){
        for(var k=5;k>=j;k--){
            document.write('&nbsp;')
        }
        for(var i=1; i<(2*j-1)+1; i++){
            document.write("*")
        }
        document.write('<br/>')
    }
}

function printingsquare(){
    document.write('squares<br/><br/>');
    for(var i=0;i<=5;i++){
        for(var j=1; j<=5;j++){
            document.write("*")
        }
        document.write('<br/>')
    }
}
function printingsquare2(){
document.write('printing hallo sqare<br/><br/>');
//columns
for(var i=1; i<=5; i++){
    //rows
    for(var j=1; j<=5; j++){
        if(i==1 ||  i==5 ||  j==1 || j==5){
            document.write("*")
        }else{
            document.write("&nbsp;")
        }   
    }
    document.write('<br/>')
}
}

function invertedtriangle(){
    document.write("inverted triangle<br/>");
    //rows
    for(i=0;i<=5;i++){
        for(j=0;j<=i;j++){
            document.write('&nbsp;')
        }
        for(a=5; a>=(2*i-1);a--){
            document.write("*");
        }
        document.write('<br/>')
    }
}
function testing(){
    document.write("testing function<br/>");
    //rows
    for(var i=1; i<=5; i++){
      
        for(var j=5; j>=i; j--){
            document.write("&nbsp;")
        }
        for(var a=1; a<(2*i-1)+1;a++){
            document.write("*");
        }
        document.write("<br/>");
    }
}
function testinginverted(){

    document.write("testingInvertedTriangle<br/>")
    for( var i=0; i<=5; i++){
        for(var j=0; j<=i;j++){
            document.write("&nbsp;")
        }for( var a=5; a>=(2*i-1); a--){
            document.write("*");        
        }
        document.write("<br/>")
    }
}
function rohumbus(){
    //prints first part of rohumbs
    //rows incrementing
    for(var i=0; i<=5; i++){
        for(var j=5; j>=i; j--){
            //decrementing the rows and prints the spaces
            document.write("&nbsp;")
        }
        //for printing stars
        for(var a=0; a<=(2*i-1)+1; a++){
            document.write("*")
        }
        document.write("<br/>");
    }
    //prints second part of it
    // for(var z=0; z<=5; z++){
    //     //prints spaces
    //     for(var s=0; s<=z; s++ ){
    //         document.write("&nbsp;");
    //     }
    //     //prints stars
    //     for(var b=5; b>=(2*z-1);b--){
    //         document.write("*");
    //     }
    //     document.write("<br/>");
    // }
    for( var i=0; i<=5; i++){
        for(var j=0; j<=i;j++){
            document.write("&nbsp;")
        }for( var a=9; a>=(2*i-1); a--){
            document.write("*");        
        }
        document.write("<br/>")
    }
}

document.getElementById('root').innerHTML=rightangle();
document.getElementById('root').innerHTML=eqruilateralTriangle();
document.getElementById('root').innerHTML=printingsquare();
document.getElementById('root').innerHTML=printingsquare2();
document.getElementById('root').innerHTML=invertedtriangle();
document.getElementById('root').innerHTML=testing();
document.getElementById('root').innerHTML=testinginverted();
document.getElementById('root').innerHTML=rohumbus();


