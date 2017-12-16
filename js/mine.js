$(function (window) {
  $('.memenu').find('li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
})(window)
