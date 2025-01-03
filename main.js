function one(calback){
    setTimeout(()=>{
        console.log("one");
        calback()
    },2000)
}
function two(calback){
    setTimeout(()=>{
        console.log("two");
        calback()
    },3000)
}
function three(calback){
    setTimeout(()=>{
        console.log("three");
        calback()
    },200)
}
function four(calback){
    setTimeout(()=>{
        console.log("four");
        calback()
    },2500)
}
function five(calback){
    setTimeout(()=>{
        console.log("five");
        calback()
    },1000)
}
function six(calback){
    setTimeout(()=>{
        console.log("six");
        calback()
    },200)
}
function seven(calback){
    setTimeout(()=>{
        console.log("seven");
        calback()
    },1200)
}
function eight(calback){
    setTimeout(()=>{
        console.log("eight");
        calback()
    },300)
}
function nine(calback){
    setTimeout(()=>{
        console.log("nine");
        calback()
    },600)
}
function ten(){
    setTimeout(()=>{
        console.log("ten");
    
    },2000)
}



five(()=>{
    seven(()=>{
        one(()=>{
            nine(()=>{
                two(()=>{
                    eight(()=>{
                        three(()=>{
                            six(()=>{
                                four(()=>{
                                    ten()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})