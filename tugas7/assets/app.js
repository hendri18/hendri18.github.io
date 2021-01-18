
function checkPromoCode(promo_code = ""){
    return promo_code.toLowerCase() == 'hw2021';
}

$(document).ready(function(){
    new WOW().init();
    
    $('#layanan').on('change', function(){
        switch($(this).val()){
            case 'Reguler':
                if(checkPromoCode($('#promo_code').val())){
                    $('#total_harga').val('Rp. 6.500 (Promo)');
                }else{
                    $('#total_harga').val('Rp. 10.000');
                }
                break;
            case 'Premium':
                if(checkPromoCode($('#promo_code').val())){
                    $('#total_harga').val('Rp. 9.750 (Promo)');
                }else{
                    $('#total_harga').val('Rp. 10.000');
                }
                break;
            case 'Ngutang':
                if(checkPromoCode($('#promo_code').val())){
                    $('#total_harga').val('Bayar Nanti + Promo');
                }else{
                    $('#total_harga').val('Bayar Nanti');
                }
                break;
        }
    });
    $('#promo_code').on('input', function(){
        $('#layanan').trigger('change');    
    });
    // $('[input-data]').on('input change click', function(){
    //     var el = $(this);
    //     var target = '#input_'+el.attr('id');
    //     console.log(el.val(), target)
    //     $(target).html(el.val())
    // })
    $('#pesan').on('show.bs.modal', function (e) {
        
        $.each($('[input-data]'), function(){
            var el = $(this);
            var target = '#input_'+el.attr('id');
            $(target).html(el.val())
        })
    })
    $('#layanan').trigger('change')
})