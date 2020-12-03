import('./scss/index.scss')
import {Cards} from '@/Components/Cards/Cards';
import {Search} from '@/Components/Search';
import {Navbar} from '@/Components/Navbar';
import {App} from '@core/App';

const application = new App('#app', {
    components: [Navbar, Search, Cards]
})

application.render()


document.addEventListener('DOMContentLoaded', () => {

})
