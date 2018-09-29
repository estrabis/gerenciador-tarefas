import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tarefas from '@/pages/tarefas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//define a rota que deve sser acessada pelo browser
      name: 'HelloWorld',//da o nome da rota
      component: HelloWorld //componente que deve ser "injetado" na pagina
    },
    {
      path: '/tarefas',
      name: 'Tarefas',
      component: Tarefas 
    }
  ]
})
