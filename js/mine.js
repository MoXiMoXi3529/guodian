;(function () {
  $(document).on('click', '.memenu>li', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
  $(document).on('click', '.login', function () {
    $('.popover').toggle()
  })
})();
