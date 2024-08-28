<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=):H*BT0+*z8w|n(M>iF?x0<~=5l#~LyX9.,@Njaf8d/OK5ii+}*+E;:[snkL b7' );
define( 'SECURE_AUTH_KEY',  '$#mgW(ET2eNb;%/(R>8vCgx|G4vL|v%t0&IB~ZzI#`S^3sS4W~fv^c!:jsxRCuN9' );
define( 'LOGGED_IN_KEY',    'H)(*{ThL=!sW,|{e9z_y*1_(lJB<~Xt dn%NAGQ.moR)RL}FN1WOBCPe$t({cA5 ' );
define( 'NONCE_KEY',        'B!=3Ujm*> d?wd+,d2FS](3a:9?/{Ua[n`C1CK`6$=4ILDTIe9HoKW7<v%DvG/|p' );
define( 'AUTH_SALT',        ')R]L9i_b,+~aCai6:oGo<$DfE =-mbYKixbA5B,_^K*jw/,cILY|2`u@XWBHEb8$' );
define( 'SECURE_AUTH_SALT', '2muw~G$?.1&u]>E]3J@Q-SVaK:f`k%9JN@C)-TX`Ro/r}I)P~oyU3AB+Xh60$DDr' );
define( 'LOGGED_IN_SALT',   'GRQj!Z5~J?Ck}>nu@T!Vb,/c!J{9~3wyH_52],)w.GPfo4jaJ#y`//<kuS,&*3d:' );
define( 'NONCE_SALT',       '=j?6z}:3V8ol?$3D{SeXmu/x {N.V<-jJe(iIGwHC?T32[yiOt{fmQR}Tvx^/6H!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
