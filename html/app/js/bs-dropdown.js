/**
 * Bootstrap下拉列表模块
 */

(function ($, w) {

  w.bsDropdown = function (ele) {
    var that = {},
        dropdown = $(ele);

    /**
     * 允许下拉开关超链接默认跳转
     */
    that.allowDefault = function () {
      var a = dropdown.children(':first-child'),
          href = a.attr('href');
      a.on('click', function () {
        w.location.href = href;
      });
      return this;
    };

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
      return this;
    };

    return that;
  };

}(jQuery, window));