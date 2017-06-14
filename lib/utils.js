'use strict';
const path = require('path');
const fs = require('fs');
exports.clearConfig = config => {
  let manifestPath = config.build.manifest || 'config/manifest.json';
  if (!path.isAbsolute(manifestPath)) {
    manifestPath = path.join(config.baseDir, manifestPath);
  }
  try {
    fs.unlinkSync(manifestPath);
  } catch (e) {

    /* empty */
  }

  let buildConfigPath = config.build.buildConfig || 'config/buildConfig.json';
  if (!path.isAbsolute(buildConfigPath)) {
    buildConfigPath = path.join(config.baseDir, buildConfigPath);
  }
  try {
    fs.unlinkSync(buildConfigPath);
  } catch (e) {

    /* empty */
  }
};
