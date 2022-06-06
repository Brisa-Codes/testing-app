const validateForm = () => {
    const sirname = document.getElementById('sirname')
    const sirnameError = document.getElementById('sirnameError')
    const givenname = document.getElementById('givenname')
    const givennameError = document.getElementById('givennameError')
    const nin = document.getElementById('nin')
    const ninError = document.getElementById('ninError')
    const dob = document.getElementById('dob')
    const dobError = document.getElementById('dobError')
    const occupation = document.getElementById('occupation')
    const occupationError = document.getElementById('occupationError')
    const work = document.getElementById('work')
    const workError = document.getElementById('workError')
    const gender = document.getElementById('gender')
    const genderError = document.getElementById('genderError')
    const loan = document.getElementById('loan')
    const loanError = document.getElementById('loanError')
    const security = document.getElementById('security')
    const securityError = document.getElementById('securityError')
    const fallback = document.getElementById('fallback')
    const fallbackError = document.getElementById('fallbackError')

    if(sirname.value == ""){
        sirnameError.innerHTML = 'Invalid Field'
        sirname.style.border = '1px solid red'
        sirnameError.style = 'color: red'
        return false;
    } else {
        const sirnameValidate = /^[A-Za-z]{2,255}$/; 
        if(sirnameValidate.test(sirname.value) == false){
        sirnameError.innerHTML = 'Sirname cannot contain numbers'
        sirname.style.border = '1px solid red'
        sirnameError.style = 'color: red'
        return false;
    }
    sirnameError.innerHTML = ''
    sirname.style.border = '1px solid green'
}
    if(givenname.value == ""){
        givennameError.innerHTML = 'Invalid Field'
        givenname.style.border = '1px solid red'
        givennameError.style = 'color: red'
        return false;
    } else {
        const givennameValidate = /^[A-Za-z]{2,255}$/; 
        if(givennameValidate.test(givenname.value) == false){
        givennameError.innerHTML = 'Given name cannot contain numbers'
        givenname.style.border = '1px solid red'
        givennameError.style = 'color: red'
        return false;
    }
    givennameError.innerHTML = ''
    givenname.style.border = '1px solid green'
    }
    
    if(nin.value == ""){
        ninError.innerHTML = 'Invalid Field'
        nin.style.border = '1px solid red'
        ninError.style = 'color: red'
        return false
    } else {
        ninError.innerHTML = ''
        nin.style.border = '1px solid green'
    }

    if(dob.value == ""){
        dobError.innerHTML = 'Invalid Field'
        dobError.style = 'color: red'
        return false
    } else {
        dobError.innerHTML = ''
        dob.style.border = '1px solid green'
    }
    if(occupation.value == ""){
        occupationError.innerHTML = 'Invalid Field'
        occupation.style.border = '1px solid red'
        occupationError.style = 'color: red'
        return false
    } else {
        occupationError.innerHTML = ''
        occupation.style.border = '1px solid green'
    }

    if(occupation.value == ""){
        occupation.innerHTML = 'Invalid Field'
        occupation.style.border = '1px solid red'
        occupationError.style = 'color: red'
        return false;
    } else {
        const occupationValidate = /^[A-Za-z]{5,255}$/; 
        if(occupationValidate.test(occupation.value) == false){
        occupationError.innerHTML = 'characters cannot be less than 5'
        occupation.style.border = '1px solid red'
        occupationError.style = 'color: red'
        return false;
    }
    occupationError.innerHTML = ''
    occupation.style.border = '1px solid green'
    }

    if(work.value == ""){
        work.innerHTML = 'Invalid Field'
        work.style.border = '1px solid red'
        workError.style = 'color: red'
        return false;
    } else {
        const workValidate = /^[A-Za-z]{5,255}$/; 
        if(workValidate.test(work.value) == false){
        workError.innerHTML = 'characters cannot be less than 5'
        work.style.border = '1px solid red'
        workError.style = 'color: red'
        return false;
    }
    workError.innerHTML = ''
    work.style.border = '1px solid green'
    }

    if(gender.value == 'Default') {
        genderError.innerHTML = 'Invalid Field'
        gender.style.border  =  '1px solid red'
        genderError.style = 'color: red'
        return false;
    } else {
        genderError.innerHTML = ''
        gender.style.border = '1px solid green'
    }
    
    if(loan.value == ""){
        loanError.innerHTML = 'Invalid Field'
        loan.style.border = '1px solid red'
        loanError.style = 'color: red'
        return false;
    } else {
        const loanValidate = /^[1-9]|[0-9]{500000,50000000}$/; 
        if(loanValidate.test(loan.value) == false){
        loanError.innerHTML = 'loan cannot be less than 500000'
        loan.style.border = '1px solid red'
        loanError.style = 'color: red'
        return false;
    }
    loanError.innerHTML = ''
    loan.style.border = '1px solid green'
}

    if(security.value == ""){
        security.innerHTML = 'Invalid Field'
        security.style.border = '1px solid red'
        securityError.style = 'color: red'
        return false;
    } else {
        const securityValidate = /^[A-Za-z]{5,255}$/; 
        if(securityValidate.test(security.value) == false){
        securityError.innerHTML = 'characters cannot be less than 5'
        security.style.border = '1px solid red'
        securityError.style = 'color: red'
        return false;
    }
    securityError.innerHTML = ''
    security.style.border = '1px solid green'
    }

    if(fallback.value == ""){
        fallbackError.innerHTML = 'Invalid Field'
        fallback.style.border = '1px solid red'
        fallbackError.style = 'color: red'
        return false;
    } else {
        const fallbackValidate = /^[A-Za-z]{5,255}$/; 
        if(fallbackValidate.test(fallback.value) == false){
        fallbackError.innerHTML = 'fallback cannot cannot be less than 5 characters'
        fallback.style.border = '1px solid red'
        fallbackError.style = 'color: red'
        return false;
    }
    fallbackError.innerHTML = ''
    fallback.style.border = '1px solid green'
    }
}