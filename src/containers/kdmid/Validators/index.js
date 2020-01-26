import React, { Component } from 'react'
import moment from 'moment'

const isValidDate = (value) => {
    const d = value
    if(!d || !d.isValid()) return false
    
    const terms = value.format('DD.MM.YYYY').split('.')
    
    const day = terms[0]
    const month = terms[1]
    const year = terms[2]
    
    if(d.year() == year && parseInt(year) >= 1901 && parseInt(year) <= 2079 && d.month() == (parseInt(month) - 1) && d.date() == parseInt(day))
        return true
    return false
}

const validateName = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }

    if(/^[a-zA-Zéèêëû](.*[a-zA-Zéèêëû\-' ])?$/.test(value) == false) {
      callback(`Use English and French letters only. Example: Aa, Bb, Cc, French accents such as é, è, ê, ë, û, hyphens, apostrophes, and spaces; cannot begin with a hyphen, apostrophe, or space.
      If there are other special letters or characters in your name, use the letter without the accent. For example, use "z" instead of "ź."`);
      return;
    }
    callback();
};

const validateAlphaNumericPunctuation = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }

    if(/^[A-Za-z0-9 #&*()-;':",./]+$/.test(value) == false) {
      callback(`Must only contain alphanumeric characters or punctuation marks.`);
      return;
    }
    callback();
};

const validateNumberSpace = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }

    if(/^[0-9 ]+$/.test(value)== false) {
        callback('Must contain only numbers and spaces');
        return;
    }
    callback();
};

const validateEmail = (rule, value, callback, field, required = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)== false) {
      callback(`Must contain one '@' and at least one '.' and use alphanumeric characters and have from 2 to 6 characters after the last period`);
      return;
    }
    callback();
};

////////////////////////////The above is for canada eTa////////////////////////////////////////////////////////////////////////////////

const validateCyrillic = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }

    let tripped = value.replace(/ {1,}/g," ");

    if( tripped != value ) {
        callback(field + ' is invalid because it contains two or more spaces.');
        return;  
    }

    if(value[0] == ' ' || value[value.length - 1] == ' ') {
        callback('Leading or trailing spaces found in your entry.');
        return;
    }
//A-Za-z #&*()-_+\[\]<>,.
    if(/^[A-Za-z0-9 #&*()+\[\]\-\_]+$/.test(value)== false) {
      callback('Only Latin or Cyrillic letters, digits and special characters are allowed');
      return;
    }
    callback();
};

const validateEarlierDate = (rule, value, callback, field, required = true, todayFine = false) => {
    if (!value) {
        if( required )
            callback('This field is required');
        else
            callback()
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) > 0 || (todayFine && moment(value, 'DD.MM.YYYY').isSame(moment()))) {
      callback();
      return;
    }
    callback(field + ' must be earlier than today');
};
const validateTelNumber = (rule, value, callback, field, required = true, maxLength = 20) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(value.length > maxLength) {
        callback(`Maximum length for this field is ${maxLength} characters`)
        return;
    }
    if(/^[0-9+\-()]+$/.test(value)== false) {
        callback('Only the following characters are allowed: +0123456789-()');
        return;
    }
    callback();
};
const validateBetweenDate = (rule, value, callback, field, fromDate, required = true, toDate = moment(new Date(), 'DD.MM.YYYY')) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(!isValidDate(value) || !isValidDate(fromDate) || !isValidDate(toDate))
    {
        callback('Invalid Date')
        return;
    }
    if (!value.isBetween(fromDate, toDate, 'days', '[]')) {
        callback(field + ' should be between ' + fromDate.format('DD.MM.YYYY') + ' and ' + toDate.format('DD.MM.YYYY'));  
        return;
    }
    callback();
};
const validatePassport = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }

    let tripped = value.replace(/ {1,}/g," ");

    if( tripped != value ) {
        callback(field + ' is invalid because it contains two or more spaces.');
        return;  
    }

    if(value[0] == ' ' || value[value.length - 1] == ' ') {
        callback('Leading or trailing spaces found in your entry.');
        return;
    }

    if(/^[A-Za-z0-9]+$/.test(value)== false) {
      callback('Only latin letters and numbers are allowed');
      return;
    }
    callback();
};
const validateAfterSpecificDate = (rule, value, callback, field, date = moment(), required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback()
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment(date).diff(value) < 0 || moment(value, 'DD.MM.YYYY').isSame(moment(date))) {
      callback();
      return;
    }
    callback(field + " must be greater than " + date.format('DD.MM.YYYY'));
};

const validateExplain = (rule, value, callback, field, required = false) => {
    if (!value) {
        if (required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if (value[0] == ' ') {
        callback(field + " - leading spaces found in your entry.")
        return;
    }
    if (value[value.length - 1] == ' ') {
        callback(field + " - trailing spaces found in your entry.")
        return;
    }
    if (value[0] == ' ' || value[value.length - 1] == ' ' || /^[A-Za-z0-9#$*%&;!@^?><().',\- ]*$/.test(value) == false) {
        callback(field + " is invalid. Only the following characters are valid for this field: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, parens (), period (.), apostrophe ('), comma (,), hyphen (-), and space.");
        return;
    }
    callback();
};
/* --------------------- NEW KDMID ------------------------- */

const validateLaterDate = (rule, value, callback, field, required = true, todayFine = false) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback()
        return;
    }
    if(!isValidDate(value))
    {
        callback('Invalid Date')
        return;
    }
    if (moment().diff(value) < 0 || (todayFine && moment(value, 'DD.MM.YYYY').isSame(moment()))) {
      callback();
      return;
    }
    callback(field + " must be later than today.");
};

const validateLeadingSpace = (rule, value, callback, field, required = true) => {
    if (!value) {
        if(required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if(value[0] == ' ') {
        callback(field + ' - leading spaces found in your entry.');
        return;
    }
    callback();
};


const validateStudyCourse = (rule, value, callback, field, required = true) => {
    if (!value) {
        if (required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if (value[0] == ' ' || value[value.length - 1] == ' ') {
        callback(field + ' - leading/trailing spaces found in your entry.');
        return;
    }
    if (/^[a-zA-Z0-9$?., '&-]+$/.test(value) == false) {
        callback(field + ` is invalid. Only the following characters are valid for this field: A-Z, 0-9, $, ?, period(.), apostrophe ('), comma (,), hyphen (-), and space.`);
        return;
    }
    callback();
};

const validateZipCode = (rule, value, callback, field, required) => {
    if (!value) {
        if (required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if (value[0] == ' ' || value[value.length - 1] == ' ' || /^[a-zA-Z0-9 -]+$/.test(value) == false) {
        callback(field + ' is invalid. Only the following characters are valid for this field: A-Z, 0-9, hypen(-) and single spaces in between names');
        return;
    }
    callback();
};
const validateUSZipCode = (rule, value, callback, field, required) => {
    if (!value) {
        if (required)
            callback('This field is required');
        else
            callback();
        return;
    }
    if (value[0] == ' ') {
        callback(field + '  - leading spaces found in your entry');
        return;
    }
    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value) == false) {
        callback(field + ' is invalid. Verify the format is correct.');
        return;
    }
    callback();
};

const ds160_validators = {
    validateName, 
    validateAlphaNumericPunctuation,
    validateNumberSpace,


    validateCyrillic,
    validateEarlierDate,
    validateTelNumber,
    validateBetweenDate,
    validatePassport,
    validateExplain,
    validateStudyCourse,

    validateLaterDate,
    validateAfterSpecificDate,
    validateEmail,
    validateLeadingSpace,
    validateUSZipCode,
    validateZipCode,
}

export default ds160_validators
