const now=new Date();
const currentYear=now.getFullYear();
var numbers = /^[0-9]+$/;
export const validate = (values) => {
  const errors = {};
  if (!values.day) {
    errors.day = "this field is required!";
  } else if (values.day < 1 || values.day > 30) {
    errors.day = "must be a valid day";
  }
  else if(!values.day.match(numbers)){
    errors.day="use numbers only"
  }
  if (!values.month) {
    errors.month = "this field is required!";
  } else if (values.month < 1 || values.month > 12) {
    errors.month = "must be a valid month";
  }
    else if(!values.month.match(numbers)){
    errors.month="use numbers only"
  }
  if (!values.year) {
    errors.year = "this field is required!";
  } else if ( values.year > currentYear) {
    errors.year = "must be in the past";
  }
  else if(values.year < 1900){
    errors.year="must be in the future";
  }
    else if(!values.year.match(numbers)){
    errors.year="use numbers only"
  }
  return errors;
};
