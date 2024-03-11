import { createRouter } from "vue-router";
import AppKorzinaVue from "./components/AppKorzina"

const router = createRouter( [
    {path: '/korzina', component: AppKorzinaVue}
])

export default router;