/**
 * This script adds notice dismissal to the Base Pro theme.
 *
 * @package My_Genesis\JS
 * @author StudioPress
 * @license GPL-2.0-or-later
 */

jQuery(document).on('click', '.essence-woocommerce-notice .notice-dismiss', function () {

	jQuery.ajax({
		url: ajaxurl,
		data: {
			action: 'my_genesis_dismiss_woocommerce_notice'
		}
	});

});
