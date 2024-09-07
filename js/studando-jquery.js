(function($){

    
    // $('.servicos-item').click(function() {
    //     // $(this).hide(2000, function() {
    //     //     $(this).show(2000);
    //     // });
    //     $(this).hide('slow').show('slow');
    // })

    // $('h2').css({
    //     position: 'absolute',
    //     fontSize: '50px',
    // })

    $('.servicos-item').on({
        // 'mouseover': function() { $(this).hide() },
        // 'mouseout': function() { $(this).show() },
        // click: function() {
        //     $('h2').animate({
        //         top: '250px',
        //     }).animate({left: '50px', fontSize: '200px'});
        // } 

        // click: function() {
        //     let texto = $('h2').html();
        //     let cep = $('#cep').val();
        //     console.log(cep);

        //     $('h2').html('test 123')
        //     $('#cep').val('1111111');
        // } 

        click: function() {
            $.ajax({
                method: "POST",
                url: "http://127.0.0.1:3000/contatos",
                data: { name: "John", location: "Boston" }
            })
            .done(function( msg ) {
                console.log(msg);
            }); 
        }
    })
})(jQuery)