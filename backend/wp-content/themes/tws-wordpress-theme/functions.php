<?php

/**
 * Enqueue scripts
 */
function twstudio_script_enqueue() {
	wp_enqueue_style( 'customstyle', get_template_directory_uri() . '/style.css', array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'twstudio_script_enqueue' );



/**
 * Add theme support
 */
function twstudio_theme_setup() {
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );

	//Register menus
	register_nav_menu( 'main-menu', 'Main navigation' );
}
add_action( 'init', 'twstudio_theme_setup' );



/**
 * Remove links from admin
 */
function remove_menus() {
//	remove_menu_page( 'index.php' );                  //Dashboard
	remove_menu_page( 'edit.php' );                   //Posts
//	remove_menu_page( 'upload.php' );                 //Media
	remove_menu_page( 'edit.php?post_type=page' );    //Pages
	remove_menu_page( 'edit-comments.php' );          //Comments
	remove_menu_page( 'themes.php' );                 //Appearance
//	remove_menu_page( 'plugins.php' );                //Plugins
	remove_menu_page( 'users.php' );                  //Users
	remove_menu_page( 'tools.php' );                  //Tools
}
add_action( 'admin_menu', 'remove_menus' );



/**
 * Message in admin-footer
 */
// Add you own text in admin footer
function twstudio_footer_admin() {
	echo '<a href="https://www.thomasweb.studio/" target="_blank">thomasweb.studio 🐩</a>.';
}
add_filter( 'admin_footer_text', 'twstudio_footer_admin' );



/**
 * Adds a option page in admin
 */
if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page();
}



/**
 * Adds custom message to Admin
 */
function twstudio_admin_notice() {
	?>
	<div class="notice">
			<p>Click <a href="https://webmail.domeneshop.no/" target="_blank">here</a> to check your webmail.</p>
	</div>
	<?php
}
add_action( 'admin_notices', 'twstudio_admin_notice' );
