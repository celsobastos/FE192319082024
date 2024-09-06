(function(Validate) {
    'use strict';
    const form = document.getElementById('form-news-letter');

    form.addEventListener('submit', event => {
        event.preventDefault();

        Validate.valid(['field-news-letter']);
        console.log(Validate.isEmpty);
        if(Validate.isEmpty){

            console.log('asdfasdfasd');
            form.submit();
        }

    });

})(Validate)