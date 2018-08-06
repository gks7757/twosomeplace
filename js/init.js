jQuery(function($){
    
    //gnb

    var $one_depth_menu = $('#header .gnb>li>a');
    var $sub_menu = $('.gnb .sub_menu');

    $one_depth_menu.on({

        mouseover:function(){
             $sub_menu.stop().animate({
                        'top' : '100'+'%',
                        'opacity' : '1'
                    },800);
             $one_depth_menu.css('color', '#272727');
             $(this).css('color', '#ae1d31');
             $('.menu_bg').stop().animate({
                        'top' : '40',
                    },800);
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){
             $sub_menu.stop().animate({
                        'top' : '-100'+'%',
                        'opacity' : '0'
                    },800);
              $('.menu_bg').stop().animate({
                        'top' : '-110',
              },800);
             $one_depth_menu.css('color', '#272727');
     });
    
    $('.notice>a').on('blur',function(){
        $(this).parent().trigger('mouseleave');
    });

    //sub_menu width 대입
    var menu_w = [];

    for (var i = 0; i < $('.m_menu').length; i++) {
        menu_w[i] = $('.m_menu').eq(i).css('width');
        $('.m_menu').eq(i).find('.sub_menu').css({'width':menu_w[i]});
    };

    //search


    var $search = $('.etc_menu .search a');
    var $search_bx = $('.search_bx');
  
    $search.on({

        mouseover:function(){
             $search_bx.addClass('on');
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){
             $search_bx.removeClass('on');
            
     });

    $search_bx.on({
         mouseover:function(){
             $search_bx.addClass('on');
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){
             $search_bx.removeClass('on');
    })

    $('.search_btn').on('blur',function(){
        $search_bx.removeClass('on');
    });

    //membership
    var $membership = $('.etc_menu .membership .membership_icon');
    var $membership_bx = $('.membership_bx');
  
    $membership.on({

        mouseover:function(){
             $membership_bx.addClass('on');
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){
             $membership_bx.removeClass('on');
            
     });

    $membership_bx.on({
         mouseover:function(){
             $membership_bx.addClass('on');
            },
            focus:function(){
                $membership_bx.trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){
             $membership_bx.removeClass('on');
    })

    $('.join_btn').on('blur',function(){
        $('.membership_bx').removeClass('on');
    });

    //app 버튼

    var $app_icon=$('.app a');

    $app_icon.on({
        mouseover:function(){

                $(this).find(".app_bg").animate({ width:'100%' },100);
                $(this).find('.app_text').animate({ color:'#fff' },110);
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){

            $(this).find(".app_bg").animate({ width:'23px' },100);
            $(this).find('.app_text').animate({ color:'#ae1d31' },100);
     });

    $app_icon.on('blur',function(){
        $(this).parent().trigger('mouseleave');
    });


    //container


    //main_banner_event
    var $mainBanner = $('.event_cnt_wrap')

    $mainBanner.bxSlider({
        auto: true,
        speed: 700,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        autoControlsCombine: true
    });


    $('.event_cnt_wrap li a').focusin(function () {
      $('.event_cnt_wrap li').removeClass('focus');
      $(this).parents('li').addClass('focus');
          $mainBanner.stopAuto();
      if($('.main-banner li:first-child').hasClass('focus')){
          $mainBanner.css('transform', 'translate3d(0, 0px, 0px)');
       }
    });


    //slick_new arrival

    $('.new_wrap').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'number-slide-dots'
    });


    //slick_best_item

    $('.tab_contents').slick({
        arrows: true,
        dots: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows:$('.best_item .slide_arrow')
    });

    $('.control').on( 'click','.best_ctr li a',control_move);

    function control_move(e) {
        e.preventDefault();

        var $this = $(this);
        var $tab_li = $(this).parent();
        var $all_tab_li = $('.control .best_ctr li');
        var tab_idx = $this.parent().index();

        $all_tab_li.removeClass('on');
        $tab_li.addClass('on');

        console.log(tab_idx);
        $('.tab_contents').slick('slickGoTo',tab_idx);
    };


    $('.slide_arrow').on( 'click','.slick-arrow', control_arrow );

    function control_arrow(e) {
        var tab_contents_idx = $('.tab_contents').slick('slickCurrentSlide');
        var $all_tab_li = $('.control .best_ctr li');

        console.log(tab_contents_idx);

        $('.control .best_ctr li').removeClass('on');
        $all_tab_li.eq(tab_contents_idx).addClass('on');
    };

    //footer notice

    $('.notic_cnt').bxSlider({
      mode: 'vertical',
      auto: true,
      speed: 700,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      autoControlsCombine: true
    });


    //sub
    
    //FAQ

    $('.q').on('click', function (e) {
        e.preventDefault();

        if($("+.a",this).css("display")=="none"){
            $(".a").slideUp(500);
            $("+.a",this).slideDown(500);
            $(".q").removeClass("active");
            $(this).addClass("active");
        }else if($("+.a",this).css("display")=="block"){
            $("+.a",this).slideUp(500);
            $(".q").removeClass("active");
        };
    });


    //map_new_open
    $('.new_open_list').bxSlider({
      mode: 'vertical',
      auto: true,
      speed: 700,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      autoControlsCombine: true
    });


    // twosome app

    $('.tab_tit a').on('click',function(e) {
        e.preventDefault();
        var $this = $(this);
        var $tab_li = $(this).parent();
        var $tab_li_idx = $(this).parent().index();
        var $all_tab_li = $('.tab_control li');

        var $cnt = $('.tab_wrap');
        var $cnt_idx = $('.tab_wrap').index(); 

        $all_tab_li.removeClass('on');
        $tab_li.addClass('on');
        $cnt.removeClass('on');
        $cnt.eq($tab_li_idx).addClass('on')

    });


    // map_api

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(37.077960, 127.057340), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    var imageSrc = 'https://gks7757.github.io/twosomeplace/imgs/sub/marker.png', // 마커이미지의 주소입니다    
        imageSize = new daum.maps.Size(53, 53), // 마커이미지의 크기입니다
        imageOption = {offset: new daum.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new daum.maps.LatLng(37.077960, 127.057340); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        position: markerPosition, 
        image: markerImage // 마커이미지 설정 
    });

    marker.setMap(map);



});