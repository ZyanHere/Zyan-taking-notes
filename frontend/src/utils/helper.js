export const getInitials = (name) => {
    if(!name) return "";

    const names = name.split(' ');
    const initials = names.map(name => name[0].toUpperCase()).join('');
    return initials;
}

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
