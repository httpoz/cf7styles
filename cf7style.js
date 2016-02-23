jQuery(document).ready(function ($) {

    // overwrite default handling of the error message

    $.fn.wpcf7NotValidTip = function (message) {
        return this.each(function () {
            var into = $(this);

            // stop it from fading out on hover
            into.append('<span class="wpcf7-not-valid-tip"></span>');
            $('span.wpcf7-not-valid-tip').mouseover(function () {
                $(this).css({'opacity': 1});
            });
            into.find(':input').mouseover(function () {
                into.find('.wpcf7-not-valid-tip').not(':hidden').css({'opacity': 1});
            });
            into.find(':input').focus(function () {
                into.find('.wpcf7-not-valid-tip').not(':hidden').css({'opacity': 1});
            });
        });
    };
});