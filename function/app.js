// function orange(){
//     console.log('Hello World');
// }

// orange();


function callbackfunction(func){
    func();
}

let red= function(){
    console.log('Hey there!')
}

callbackfunction(red);