const Base = require('./base');

class Script {
    constructor(options) {
        this.options = options || Base.defaultOptions;
        this.scripts = [];
    }

    heard(params) {
        if (typeof params === 'string') {
            return new ResponseBuilder(this, params); 
        }
    }
}

class RequestResponse {
    constructor(heard, response) {
        this.heard = heard;
        this.response = response;
    }
}

class ResponseBuilder {
    constructor(context, heard) {
        this.context = context;
        this.heard = heard;
    }

    responseWith(response) {
        this.context.scripts.push(new RequestResponse(this.context, this.heard, response));
        return this.context;
    }
}

module.exports = Script;