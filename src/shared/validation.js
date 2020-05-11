export const checkValidity = (value, rules) => {
    let isValid = true;

    if(!rules) {
        return rules;
    }

    if(rules.required) {
        isValid = value.trim() !== '' & isValid;
    }
    
    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if(rules.isEmail) {
        const pattern = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.+[A-z]/;
        isValid = pattern.test(value) && isValid;
    }
    return isValid;
}