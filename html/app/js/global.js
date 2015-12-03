/**
 * 全局公用模块
 */

(function ($, w) {

  var topNavSocial = w.socialShare('#J_NavSocialShare'),
      bottomSocial = w.socialShare('#J_RootSocialShare'),
      topSubNav = w.bsDropdown('#J_HoverDropDown');

  topNavSocial.initTooltip({
    placement: 'bottom'
  });
  bottomSocial.initTooltip({
    placement: 'top'
  });
  topSubNav.openByHover().allowDefault();

}(jQuery, window));
