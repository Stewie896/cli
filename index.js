
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

var val = hello()()()().j();console.log(val);
var bye = sayGooBye().ByeBye();
console.log(val)
console.log(bye)