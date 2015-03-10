/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */

(function ($) {

    $.fn.bgiframe = (function (s) {
        s = $.extend({
            top: 'auto', 
            left: 'auto',
            width: 'auto', 
            height: 'auto', 
            opacity: true,
            src: 'javascript:false;'
        }, s);
        var sdsd = '<iframe class="bgiframe" frameborder="0" allowtransparency="true" tabindex="-1" src="' + s.src + '"' +
                   'style="display:block;position:absolute;z-index:-1;background-color:transparent;' +
                       (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') +
                       'top:' + s.top + ';' +
                       'left:' + s.left + ';' +
                       'width:' + s.width + ';' +
                       'height:' + s.height + ';' +
                '"/>';
        return this.each(function () {
            if ($(this).children('iframe.bgiframe').length === 0)
                $(this).prepend(sdsd);
        });
    });

    // old alias
    $.fn.bgIframe = $.fn.bgiframe;

    function prop(n) {
        return n && n.constructor === Number ? n + 'px' : n;
    }

})(jQuery);