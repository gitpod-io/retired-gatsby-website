export const isEurope = () => {
    const offset = new Date().getTimezoneOffset();
    return  offset <= 0 && offset >= -180;
}
