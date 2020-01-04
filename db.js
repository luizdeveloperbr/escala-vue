 import PouchDB from 'pouchdb-browser'
    PouchDB.plugin(require('pouchdb-find'));
    PouchDB.plugin(require('pouchdb-live-find'));
    import Vue from 'vue';
    import PouchVue from 'pouch-vue';
    
    Vue.use(PouchVue, {
      pouch: PouchDB,    // optional if `PouchDB` is available on the global object
    });