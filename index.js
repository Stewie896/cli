
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


console.log("Re configuring again hello");

console.log("Samosa is delecious");
