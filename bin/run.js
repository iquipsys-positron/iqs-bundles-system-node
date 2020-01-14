let SystemBundleProcess = require('../obj/src/container/SystemBundleProcess').SystemBundleProcess;

try {
    new SystemBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}