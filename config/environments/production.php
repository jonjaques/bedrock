<?php
/* Production */
ini_set('display_errors', 0);
define('WP_DEBUG_DISPLAY', false);
define('SCRIPT_DEBUG', false);
define('DISALLOW_FILE_MODS', true); // this disables all file modifications including updates and update notifications

if ( ! empty( getenv('CLEARDB_DATABASE_URL') ) ) {
  $heroku_db = parse_url( getenv('CLEARDB_DATABASE_URL') );
  define('DB_NAME',           trim($heroku_db["path"], "/"));
  define('DB_USER',           $heroku_db["user"]);
  define('DB_PASSWORD',       $heroku_db["pass"]);
  define('DB_HOST',           $heroku_db["host"]);
}