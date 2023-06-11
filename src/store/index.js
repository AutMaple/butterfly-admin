import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const context = require.context("./modules", false, /\.js$/);

const modules = {};

context.keys().forEach((filePath) => {
    let moduleName = filePath.replace(/\.\/|\.js/g, "");
    modules[moduleName] = context(filePath).default;
    modules[moduleName]["namespaced"] = true;
});

export default new Vuex.Store({ modules });