var GOOGLE_SCOPES = [ 'https://www.googleapis.com/auth/drive.install',
    'https://www.googleapis.com/auth/drive' ];
var GOOGLE_DRIVE_APP_ID = "241271498917";
var DROPBOX_APP_KEY = "lq6mwopab8wskas";
var DROPBOX_APP_SECRET = "851fgnucpezy84t";
var DEFAULT_FILE_TITLE = "Title";
var GDRIVE_DEFAULT_FILE_TITLE = "New Markdown document";
var CHECK_ONLINE_PERIOD = 60000;
var AJAX_TIMEOUT = 10000;
var ASYNC_TASK_DEFAULT_TIMEOUT = 30000;
var AUTH_POPUP_TIMEOUT = 90000;
var SYNC_PERIOD = 180000;
var SYNC_PROVIDER_GDRIVE = "sync.gdrive.";
var SYNC_PROVIDER_DROPBOX = "sync.dropbox.";

// Use by Google's client.js
var delayedFunction = undefined;
function runDelayedFunction() {
    if (delayedFunction !== undefined) {
        delayedFunction();
    }
}