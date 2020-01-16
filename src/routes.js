import list_records from './components/list_records.vue'
import make_list from './components/make_list.vue'
import test_record from './components/test_record.vue'


export default[
    { path:"/make", component:make_list},
    { path:"/list", component:list_records},
    { path:"/mytest", component:test_record}

]