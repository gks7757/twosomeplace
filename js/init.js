// jQuery(function($){
//     //반복되는 선택자는 변수로 지정해서 가져와야 메모리를 적게먹음
//     $one_depth_submenu=$('.gnb>li>a'); 
//     $submenu=$('.gnb>li>ul');
    
//     $one_depth_submenu.on({
//         mouseover:function(){
//             $submenu.slideUp(200);//next관계일땐 슬라이드업을 먼저해줌.
//             $(this).next().slideDown(200);
//         },
//         focus:function(){
//             $(this).trigger('mouseover'); 
//         }
//     }).parent().on('mouseleave',function(){
//         //마우스 리브는 자식에게 이벤트를 거는게 아니라 부모에게 걸어야 완전히 벗어나는거나 마찬가지이다. 공원을 벗어날때 공원 안의 놀이기구에서 벗어난다고 공원을 떠난게아님.
//         $submenu.slideUp(200);
//     });


//     $('.kids>a').on('blur',function(){
//          $(this).parent().trigger('mouseleave');
//     });
    
//     $('#mainSlide').bxSlider({mode:'fade'});
//     $('#bannerSlide_1').bxSlider();
//     $('#bannerSlide_2').bxSlider();
    
    // $('.best .tabs a').on('click',function(e){
    //     e.preventDefault();
    //     n=$('.best .tabs a').index($(this))
    //     $('.best .tabs li').eq(n).addClass('on').siblings().removeClass('on');
    //     $('.best .tab-content').eq(n).addClass('on').siblings().removeClass('on');
    // });

// });




jQuery(function($){
    
    //gnb

    $one_depth_menu = $('#header .gnb>li>a');
    $sub_menu = $('.gnb .sub_menu');

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

    // $('.etc_menu .search a').on('click', function(){
    //         $('.etc_bx').addClass('on').parents('etc').find('etc_bx').removeClass('on');
    // });


    $('.etc_menu .search a').on('click', function(){
        $('.search_bx').toggle();

    });


    $('.search_btn').on('blur',function(){
        $('.search_bx').hide();
    });

    //membership
    $('.etc_menu .membership a').on('click', function(){
         $('.membership_bx').toggle();

    });

    $('.join_btn').on('blur',function(){
        $('.membership_bx').hide();
    });


    // // function etc_bx() {
    //    if(!$('.etc_bx')).hide();
    // // }


    //app 버튼

    $app_icon=$('.app a');

    $app_icon.on({
        mouseover:function(){

                $(this).find(".app_bg").animate({ width:'100%' },150);
                $(this).find('.app_text').animate({ color:'#fff' },100);
            },
            focus:function(){
                $(this).trigger('mouseover'); 
            }
        }).parent().on('mouseleave',function(){

            $(this).find(".app_bg").animate({ width:'23px' },150);
            $(this).find('.app_text').animate({ color:'#ae1d31' },100);
     });

    $app_icon.on('blur',function(){
        $(this).parent().trigger('mouseleave');
    });


    //container

    //main_banner_event

    $('.event_cnt_wrap').bxSlider({
        mode:'horizontal',
        auto: true,
        speed: 700,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true
    });

    //footer notice

    $('.notic_cnt').bxSlider({
      mode: 'vertical',
      auto: true,
      speed: 700,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true
    });

    // $('.bx-start').on('click', function() {
    //    $(this).removeClass('active');
    //    $('.bx-stop').addClass('active');
    // });
    // $('.bx-stop').on('click', function() {
    //    $(this).removeClass('active');
    //    $('.bx-start').addClass('active');
    // });

});