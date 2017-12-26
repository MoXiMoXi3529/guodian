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
})();
