(function(){

  $(function(){
    $('.photos').each(photoize);
  });

  var photoize = function () {

    var el = $(this),
        totalDiv = el.siblings('.photo-nav').find('.total'),
        currentDiv = el.siblings('.photo-nav').find('.count .current');

    el.find('div:first-child').show();
    el.data('current', 1);

    el.parent().on("click", ".photos > div > img, .photo-nav .forward, .photo-nav .backward", function(){

      var nextIndex = el.data('current') + ($(this).hasClass('backward') ? -1 : 1);
      if (nextIndex > el.find('> div').length) nextIndex = 1;
      if (nextIndex < 1) nextIndex = el.find('> div').length;
      el.data('current', nextIndex);
      currentDiv.html(nextIndex);

      el.find('> div').hide();
      el.find('div:nth-child(' + nextIndex + ')').show();

    });

  }

}).call(this);
