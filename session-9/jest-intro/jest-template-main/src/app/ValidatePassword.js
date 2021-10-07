export const validatePassword = (password) => {
    if (password.length>=8 && /[a-z]/.test(password)) {
        return true;
    }
    
    return false;
};