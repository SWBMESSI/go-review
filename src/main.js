import './assets/main.css'

import { createApp,reactive } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$globalData = reactive({ nodeNowGlobal: null });

app.mount('#app')
export default app;
