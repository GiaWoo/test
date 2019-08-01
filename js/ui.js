$(function() {
    $.scrollify({
      section:".section",
      sectionName:false,
      interstitialSection:".footer",
      offset: 0,
      scrollbars:false,
      standardScrollElements: "",
      updateHash: true,
      touchScroll: true,
      easing: "easeOutExpo",
      scrollSpeed: 800,
      before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".gnb .active").removeClass("active");
        $(".gnb").find("a[href=\"#" + ref + "\"]").parents('li').addClass("active");

        if($.scrollify.current().attr('data-section-name')=="second")
        {
            $('.header').addClass('fixed');
        }
        if($.scrollify.current().attr('data-section-name')=="first")
        {
            $('.header').removeClass('fixed');
        }
        if($.scrollify.current().attr('data-section-name')=="five")
        {
            $('.gnb li:last-child').addClass("active");
        }

      },
    });
    $(".gnb li a").on("click",function() {
        $.scrollify.move( getScrollifySectionIndex( $(this).attr("href") ) );
    });
    function getScrollifySectionIndex(anchor){
        var idpanel = false;
        $('section').each(function(i){
            if( $(this).data('section-name') == anchor.toString().replace(/#/g,"") ){
            idpanel = i;
            }
        });
        return idpanel;
    };
});
  
