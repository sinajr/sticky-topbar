let $=document;
let navco=$.getElementsByTagName("nav")[0];
let bodyB=$.getElementsByTagName('body')[0];
let stickbut=$.querySelector('i');
$.addEventListener('scroll',(event)=>{
    if($.documentElement.scrollTop>0){
        console.log($.documentElement.scrollTop)
        navco.style.backgroundColor="#ff0000"

    }else{
        navco.style.backgroundColor="#ffff00"

    }
})

