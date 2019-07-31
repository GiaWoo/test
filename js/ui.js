var deleteLog = false;
  
$(document).ready(function() {
    var body_m = $('html, body');
    body_m.css('overflow','hidden');
    $('#pagepiling').pagepiling({
        menu: '.nav-list',
        anchors: ['page1', 'page2', 'page3', 'page4' , 'page5'],
        sectionsColor: ['#fff', '#2ebe21', '#2C3E50', '#51bec4', '#2C3E50'],
        verticalCentered: true,
        css3: true,
        keyboardScrolling: true,
        navigation: {
                'textColor': '#f2f2f2',
                'bulletsColor': '#ccc',
                'position': 'right',
                'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']
        },
        onLeave: function(index, nextIndex, direction){
            if(index == 1){
                $('.header').addClass('fixed');
             }
             //back to the 1st section
             if(nextIndex == 1){
                 $('.header').removeClass('fixed');
             }
        }
    });
});
