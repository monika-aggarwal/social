(function($){
	var opt;
	var template=function(){
      return "<a id='fb_share' >"+"<img src='./style/fb.png' style='height:30px; width:30px;'>"+"</a>"+
      		 "<a id='g_share'><img src='https://www.gstatic.com/images/icons/gplus-32.png' alt='Share on Google+'/></a>"+
      		 "<a id='mail_share'><img src='./style/mail-icon.png' style='width:40px; height:40px;'></a>";
	};

	$.fn.socialShare=function(options){
		opt=options;	
		var temp=template();
		this.append(temp);	
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

      $(document).ready(function(){
          $('#fb_share').click(function(e){
            e.preventDefault();
            FB.ui(opt.facebook);
          });
          $('#g_share').click(function(){
          	var url=opt.googleplus.url;
          	window.location.href="https://plus.google.com/share?url={"+url+"}";
          });
          $('#mail_share').click(function(){
            window.location.href="mailto:?subject="+opt.mail.subject+"&amp;body="+opt.mail.mailbody+"";
          });
          
      });

}(jQuery));