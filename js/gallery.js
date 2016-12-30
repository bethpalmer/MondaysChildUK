function gallery1(){
    var options = {
      obj1Clicked = '.img1'
      obj2Clicked = '.img2'
    };
    var obj = this, obj1Clicked = options.object1Clicked, obj2Clicked = options.object2Clicked, image_array_1 = [], image_array_2 = [];
    
    initHtml(obj);
    initCss(obj);
    
    $(obj1Clicked).on('click', function(){
        var url = $(this).data("url"), select = 0;
        
        if(image_array_1.length > 0){
        image_array_1.length = 0;
        }
        
        $(obj1Clicked).each(function(index, element){
            var $img = $(element), src = $img.attr("src");
            
            if (url == src){
                select = index + 1;
            }
            
            image_array_1.push(src);
            console.log(image_array_1.toString());
            console.log(select);
        });
        createView();
    });
};

// objGallery2Clicked = '.img2',

function createView(){
  $('#image-preview').html('<img src="'+ url +'"width="100%" height="100%" style="cursor: pointer;"></img>')
  $('#image-preview').attr({'current': select});
  $(obj).find('#modal-galery').modal('show');
}

function initHtml(obj){
    var div = $('<div id="modal-galery" class="modal fade" style="display:none;" aria-hidden="true"></div>'); 
    div.append('<div class="modal-dialog">' +
                  '<div class="modal-content">'+
                        '<div class="modal-header">'+
                            '<button aria-hidden="true" data-dismiss="modal" class="close" type="button"><span>&times;</span></button>'+
                            '<h4 class="modal-title grey"></h4>'+
                        '</div>'+
                        '<div style="min-height: 350px;max-height: 500px;" class="modal-body">'+
                            '<div id="image-preview"></div>'+
                            '<div class="image-op">'+
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

  function initCss(obj){
    $(obj).find('#img-preview').css({
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





