function displayNumber(num){
    id_result.value +=num
}

function evaluateExpresion(){
    // let curval=id_result.value
    // let res=eval(curval)
    // id_result.value=res
    id_result.value=eval(id_result.value)
}

function backSpace(){
    id_result.value=id_result.value.slice(0,-1)
}
