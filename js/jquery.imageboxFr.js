// TODO
// DONE Make image resize when page (and therefore modal) is resized
// DONE Make thumbnails (original images) show with no margin or padding as they were before
// Make title show and update for each photo




/**
* 扩展jquery插件
* options: {objClicked: 点击objClicked浏览图片 required, fileName: 图片标题元素 options, rotateDirection: 图片旋转方向, options}
*/
(function($){
  $.fn.imageBoxFRing = function(options){
    var options = $.extend({
      objClicked: '.imgFr',      // Click on the element
    }, options);   
    var obj = this, objClicked = options.objClicked, fileName = options.fileName, list_images_fr = [];

    initHtml(obj);
    initCss(obj);

    $(objClicked).on('click', function(){
      // _url is a variable which stores class .img url value when obj is clicked
      // current is a variable which is set to 0
      var _url = $(this).data("url"), current = 0;
      // Clear the array list_images
      if(list_images_fr.length > 0){
        list_images_fr.length = 0;
      }

      $(objClicked).each(function(index, element) {
        // declared $img is a variable.
        // QUESTION: what does $(element) refer to? is it like $this? Oh, it is the parameter fo this anonymous function?
        // declared _src as a variable and assigned the src value of $img to it (so it knows $img is the img with the class .img)
        var $img = $(element), _src = $img.attr("src");

        if(_url == _src){
          current = index + 1;
        }
        // Builds a list of source images and returns current as the number of the clicked image
        list_images_fr.push(_src);
        
        console.log(list_images_fr);
        // console.log("how come I don't see this message?"); ONLY HAPPENS ON CLICK!
        console.log(current);
      });
      // Hmm.. might have to get back to this bit as nit currently working at all, and would rather use alt.
      if(typeof(fileName) == 'undefined'){
        $('.modal-title').text('Image Preview');
      }else{
        $('.modal-title').text($(fileName).text());
      }
      // SOMETHING TO DO WITH THIS... I JUST DON'T KNOW HOW TO UPDATE WITH CLICK TO NEXT...
      // $(".modal-title").text(this.alt);
      $('#img-preview-fr').html('<img src="'+ _url +'" width="100%" height="100%" style="cursor: pointer ;"></img>')
      // NOTE: took out  class="image-box" from the line above - doesn't relate to anything... still works.
      // Add the content of variable current as an attribute of the img-preview
      $('#img-preview-fr').attr({'current': current});
      // #img-preview is the idf if the image body of the modal popup
      // #unbind-pos is the id of the HTML div that is the modal... which is hidden by default
      $(obj).find('#unbind-pos-fr').modal('show');
    });

    btnCtrlImgEvent(options, list_images_fr);
  };

  // var rotateDeg = 0;
  /**
  *初始化html
  */
  function initHtml(obj){
    var div = $('<div id="unbind-pos-fr" class="modal fade" style="display:none;" aria-hidden="true"></div>'); 
    div.append('<div class="modal-dialog">' +
                  '<div class="modal-content">'+
                        '<div class="modal-header">'+
                            '<button aria-hidden="true" data-dismiss="modal" class="close" type="button"><span>&times;</span></button>'+
                            '<h4 class="modal-title grey"></h4>'+
                        '</div>'+
                        '<div style="min-height: 350px;max-height: 500px;" class="modal-body">'+
                            '<div id="img-preview-fr"></div>'+
                            '<div class="img-op">'+
                                // '<span class="btn btn-primary zoom-in">Zoom In</span>'+
                                // '<span class="btn btn-primary zoom-out">Zoom Out</span>'+
                                // '<span class="btn btn-primary rotate">Rotate</span>'+
                                // '<br>'+
                                '<span role="prev" class="btn btn-primary switch">Prev</span>'+
                                '<span role="next" class="btn btn-primary switch">Next</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button data-dismiss="modal" class="btn btn-default" type="button">Close</button>'+
                        '</div>'+
                  '</div>'+
                '</div>');
    $(obj).append(div);
  };

  /**
  * Initialize the style
  */
  function initCss(obj){
    $(obj).find('#img-preview-fr').css({
      'height': '100%',
      'width': '100%',
      'overflow': 'auto',
      'text-align': 'center'
    });
    $(obj).find('.img-op').css({
      'margin-top': '5px',
      'text-align': 'center'
    });
    $(obj).find('.modal .modal-content .btn').css('border-radius', '0');
    $(obj).find('.img-op .btn').css({
      'margin': '5px',
      'width': '100px',
    });
    $(obj).find('.modal-footer .btn-default').css({
      'background-color': '#fff',
      'background-image': 'none',
      'border': '1px solid #ccc',
    });
  };

  /**
  * Button controls picture event
  */
  function btnCtrlImgEvent(options, list_images_fr){

    switchImage(list_images_fr);

  };

  //Picture switch
  function switchImage(list_images_fr){
    //modal is the html from above
    var $modal = $('#unbind-pos-fr');

    $('#unbind-pos-fr').on('click', '.switch', function(){
      var _list_images = list_images_fr, _self = this, _role = $(_self).attr('role');
      var $image_container = $modal.find('#img-preview-fr');
      var _current = parseInt($image_container.attr('current'));
      var _image_count = _list_images.length;
      var _index = _new_current = 0;
      switch (_role){
        case 'prev':
          if(_current - 1 > 0){
            _new_current = _current - 1;
          }else{
            _new_current = _image_count;
          }
          console.log("I switched to previous")
          break;
        case 'next':
          if(_current +1 <= _image_count){
            _new_current = _current + 1;
          }else{
            _new_current = 1;
          }
          console.log("I switched to next file")
      }
      _index = _new_current - 1;
      $modal.find('#img-preview-fr').attr({'current': _new_current});
      $modal.find('#img-preview-fr imgFr').attr({'src': _list_images[_index]});
    });
  };

})(jQuery);
