(function($){
	 var opt;
	var template=function(){
      return "<span class='socialPluginButtons'><a class='fb_share' >"+"<img src='./image/fb-icon.png' style='height:30px; width:30px;'>"+"</a>"+
      		   "<a class='m_share' >"+"<img src='./image/mail+icon.png' style='height:30px; width:30px;'>"+"</a>"+
             "<a class='w_share  mobile_display' ><img src='./image/whatsapp.png' style='width:30px;height:30px;'></a><span>";
	};
  
  
  $.fn.createshare=function(config){
    var temp=template();
    this.append(temp); 
    var subject="I want you to have a look at this property";
    $(this).find('.g_share').click(function(){
    var url=config.googleplus.url;
    window.location.href="https://plus.google.com/share?url={"+url+"}";
    });

    $(this).find('.fb_share').click(function(){
      FB.ui(config.facebook);
    });

    $(this).find('.t_share').click(function(){
      window.location.href="https://twitter.com/intent/tweet?text="+config.twitter.url+"";
    });

    $(this).find('.m_share').click(function(){
    window.location.href="mailto:?subject="+subject+"&amp;body="+config.mail.url+"";
    });

    if(isMobile.any())
          $('.w_share').toggleClass('mobile_display');

    $(this).find('.w_share').click(function(){
    if( isMobile.any() ) {
          var url = config.whatsapp.url;
          var text = " want you to have a look at this property";
          var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
          var whatsapp_url = "whatsapp://send?text=" + message;
          window.location.href = whatsapp_url;
    } else{
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

      
}(jQuery));


