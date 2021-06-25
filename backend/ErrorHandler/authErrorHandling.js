'use strict';

//  Get unique error field name
const uniqueMessage = error => {
  let output;
  try {
    var fieldName = '';
    if (error.keyValue.email) {
      fieldName = error.keyValue.email;
    } else if (error.keyValue.contactNumber) {
      fieldName = error.keyValue.contactNumber;
    }

    output = 'An account with this ' + fieldName + ' already exists';
  } catch (ex) {
    output = 'User already exists 1';
  }

  return output;
};

// Get the erroror message from error object
exports.errorHandler = error => {
  let message = '';

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (let errorName in error.errorors) {
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }
  return message;
};
