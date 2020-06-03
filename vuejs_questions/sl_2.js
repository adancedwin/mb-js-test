// Vue Devtools (on Chrome browser) is visible only in development mode.
// How do you enable it in production?
//
//
// Following the documentation (https://vuejs.org/v2/api/#devtools) I was able to make Vue Devtools accessible
// in Chrome and Firefox browser. Putting `Vue.config.devtools = true` in the `mounted()` hook of a Vue app
// does the trick.
// I had to use older version of chrome to test it because Vue Devtools seems to have some issues
// on the latest chrome build. Looks like some other people have a similar experience:
// https://github.com/vuejs/vue-devtools/issues/1189
// https://github.com/vuejs/vue-devtools/issues/1209
//
// Though, of course, enabling Vue Devtools in production mode generally is not a good idea. There could be a range
// of problems, from affecting performance to, I assume, potential security issues.