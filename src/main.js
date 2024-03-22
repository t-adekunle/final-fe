import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
const app = createApp(App)
const globalOptions =
     {
        debug: 'info',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
          ],
        },
        placeholder: 'this is in main...',
        readOnly: false,
        theme: 'snow',
      }
QuillEditor.props.globalOptions.default = () => globalOptions
app.component('QuillEditor', QuillEditor)
app.use(router)
app.mount('#app')