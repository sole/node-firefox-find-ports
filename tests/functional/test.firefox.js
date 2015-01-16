'use strict';

var mozillaDownload = require('mozilla-download');
var tmpPath = 'tmp'; // TODO use a proper tmp folder
var downloadOptions = { // TODO it might be interesting to run this against various versions in the future
  branch: 'nightly',
  channel: 'prerelease',
  product: 'firefox',
  host: 'ftp.mozilla.org'
};

// Could not run chrome debugger! You need the following prefs to be set to true:
// devtools.debugger.remote-enabled, devtools.debugger.chrome-enabled, devtools.chrome.enabled
// firefox -profile; pkill firefox; cat myprefs >> profile/prefs.js; firefox -profile

module.exports = {
  setUp: function(callback) {

    mozillaDownload(tmpPath, downloadOptions, function(err, installPath) {
      console.log('installed', err, installPath);
      callback();
    });

  },
  tearDown: function(callback) {
    // TODO delete temp files
    callback();
  },
  test1: function(test) {
    test.equals('foo', 'foo');
    test.done();
  }
};
