/*
utility functions
*/

/* currencyConversion to convert USD to INR
params:
    amount : value
    type: INR/USD( if true USD)
*/
const currencyConversion=(amount,type)=>{
if(!type){
    return  `\u20B9${(parseFloat(amount) / 0.015).toFixed(4)}`
}else{
    return `$${(amount).toFixed(4)}`
}
}
export default currencyConversion;
