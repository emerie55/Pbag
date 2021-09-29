require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faBell, faEnvelope, faHome, faInfo, faKey, faLayerGroup, faLock, faPen, faPhone, faPlus, faPowerOff, faRegistered, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

library.add( faHome, faSignInAlt, faRegistered, faUser, faKey, faEnvelope, faPhone, faLock, faPowerOff, faPen, faBell, faPlus, faEdit, faLayerGroup, faTrashAlt, faBars, faInfo,)

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'PolyBag';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .component('font-awesome', FontAwesomeIcon)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
