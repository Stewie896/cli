
var hello = () => () => () => (() => {
    return {
        j: (() => {
            () => {
                () => {
                    () => {
                        () => {
                            console.log("Hey");
                        }
                    }
                }
            }
        })
    }
});


console.log("Bye iam de updating");


var sayGooBye = ()=>{
    return{
        ByeBye: ()=>{
            console.log("ByeBye")
        }
    }
}
console.log("Hello iam teh fethed change");
var val = hello()()()().j();console.log(val);
var bye = sayGooBye().ByeBye();
console.log(val)
console.log(bye)
