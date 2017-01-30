var openPhotoSwipe1 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

// TODO add in alt text...

    // build items array
    var coursePics = [
        {
            src: 'img/courses/painting.jpg',
            w: 500,
            h: 500,
            alt: 'Children painting masks workshop'
        },
        {
            src: 'img/courses/drama-hands.jpg',
            w: 500,
            h: 500,
            alt: "Children's collaborative drama display work with hand prints"
        },
        {
            src: 'img/courses/certificates.jpg',
            w: 500,
            h: 500,
            alt: 'Drama group photo with certificates'
        },
        {
            src: 'img/courses/acrostic.jpg',
            w: 500,
            h: 500,
            alt: 'DRAMA acrostic poem'
        },
        {
            src: 'img/courses/mask.jpg',
            w: 500,
            h: 500,
            alt: 'Child in hand made mask'
        },
        {
            src: 'img/courses/card.jpg',
            w: 500,
            h: 500,
            alt: 'Thank you card following drama course'
        },
        {
            src: 'img/courses/masks.jpg',
            w: 500,
            h: 500,
            alt: 'Drama group in hand made masks'
        },
        {
            src: 'img/courses/thankyou.jpg',
            w: 500,
            h: 500,
            alt: 'Thank you letter following drama course'
        },
        {
            src: 'img/courses/models.jpg',
            w: 500,
            h: 500,
            alt: 'Collection of craft models made at a workshop'
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var galleryC = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, coursePics, options);
    galleryC.init();
};

// GALLERY 2 *********************************************************** //

var openPhotoSwipe2 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

// TODO add in alt text...

    // build items array
    var fundraisingPics = [
        {
            src: 'img/fundraising/group-arc.jpg',
            w: 500,
            h: 500,
            alt: 'Arch to Arch Challenge group photo'
        },
        {
            src: 'img/fundraising/arch-bike.jpg',
            w: 500,
            h: 500,
            alt: 'Arch to Arch Challenge arrival photo'
        },
        {
            src: 'img/fundraising/chicken-run.jpg',
            w: 500,
            h: 500,
            alt: 'Chicken run fundraiser'
        },
        {
            src: 'img/fundraising/mountain-view.jpg',
            w: 500,
            h: 500,
            alt: '3 Peaks Challenge mountain view'
        },
        {
            src: 'img/fundraising/group-mountain.jpg',
            w: 500,
            h: 500,
            alt: '3 Peaks Challenge group shot'
        }
        // {
        //     src: 'img/courses/card.jpg',
        //     w: 500,
        //     h: 500,
        //     alt: 'Thank you card following drama course'
        // },
        // {
        //     src: 'img/courses/masks.jpg',
        //     w: 500,
        //     h: 500,
        //     alt: 'Drama group in hand made masks'
        // },
        // {
        //     src: 'img/courses/thankyou.jpg',
        //     w: 500,
        //     h: 500,
        //     alt: 'Thank you letter following drama course'
        // },
        // {
        //     src: 'img/courses/models.jpg',
        //     w: 500,
        //     h: 500,
        //     alt: 'Collection of craft models made at a workshop'
        // }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var galleryF = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, fundraisingPics, options);
    galleryF.init();
};


// openPhotoSwipe();

document.getElementById('btn1').onclick = openPhotoSwipe1;
document.getElementById('btn2').onclick = openPhotoSwipe2;

