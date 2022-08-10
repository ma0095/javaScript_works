class p1{
    m1(){
        console.log("inside p1");
    }
}

class p2 extends p1{
    m2(){
        console.log("inside m2 ");
    }
}

var pt=new p2()
pt.m2()
pt.m1()