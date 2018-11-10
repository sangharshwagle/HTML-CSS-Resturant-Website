$(document).ready(function() {
    /*--sticky-nav----*/
    
    $(".js--section-features").waypoint(function(direction){
        
        if (direction == "down"){
            $("nav").addClass("sticky-nav")
        }
        else{
            $("nav").removeClass("sticky-nav")
        }
    },{
        offset:"60px"
    });
    
   /*----scroll--on-buttons-----*/
    
    $(".js-scroll-to-plans").click(function(){
        
        $("html, body").animate({scrollTop: $(".js-meal-plans").offset() .top},1000)
                                  
    });
    
    $(".js-scroll-to-section-features").click(function(){
        
        $("html, body").animate({scrollTop: $(".js--section-features").offset() .top},1000)
                                  
    });
    
    /*-----animations--on--scroll-----*/
    
    $(".js-wp-1").waypoint(function(direction){
        
        $(".js-wp-1").addClass("animated fadeInUp");
        
    }, {offset:"50%"
      });
    
    
   
    
    
    
   
});
 