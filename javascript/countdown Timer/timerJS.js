
    $("#hr-value").keyup(function(e){
      var code = e.which;
       if(code==13){
         e.preventDefault();
         $('.hr').append(e.target.value)
       }
    })
    $("#min-value").keyup(function(e){
      var code = e.which;
       if(code==13){
         e.preventDefault();
         $('.min').append(e.target.value)
       }
    })
    $("#sec-value").keyup(function(e){
      var code = e.which;
       if(code==13){
         e.preventDefault();
         $('.sec').append(e.target.value)
       }
    })
    function dec_hr() {

      hr= parseInt($('.hr').html());
          if(hr !==0)
          {
            $('.hr').html(hr-1);
            $('.min').html(59);
            $('.sec').html(59);
          }
          else
          {
          
            var audio = $("audio")[0];
            audio.play();
            
          }
    }
     function dec_min() {
      min= parseInt($('.min').html());
      
          if(min !==0)
          {
            $('.min').html(min-1);
            $('.sec').html(59);
          }
          else
          {
            dec_hr();
          }
     }
     $('#reset').click(function(){
       $('span').html(0)
     })
     $('#start').click(function(){
       
      $(document).ready(function(){
      var update= function(){
        
        $('.sec').each(function(){
          
          var count= parseInt($(this).html());
         
          if(count !==0)
          {
            $(this).html(count-1);
          }
          else
          {
            dec_min();
          }
        })
        
      }
      setInterval(update, 1000)
      
    })
    })
