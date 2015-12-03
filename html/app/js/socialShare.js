/**
 * 社交分享模块
 */

(function ($, w) {

  w.socialShare = function (ele) {
    var that = {},
        social = $(ele);

    /**
     * 创建气泡信息
     * @param opts.placement - 气泡信息放置方位
     */
    that.initTooltip = function (opts) {
      social.each(function () {
        var socialLinks = $(this).find('[data-toggle="tooltip"]');
        socialLinks.tooltip({
          placement: opts.placement || 'top'
        });
      });
    };

    return that;
  };

}(jQuery, window));
