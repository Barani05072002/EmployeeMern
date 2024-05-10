function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}
function numericCheck(num){
    if(num.length<10)
        return false
    
    const numRegex = /^[0-9]{10}$/;
    return numRegex.text(num);
}

module.exports = {validateEmail,numericCheck}
