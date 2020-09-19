const Toast = {
  responseHandler: (err, type) => {
    console.log(err, type);
  },
  ERROR: 'error',
  WARN: 'warn'
};
const ERRORS = {};
const WARNING = {};

export default err => {
  const errorValues = Object.values(ERRORS);
  const warningValues = Object.values(WARNING);
  if (errorValues.includes(err.message)) {
    Toast.responseHandler(err, Toast.ERROR);
  } else if (warningValues.includes(err.message)) {
    Toast.responseHandler(err, Toast.WARN);
  } else {
    Toast.responseHandler(err, false);
  }
};