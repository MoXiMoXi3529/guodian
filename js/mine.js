;(function () {
  $(document).on('click', '.memenu>li', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
  if(!(navigator.userAgent.match(/(iPhone|iPod|Android|ios|Windows Phone)/i))){
    $('.memenu>li').hover(function () {
      $(this).children('.mepanel').toggle()
    }, function () {
      $(this).children('.mepanel').hide()
    })
  }
  $(document).on('click', '.login', function () {
    $('.popover').toggle()
  })
  $(document).on('click', '.more', function () {
    $('.listsPage .all-title').toggle('500')
  })
  $(document).on('click', '.item-title li', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
  $(document).on('click', '.collecPage .lists li .delete', function () {
    $(this).parent().parent().remove();
  })
  $(document).on('click', '.detailsPage .items', function () {
    $('.flexslider>img').attr('src', $(this).attr('data-img'))
    $(this).addClass('active').siblings().removeClass('active')
  })
  $(document).on('click', '.top-nav .h-b-left', function () {
    $('.memenu').toggle()
    $(this).toggleClass('active')
  })
  $(window).scroll(function (event) {
    var Height = $('.header-top').height()
    var top = $(document).scrollTop()
    if (top > Height) {
      $('.header-top .top-header-main').hide('300')
      $('.header-bottom .log').show()
      $('.header-bottom .phone').show()
      $('.memenu>li>.mepanel').css({
        'top': '80px' 
      })
      $('.header-top .search input').addClass('active')
      $('.skyblue li>a').css({
        'margin': '0 1rem'
      })
    } else {
      $('.header-top .top-header-main').show()
      $('.header-bottom .log').hide()
      $('.header-bottom .phone').hide()
      $('.memenu>li>.mepanel').css({
        'top': '152px' 
      })
      $('.header-bottom .search .sec').removeClass('active')
      $(document).on('click', '.header-bottom .search .sec', function () {
        $(this).parent().toggleClass('.active')
        $(this).siblings().toggleClass('.active')
      })
    }
  })
  
  // var Height =  $('.header-top').height() 
  // console.log(Height)
  // window.onscroll = function () {
  //   var top = document.body.scrollTop;
  //   if (top < Height) {
  //       console.log(top + 1)
  //   } else {
  //       console.log(Height + 2)
  //   }
  //   // header.style.background = "rgba(201,21,35," + opacity + ")";
  // }
  // $(window).scrollTop(function (offset) {
  //   var height =  $('.header-top').height()
  //   if (offset > height) {
  //     $('.header-top .container').hide()
  //   }
  //   console.log(offset)
  // })
})();

if(!(navigator.userAgent.match(/(iPhone|iPod|Android|ios|Windows Phone)/i))){
    ;(function ($) {
    var XQ_bigimg=function(xq_big){
      var self=this;
      this.xq_big =xq_big;
      this.width  =xq_big.width();
      this.height =xq_big.height();
      this.top  =xq_big.offset().top;
      this.left =xq_big.offset().left;
      this.pdiv =Math.floor(Math.random()*this.width*this.height);
      this.setting={
        "pwidth"  :   300,
        "pheight" :   200,
        "scale"   :   3,
        "margin_top"  : 50,
        "margin_left"   : 50,
        "pclass"    : ""
      }
      $.extend(this.setting,this.getSetting());
      this.imgsrc =this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
      this.xq_big.hover(function(){
                  self.createPchild(self.pdiv);
                  self.imgsrc =$(this).attr("src");
                  self.createImg();
                },function(){
                  var pdiv="#"+self.pdiv;
                  $(pdiv).remove();
                });
      this.xq_big.mousemove(function(e){
        var scrollTop=$(document).scrollTop();
        var scaleX=(e.clientX-self.left)/self.width;//处于左边部分的距离
        var scaleY=(e.clientY-self.top+scrollTop)/self.height;//处于顶部部分的距离
        self.updImg(scaleX,scaleY);
      });
    }
    XQ_bigimg.prototype={
      createPchild:function(id){
        var ele=document.createElement("div");
        var img=document.createElement("img");
        var scrollTop=$(document).scrollTop();
        $("body").append($(ele));
        $(ele).attr({'id':id}).css({
          'width':this.setting.pwidth+"px",
          'height':this.setting.pheight+"px",
          'position':'fixed',
          'top':this.top+this.setting.margin_top-scrollTop,
          'left':this.left+this.width+this.setting.margin_left,
          'overflow':'hidden'
        }).addClass(this.setting.pclass);
      },
      createImg:function(){
        var img=document.createElement("img");
        $(img).attr("src",this.imgsrc).css({
          'width':this.width*this.setting.scale,
          'height':this.height*this.setting.scale,
          'margin-top':'0px',
          'margin-left':'0px',
          'position':'relative'
        });
        var pdiv="#"+this.pdiv;
        $(pdiv).append($(img));
      },
      updImg:function(scaleX,scaleY){
        var top=(scaleY*this.height*this.setting.scale)-(scaleY*this.setting.pheight);
        var left=(scaleX*this.width*this.setting.scale)-(scaleX*this.setting.pwidth);
        var pdiv="#"+this.pdiv;
          $(pdiv).find("img").css({'top':-top+"px"});
          $(pdiv).find("img").css({'left':-left+"px"});
      },
      getSetting:function(){
        var setting=this.xq_big.attr("setting");//节点属性配置参数
        if (setting && setting!="") {
          return $.parseJSON(setting);
        }else{
          return {};
        }
      }
    };
    XQ_bigimg.init=function($ele){
      var _this_=this;
      $ele.each(function(){
        new _this_($(this));
      });
    }
    window['XQ_bigimg']=XQ_bigimg;
  })(jQuery)
  $(function(){
    XQ_bigimg.init($("[xq_big='true']"));
  });
}
