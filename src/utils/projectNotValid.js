const projectNotValid = (title, description, date) => {
    if (title === '' || description === '' || date === '')
        return true;
    return false;
}

export default projectNotValid;