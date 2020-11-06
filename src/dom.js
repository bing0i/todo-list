import {domProject} from './domProject';
import {domTodoItem} from './domTodoItem';
import {domModal} from './domModal';

const dom = (() => {

    const init = () => {
        domProject.init();
        domTodoItem.init();
        domModal.init();
    };

    return {
        init,
    }
})();

export {dom}