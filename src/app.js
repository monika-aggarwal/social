

 $('.mainListingCard').each(function(){
      var config = {
        id: this.id,
        facebook:{
                    method: 'feed',
                    name: $(this).children('label').text(),
                    link: $(this).attr('data-url'),
                    picture: $(this).find('.listing-left').find('img').attr('src'),
                    caption: 'This is the content of the "caption" field.',
                    description: $(this).find('.listing-right').find('.descriptionjs').text(),

                    message: ''
                },
        googleplus:{
                    url:  $(this).attr('data-url')
            },
        twitter:{
        			url:  $(this).attr('data-url')
        },  
        mail:{
                    url:  $(this).attr('data-url')         
        },
        whatsapp:{
                    url:  $(this).attr('data-url')
        }

       };
      $('#' + this.id + ' .sharebutton').createshare(config);
    });