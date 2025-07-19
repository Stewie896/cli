
var hello = () => () => () => (() => {
    return {
        j: (() => {
            () => {
                () => {
                    () => {
                        () => {
                           return console.log("Hey");
                        }
                    }
                }
            }
        })
    }
});

val = hello()()()().j();
console.log(val);