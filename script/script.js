$(document).ready(function(){
    $('.icons__item_user').click(function(){
        $(this).find($('.user__dropdown')).toggleClass('hidden');
    });
    $('.icons__item_burger').click(function(){
        var $this = $(this),
            $first_image = $this.find($('img:first-child')),
            $hidden_menu = $('.menu__links');

        $first_image.toggleClass('hidden');
        $this.find($('img:last-child')).toggleClass('hidden');

        if ($first_image.hasClass('hidden')) {
            $hidden_menu.show();
        } else {
            $hidden_menu.hide();
        }
    });

    $("a[href^='#']").click(function(){
        var $href = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $($href).offset().top
        });
    
        return false;
    });

    Inputmask({
        "mask": "+7(999)999-99-99",
        showMaskOnHover: false
    }).mask($('input[type="tel"]'));

    $('.banner__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        variableWidth: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    dots: true,
                    arrows: true,
                    infinite: true,
                    vertical: true,
                    variableWidth: false,
                    verticalSwiping: true
                }
            }
        ]
    });
    if ($(window).width() < 400) {
        var $track = $('.slick-track');
        $track.addClass('transform');
        $('.slick-next').click(function(){
            if (!$('.slider__item.first').hasClass('slick-active')) {
                $track.removeClass('transform');
            } else {
                $track.addClass('transform');
            }
        })
        $('.slick-dots li').click(function(){
            if (!$('.slider__item.first').hasClass('slick-active')) {
                $track.removeClass('transform');
            } else {
                $track.addClass('transform');
            }
        })
    }
    function validate() {
        if ($('#name').val().length == 0 || $('#coment').val().length == 0 || $('#phone').val().length != 16) {
            return false;
        } else return true;
    }
});