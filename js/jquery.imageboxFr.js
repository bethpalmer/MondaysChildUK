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
      objClickedFr: '.imgFr',      // 点击的元素
    }, options);   
    var objFr = this, objClickedFr = options.objClickedFr, fileNameFr = options.fileNameFr, list_images_fr = [];

    initHtml(objFr);
    initCss(objFr);

    $(objClickedFr).on('click', function(){
      // _url is a variable which stores class .img url value when obj is clicked
      // current is a variable which is set to 0
      var _urlFr = $(this).data("url"), currentFr = 0;
      // Clear the array list_images
      if(list_images_fr.length > 0){
        list_images_fr.length = 0;
      }

      $(objClickedFr).each(function(index, element) {
        // declared $img is a variable.
        // QUESTION: what does $(element) refer to? is it like $this? Oh, it is the parameter fo this anonymous function?
        // declared _src as a variable and assigned the src value of $img to it (so it knows $img is the img with the class .img)
        var $imgFr = $(element), _srcFr = $imgFr.attr("src");

        if(_urlFr == _srcFr){
          currentFr = index + 1;
        }
        // Builds a list of source images and returns current as the number of the clicked image
        list_images_fr.push(_srcFr);
        // console.log(list_images_fr);
        console.log(currentFr);
      });
      // Hmm.. might have to get back to this bit as nit currently working at all, and would rather use alt.
      if(typeof(fileNameFr) == 'undefined'){
        $('.modal-title').text('Image Preview');
      }else{
        $('.modal-title').text($(fileNameFr).text());
      }
      // SOMETHING TO DO WITH THIS... I JUST DON'T KNOW HOW TO UPDATE WITH CLICK TO NEXT...
      // $(".modal-title").text(this.alt);
      $('#img-preview-fr').html('<img src="'+ _urlFr +'" width="100%" height="100%" style="cursor: pointer ;"></img>')
      // NOTE: took out  class="image-box" from the line above - doesn't relate to anything... still works.
      // Add the content of variable current as an attribute of the img-preview
      $('#img-preview-fr').attr({'currentFr': currentFr});
      // #img-preview is the idf if the image body of the modal popup
      // #unbind-pos is the id of the HTML div that is the modal... which is hidden by default
      $(objFr).find('#unbind-pos-fr').modal('show');
    });

    btnCtrlImgEventFr(options, list_images_fr);
  };

  // var rotateDeg = 0;
  /**
  *初始化html
  */
  function initHtml(objFr){
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
                                '<span role="prev" class="btn btn-primary switchFr">Prev</span>'+
                                '<span role="next" class="btn btn-primary switchFr">Next</span>'+
                            '</div>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button data-dismiss="modal" class="btn btn-default" type="button">Close</button>'+
                        '</div>'+
                  '</div>'+
                '</div>');
    $(objFr).append(div);
  };

  /**
  * Initialize the style
  */
  function initCss(objFr){
    $(objFr).find('#img-preview-fr').css({
      'height': '100%',
      'width': '100%',
      'overflow': 'auto',
      'text-align': 'center'
    });
    $(objFr).find('.img-op').css({
      'margin-top': '5px',
      'text-align': 'center'
    });
    $(objFr).find('.modal .modal-content .btn').css('border-radius', '0');
    $(objFr).find('.img-op .btn').css({
      'margin': '5px',
      'width': '100px',
    });
    $(objFr).find('.modal-footer .btn-default').css({
      'background-color': '#fff',
      'background-image': 'none',
      'border': '1px solid #ccc',
    });
  };

  /**
  * Button controls picture event
  */
  function btnCtrlImgEventFr(options, list_images_fr){

    switchImageFr(list_images_fr);

  };

  //Picture switch
  function switchImageFr(list_images_fr){
    var $modal = $('#unbind-pos-fr');
    $('#unbind-pos-fr').on('click', '.switchFr', function(){
      var _list_images_fr = list_images_fr, _selfFr = this, _roleFr = $(_selfFr).attr('role');
      var $image_container_fr = $modal.find('#img-preview-fr');
      var _currentFr = parseInt($image_container_fr.attr('currentFr'));
      var _image_count_fr = _list_images_fr.length;
      var _index_fr = _new_currentFr = 0;
      switch (_roleFr){
        case 'prev':
          if(_currentFr - 1 > 0){
            _new_currentFr = _currentFr - 1;
          }else{
            _new_currentFr = _image_count_fr;
          }
          break;
        case 'next':
          if(_currentFr +1 <= _image_count_fr){
            _new_currentFr = _currentFr + 1;
          }else{
            _new_currentFr = 1;
          }
      }
      _index_fr = _new_currentFr - 1;
      $modal.find('#img-preview-fr').attr({'currentFr': _new_currentFr});
      $modal.find('#img-preview-fr imgFr').attr({'src': _list_images_fr[_index_fr]});
    });
  };

})(jQuery);
