(function ($) {
  "use strict";

  /* preloader 
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 200);
  };

  /* Dom Ready */
  $(function () {
    preloader();
  });
})(jQuery);
