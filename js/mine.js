;(function () {
  $(document).on('click', '.memenu>li', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
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
  // $(document).on('click', '.logo :before', function () {
  //   console.log(111)
  // })
  var bigImg = document.querySelector('.big-img')
  var ul = document.querySelector('.small-img')
  var images = ul.querySelectorAll('img')
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      bigImg.src = 'image/0' + this.alt + 'big.jpg'
    }
  }

  // var flexslider = document.querySelector('.flexslider');
  // var box = flexslider.children[0];
  // var small = box.children[0];
  // var mask = box.children[1];
  // var big = document.querySelector('.hover-img');
  // var img = big.children[0];
  // console.log(box)
  // console.log(small)
  // console.log(mask)
  // console.log(big)
  // console.log(img)
  //   //1.鼠标移入小盒子时，显示黄盒子和大盒子
  //   small.onmouseover = function () {
  //       mask.style.display = "block";
  //       big.style.display = "block";

  //       //2.鼠标在小盒子内移动时，黄盒子跟着移动
  //       small.onmousemove = function (e) {
  //           //3.获取鼠标当前位置与鼠标在小盒子内的差
  //           var e = e || window.event;
  //           //获取鼠标在小盒子里的坐标位置
  //           var x = getPageX(e) - box.offsetLeft - mask.offsetWidth * 0.5;
  //           var y = getPageY(e) - box.offsetTop - mask.offsetWidth * 0.5;
  //           //先设置x和y的边界
  //           //最小值
  //           x = x < 0 ? 0 : x;
  //           y = y < 0 ? 0 : y;
  //           //最大值
  //           //x的最大值为小盒子宽减黄盒子宽
  //           var bwidth = box.offsetWidth - mask.offsetWidth;
  //           var bheight = box.offsetHeight - mask.offsetHeight;
  //           x = x > bwidth ? bwidth : x;
  //           y = y > bheight ? bheight : y;
  //           //4.鼠标移动，黄盒子跟着移动 将鼠标的坐标给黄盒子
  //           mask.style.left = x + "px";
  //           mask.style.top = y + "px";
  //           //5.黄盒子显示的区域与大盒子保持一致
  //           //大图与黄盒子的比例  或者是大盒子与小盒子的比例
  //           //大图在大盒子里移动
  //           var bili = big.offsetWidth / mask.offsetWidth;
  //           //大的图片移动，不是大盒子移动 大图移动方向与黄盒子的移动方向是相反的
  //           img.style.marginLeft = -bili * x + "px";
  //           img.style.marginTop = -bili * y + "px";
  //       }
  //   };


  //   //鼠标移出盒子，黄盒子和大盒子隐藏
  //   box.onmouseout = function () {
  //       mask.style.display = "none";
  //       big.style.display = "none";
  //   }

  //   function getPageX(e) {
  //       //获取鼠标针对可视区域的位置
  //       var x = e.clientX;
  //       return winScroll().left + x;
  //   }

  //   function getPageY(e) {
  //       //获取鼠标针对可视区域的位置
  //       var y = e.clientY;
  //       return winScroll().top + y;
  //   }

  //   function winScroll() {
  //       //获取页面卷曲的高度和宽度
  //       return {
  //           //内部代码用于兼容各个浏览器
  //           top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
  //           left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  //       };
  //   }
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
