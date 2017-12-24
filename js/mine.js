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
})();
