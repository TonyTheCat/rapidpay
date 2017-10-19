module.exports = {
    VALIDATION_ERRORS: {
        status: 400,
        code: 198000,
        message: 'Some validation rules failed'
    },
    MISSING_REQUIRED_FIELDS: {
        status: 400,
        code: 198001,
        message: 'Some required fields are missed in request body'
    },
    NOT_CORRECT_TYPE: {
        status: 400,
        code: 198002,
        message: 'Some field has wrong type'
    },
    OBJECT_IS_UNDEFINED: {
        status: 400,
        code: 198003,
        message: 'Some object is not defined'
    },
    WEAK_PASSWORD: {
        status: 400,
        code: 198004,
        message: 'Weak password'
    },
    VALUE_IS_NOT_IN_SET: {
        status: 400,
        code: 198005,
        message: 'The value is not allowed (not in set)'
    },
    ARRAY_ELEMENT_IS_NOT_IN_SET: {
        status: 400,
        code: 198006,
        message: 'At least one element of array is not allowed (not in set)'
    },
    NOT_VALID_ARRAY_LENGTH: {
        status: 400,
        code: 198007,
        message: 'Not valid number of elements in array'
    },
    REQUIRED_PROPERTY_IS_UNDEFINED: {
        status: 400,
        code: 198008,
        message: 'One or more required properties are not defined'
    },
    REQUIRED_PROPERTY_IS_EMPTY: {
        status: 400,
        code: 198009,
        message: 'One or more required properties are empty'
    },
    EMAIL_NOT_VALID: {
        status: 400,
        code: 198010,
        message: 'Email not valid'
    },
    PASSWORD_MUST_BE_LONGER: {
        status: 400,
        code: 198011,
        message: 'Your password must be at least 5 characters long'
    }
};