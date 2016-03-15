(function($){
	 var opt;
	var template=function(){
      return "<span class='socialPluginButtons'><a class='fb_share' >"+"<img src='./image/fb-icon.png' style='height:30px; width:30px;'>"+"</a>"+
      		   "<a class='g_share'><img src='https://www.gstatic.com/images/icons/gplus-32.png' alt='Share on Google+'/></a>"+
      		   "<a class='m_share' >"+"<img src='./image/mail+icon.png' style='height:30px; width:30px;'>"+"</a>"+
             "<a class='t_share'><img src='./image/tweet.png' style='width:30px;height:30px;'></a><span>"+
             "<a class='w_share'><img src='./image/whatsapp.png' style='width:30px;height:30px;'></a><span>";
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
    $('#' + config.id + ' .m_share').click(function(){
      window.location.href="mailto:?subject=I want you to have a look at this property&amp;body="+config.mail.url+"";
    });
    $('#' + config.id + ' .w_share').click(function(){
      if( isMobile.any() ) {
            var url = config.whatsapp.url;
            var text = " want you to have a look at this property";
            var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
        } else {
            alert("Please share this article in mobile device");
        }
    });
  };
  
	  var isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i);
          },
          any: function() {
              return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          }
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


