//laoder js
$(document).ready(function () {
    $('#loader').fadeOut("slow");
});

//arrow js
$(function () {
    $('.lets-connect').hover(
        function () {
            $('.lets-connect span').toggleClass('transform');
        }
    );
});

$(function () {
    $('.back-to-home').hover(
        function () {
            $('.back-to-home span').toggleClass('transform');
        }
    );
});

//resume download js
$('#resumeButton').click(function (e) {
    e.preventDefault();
    window.location.href = 'assets/documents/CV.pdf';
});


//services modal js
(function ($) {
    $('.service-title').on('click', function () {
        $('.modal-background').addClass('show').removeClass('hide');
        $('#' + $(this).data('modal')).addClass('show').removeClass('hide');
    });

    $('.modal-background').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('show').addClass('hide');
        $('.modal.show').removeClass('show').addClass('hide');
    });

    $('.modal').on('click', function (e) {
        e.preventDefault();
    });
})(jQuery);

// portfolio modal js
(function ($) {
    $('.portfolio-category').on('click', function () {
        $('.modal-background').addClass('show').removeClass('hide');
        $('#' + $(this).data('modal')).addClass('show').removeClass('hide');
    });

    $('.modal-background').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('show').addClass('hide');
        $('.modal.show').removeClass('show').addClass('hide');
    });

    $('.modal').on('click', function (e) {
        e.preventDefault();
    });
})(jQuery);


//cursor js
$(document)
    .mousemove(function (e) {
        $('.cursor')
            .eq(0)
            .css({
                left: e.pageX,
                top: e.pageY
            });
        setTimeout(function () {
            $('.cursor')
                .eq(1)
                .css({
                    left: e.pageX,
                    top: e.pageY
                });
        }, 100);
    })

$(document)
    .mousemove(function (e) {
        $('.logo-cursor')
            .eq(0)
            .css({
                left: e.pageX,
                top: e.pageY
            });
        setTimeout(function () {
            $('.logo-cursor')
                .eq(1)
                .css({
                    left: e.pageX,
                    top: e.pageY
                });
        }, 100);
    })

//Portfolio js
function defer(method) {
    if (window.jQuery)
        method();
    else
        setTimeout(function () {
            defer(method)
        }, 50);
}

defer(function () {
    (function ($) {

        function doneResizing() {
            var totalScroll = $('.resource-slider-frame').scrollLeft();
            var itemWidth = $('.resource-slider-item').width();
            var difference = totalScroll % itemWidth;
            if (difference !== 0) {
                $('.resource-slider-frame').animate({
                    scrollLeft: '-=' + difference
                }, 500, function () {
                    // check arrowsresource-slider-inset
                    checkArrows();
                });
            }
        }

        function checkArrows() {
            var totalWidth = $('#resource-slider .resource-slider-item').length * $('.resource-slider-item').width();
            var frameWidth = $('.resource-slider-frame').width();
            var itemWidth = $('.resource-slider-item').width();
            var totalScroll = $('.resource-slider-frame').scrollLeft();
        }

        $('.portfolio-arrow').on('click', function () {
            var $this = $(this),
                width = $('.resource-slider-item').width(),
                speed = 500;
            if ($this.hasClass('prev')) {
                $('.resource-slider-frame').animate({
                    scrollLeft: '-=' + width
                }, speed, function () {
                    // check arrows
                    checkArrows();
                });
            } else if ($this.hasClass('next')) {
                $('.resource-slider-frame').animate({
                    scrollLeft: '+=' + width
                }, speed, function () {
                    // check arrows
                    checkArrows();
                });
            }
        }); // end on arrow click

        $(window).on("load resize", function () {
            checkArrows();
            $('#resource-slider .resource-slider-item').each(function (i) {
                var $this = $(this),
                    left = $this.width() * i;
                $this.css({
                    left: left
                })
            }); // end each
        }); // end window resize/load

        var resizeId;
        $(window).resize(function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
        });

    })(jQuery); // end function
});


//3d effect on hover
$(document).ready(function () {

    // Set sticker height + hover animation
    var setLayoutDesign = function () {

        var layoutDesignCard = $('#layoutDesign');
        var cardWidth = layoutDesignCard.width();
        var cardHeight = cardWidth / 2.5;

        // Set scale
        var cardContentScale = cardWidth / 350;
        layoutDesignCard.css('transform', 'translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(' + cardContentScale + ')');
        $('.layoutDesignCard span').css('font-size', cardContentScale * 40 + 'px');

        // Set height
        layoutDesignCard.height(cardHeight);

        // Generate hover effect
        layoutDesignCard.mouseover(function () {
            layoutDesignCard.mousemove(function (e) {
                // Find mouse X position in card
                mouseScreenPositionX = e.pageX;
                cardLeftPosition = layoutDesignCard.offset().left;
                mousePosX = ((mouseScreenPositionX - cardLeftPosition) / cardWidth);
                // Calculate maxtrix3d X value
                matrix3dX = ((mousePosX / 10000) * 1.5) - 0.0001;

                // Find mouse Y position in card
                mouseScreenPositionY = e.pageY;
                cardTopPosition = layoutDesignCard.offset().top;
                mousePosY = ((mouseScreenPositionY - cardTopPosition) / cardHeight);
                // Calculate maxtrix3d Y value
                matrix3dY = ((mousePosY / 10000) * 1.65) - 0.0001;

                // Set CSS
                layoutDesignCard.css('transform', 'translate3d(0,-5px,0) matrix3d(1,0,0.00,' + matrix3dX + ',0.00,1,0.00,' + matrix3dY + ',0,0,1,0,0,0,0,1) scale(' + cardContentScale * 1.04 + ')');
            });
        })
            .mouseout(function () {
                // Unset CSS on mouseleave
                layoutDesignCard.css('transform', 'translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(' + cardContentScale + ')');
            });
    }

    // Execute function
    setLayoutDesign();
    $(window).on('resize', function () {
        setLayoutDesign();
    })
});