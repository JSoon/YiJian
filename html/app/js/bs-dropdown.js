/**
 * Bootstrap下拉列表模块
 */

(function ($, w) {

  w.bsDropdown = function (ele) {
    var that = {},
        dropdown = $(ele);

    /**
     * 通过hover触发下拉事件
     */
    that.openByHover = function () {
      dropdown.hover(function () {
            $(this).addClass('open');
          },
          function () {
            $(this).removeClass('open');
          });
    };

    return that;
  };

}(jQuery, window));