(function($){
	 var opt;
	var template=function(){
      return "<span class='socialPluginButtons'><a class='fb_share' >"+"<img src='./image/fb.png' style='height:30px; width:30px;'>"+"</a>"+
      		   "<a class='g_share'><img src='https://www.gstatic.com/images/icons/gplus-32.png' alt='Share on Google+'/></a>"+
      		   
             "<a class='t_share'><img src='./image/tweet.jpeg' style='width:40px;height:40px;'></a><span>";
	};
  
  
  $.fn.createshare=function(config){
    var temp=template();
    this.append(temp); 
    $('#' + config.id + ' .g_share').click(function(){
       var url=config.googleplus.url;
       window.location.href="https://plus.google.com/share?url={"+url+"}";
      });
    $('#' + config.id + ' .fb_share').click(function(){
      FB.ui(config.facebook);
    });
    $('#' + config.id + ' .t_share').click(function(){
      window.location.href="https://twitter.com/intent/tweet?text="+config.twitter.url+"";
    });
  };
  
	

    window.fbAsyncInit = function() {
          FB.init({
              appId      : '983371245066475',
              xfbml      : true,
              version    : 'v2.5'
            });
      };
      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));

      // $(document).ready(function(){
      //     $('#fb_share').click(function(e){
      //       e.preventDefault();
      //       FB.ui(opt.facebook);
      //     });
      //     $('#g_share').click(function(){
      //     	var url=opt.googleplus.url;
      //     	window.location.href="https://plus.google.com/share?url={"+url+"}";
      //     });
      //     $('#mail_share').click(function(){
      //       window.location.href="mailto:?subject="+opt.mail.subject+"&amp;body="+opt.mail.mailbody+"";
      //     });
          
      // });
      // "<a class='mail_share'><img src='./image/mail-icon.png' style='width:40px; height:40px;'></a>"+
 

}(jQuery));


