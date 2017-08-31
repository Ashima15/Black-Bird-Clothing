$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    $('.logo').css({
        'transform' : 'translate(0px, ' + wScroll/2 + '%)'
    });
    
    $('.back-bird').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    
    $('.fore-bird').css({
        'transform' : 'translate(0px, -' +wScroll/80+'%)'
    });
    
    if(wScroll > $('.clothes-pics').offset().top- ($(window).height())/1.3 ){
        
        $('.clothes-pics .coloumn').each(function(i){
            
            setTimeout(function(){
               $('.clothes-pics .coloumn').eq(i).addClass('is-showing'); 
            }, 150*(i+1));
        })
    }
    
    if(wScroll> $('.periscope').offset().top - $(window).height()){
        
        $('.periscope').css({
            'background-position' : 'center' + wScroll + 'px'
        });
        
        var opacity = (wScroll - $('.periscope').offset().top + 400)/ (wScroll/5);
        
        $('.window-tint').css({
            'opacity' : opacity
        })
    }
    
     if(wScroll> $('.blogs-post').offset().top - $(window).height()){
         
         var offset = Math.min(0, wScroll - $('.blogs-post').offset().top + $(window).height() -350); 
         
         $('.post-1').css({
            'transform' : 'translate(' + offset + 'px , 0px)'
         });
         
         $('.post-3').css({
            'transform' : 'translate(' + Math.abs(offset) + 'px , 0px)'
         });
     }
});