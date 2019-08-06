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
        $(".navbar-nav .active").removeClass("active");
        $(".navbar-nav").find("a[href=\"#" + ref + "\"]").parents('li').addClass("active");

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
            $('.navbar-nav li:last-child').addClass("active");
        }

      },
    });
    $(".navbar-nav li a").on("click",function() {
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

$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


$('#carouselExample').carousel({ 
   interval: 2000
});


$(document).ready(function() {
   $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
      var title = $(this).attr("title");
      $('.modal-title').html(title);        
      content.html($(this).html());
      $(".modal-profile").modal({show:true});
   });
});
  
