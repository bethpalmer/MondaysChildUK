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
        },
        {
            src: 'img/galleryCourses/drama-group.jpg',
            w: 320,
            h: 240,
            alt: 'Mid-production picture'
        },
        {
            src: 'img/galleryCourses/drama-pair.jpg',
            w: 500,
            h: 500,
            alt: 'Mid-practice picture'
        },
        {
            src: 'img/galleryCourses/drama-show.jpg',
            w: 559,
            h: 416,
            alt: 'Mid-production picture'
        },
        {
            src: 'img/galleryCourses/mask1.jpg',
            w: 500,
            h: 500,
            alt: 'Child wearing hand made mask'
        },
        {
            src: 'img/galleryCourses/mask2.jpg',
            w: 500,
            h: 500,
            alt: 'Child wearing hand made mask'
        },
        {
            src: 'img/galleryCourses/painting1.jpg',
            w: 500,
            h: 500,
            alt: 'Hand made mask workshop'
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
        },
        {
            src: 'img/galleryFundraising/arch-start.jpg',
            w: 500,
            h: 500,
            alt: 'Starting position at arch'
        },
        {
            src: 'img/galleryFundraising/arch-van.jpg',
            w: 500,
            h: 500,
            alt: 'Supplies van'
        },
        {
            src: 'img/galleryFundraising/ben-nevis.jpg',
            w: 500,
            h: 500,
            alt: 'Ben Nevis path'
        },
        {
            src: 'img/galleryFundraising/boot.jpg',
            w: 629,
            h: 500,
            alt: 'Group shot'
        },
        {
            src: 'img/galleryFundraising/boot2.jpg',
            w: 500,
            h: 366,
            alt: 'Group shot'
        },
        {
            src: 'img/galleryFundraising/boot3.jpg',
            w: 500,
            h: 339,
            alt: 'Group shot'
        },
        {
            src: 'img/galleryFundraising/bridge.jpg',
            w: 500,
            h: 500,
            alt: 'Bridge shot'
        },
        {
            src: 'img/galleryFundraising/carpark.jpg',
            w: 500,
            h: 500,
            alt: 'Group shot'
        },
        {
            src: 'img/galleryFundraising/dover.jpg',
            w: 500,
            h: 382,
            alt: 'Group shot at Dover Marina'
        },
        {
            src: 'img/galleryFundraising/boot2.jpg',
            w: 500,
            h: 403,
            alt: 'Group shot at hospital'
        },
        {
            src: 'img/galleryFundraising/loch.jpg',
            w: 449,
            h: 500,
            alt: 'Shot of Loch en route'
        },
        {
            src: 'img/galleryFundraising/mountain-shot.jpg',
            w: 500,
            h: 500,
            alt: 'On the mountain'
        },
        {
            src: 'img/galleryFundraising/pub.jpg',
            w: 500,
            h: 500,
            alt: 'Well deserved beer'
        },
        {
            src: 'img/galleryFundraising/van.jpg',
            w: 500,
            h: 288,
            alt: 'Group shot in van on way'
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
    
    var galleryF = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, fundraisingPics, options);
    galleryF.init();
};


// openPhotoSwipe();

document.getElementById('btn1').onclick = openPhotoSwipe1;
document.getElementById('btn2').onclick = openPhotoSwipe2;

