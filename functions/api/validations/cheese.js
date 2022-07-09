// Validator
const isEmpty = (string) => {
    if (string.trim() === "") return true;
    else return false;
  };
  
exports.validateCheeseData = (data) => {
    let errors = {};
    if (isEmpty(data.name)) errors.name = "Must not be empty";
    if (isEmpty(data.curd)) errors.curd = "Must not be empty";
    if (isEmpty(data.geo)) errors.geo = "Must not be empty";

    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false,
    };
};
