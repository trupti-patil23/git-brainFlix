/**
 * Added to covert date to human readable format eg "8/11/2023"
 * @param {*} date 
 * @returns 
 */
function formatLocaleDate(date) {
    const inputDate = new Date(date);
    return inputDate.toLocaleDateString();
}

export default formatLocaleDate;