;(function () {
  var box = document.getElementById("box");
  var small = box.children[0];
  var mask = small.children[1];
  var big = box.children[1];
  var img = big.children[0];
  //1.鼠标移入小盒子时，显示黄盒子和大盒子
  small.onmouseover = function () {
    mask.style.display = "block";
    big.style.display = "block";
    //2.鼠标在小盒子内移动时，黄盒子跟着移动
    small.onmousemove = function (e) {
      //3.获取鼠标当前位置与鼠标在小盒子内的差
      var e = e || window.event;
      //获取鼠标在小盒子里的坐标位置
      var x = getPageX(e) - box.offsetLeft - mask.offsetWidth * 0.5;
      var y = getPageY(e) - box.offsetTop - mask.offsetWidth * 0.5;
      //先设置x和y的边界
      //最小值
      x = x < 0 ? 0 : x;
      y = y < 0 ? 0 : y;
      //最大值
      //x的最大值为小盒子宽减黄盒子宽
      var bwidth = box.offsetWidth - mask.offsetWidth;
      var bheight = box.offsetHeight - mask.offsetHeight;
      x = x > bwidth ? bwidth : x;
      y = y > bheight ? bheight : y;
      //4.鼠标移动，黄盒子跟着移动 将鼠标的坐标给黄盒子
      mask.style.left = x + "px";
      mask.style.top = y + "px";
      //5.黄盒子显示的区域与大盒子保持一致
      //大图与黄盒子的比例  或者是大盒子与小盒子的比例
      //大图在大盒子里移动
      var bili = big.offsetWidth / mask.offsetWidth;
      //大的图片移动，不是大盒子移动 大图移动方向与黄盒子的移动方向是相反的
      img.style.marginLeft = -bili * x + "px";
      img.style.marginTop = -bili * y + "px";
    }
  };
  //鼠标移出盒子，黄盒子和大盒子隐藏
  box.onmouseout = function () {
      mask.style.display = "none";
      big.style.display = "none";
  }
  function getPageX(e) {
    //获取鼠标针对可视区域的位置
    var x = e.clientX;
    return winScroll().left + x;
  }
  function getPageY(e) {
    //获取鼠标针对可视区域的位置
    var y = e.clientY;
    return winScroll().top + y;
  }
  function winScroll() {
    //获取页面卷曲的高度和宽度
    return {
      //内部代码用于兼容各个浏览器
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
  }
})()
