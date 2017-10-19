module.exports = {
    UNEXPECTED_ERROR: {
        status: 500,
        code: 199999,
        message: 'Unexpected error happened'
    },
    WRONG_EXTERNAL_SERVER_CONFIG: {
        status: 500,
        code: 100002,
        message: 'Wrong config for external server'
    },
    COULD_NOT_CALL_EXTERNAL_SERVER: {
        status: 500,
        code: 100003,
        message: 'Could not call external server'
    },
    EXTERNAL_SERVER_RESPOND_WITH_ERROR: {
        status: 500,
        code: 100004,
        message: 'External server respond with error'
    }
};