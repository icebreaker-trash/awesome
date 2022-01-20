import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import {parse} from '@vue/compiler-sfc'
const app = createSSRApp({
  data() {
    return {
      user: 'John Doe'
    }
  },
  template: `<div>Current user is: {{ user }}</div>`
})

const appContent = await renderToString(app)

console.log(appContent)