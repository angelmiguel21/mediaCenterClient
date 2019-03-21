$(function(){
	"use strict";
    $(function() {
        $(".preloader").fadeOut();
    }),
    jQuery(document).on("click", ".mega-dropdown", function(i) {
        i.stopPropagation();
    });
});