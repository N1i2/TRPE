function strip(x:string|number){
    if(typeof(x) === "number"){
        return x.toFixed(3);
    }
    return x.trim();
}

class MyResponse{
    header='response head'
    result = 'response result'
}

class MyError{
    header = 'error head'
    message = 'error message'
}

function handle(res:MyResponse|MyError){
    if(res instanceof MyResponse){
        return {
            info:res.header + res.result
        }
    }
    return{
        info:res.header+res.message
    }
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

type Allert = `success`|`danger`|`warning`
function setAllerType(type:Allert){
    //\\\\
}
setAllerType(`success`);
//setAllerType(`error`);
