(function (win, doc) {
    'use strict';

    const Validate = function(fields) {
        this.isEmpty = true;
        this.fields = fields;
    }

    Validate.prototype.valid = function(){
        this.fields.forEach(fields => {
            let field = doc.getElementById(fields);
            field.classList.remove('error');
            this.isEmpty = true; 
            if (field.value === '') {
                this.isEmpty = false; 
                field.classList.add('error');
            }
        });
    }

    Validate.prototype.test = function(){
        return this.isEmpty;
    }

    win.Validate = Validate;

})(window, document);