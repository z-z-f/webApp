import Vue from 'vue'
import Router from 'vue-router'
import webApp from '@/webApp'
import question from '@/view/question'
import skill from '@/view/question/children/skill'
import intro from '@/view/question/skill/intro'
import html from '@/view/question/skill/html'
import css from '@/view/question/skill/css'
import js from '@/view/question/skill/js'
import jq from '@/view/question/skill/jq'
import node from '@/view/question/skill/node'
import angular from '@/view/question/skill/angular'
import vue from '@/view/question/skill/vue'
import react from '@/view/question/skill/react'
import man from '@/view/question/children/man'
import leave from '@/view/question/man/leave'
import pay from '@/view/question/man/pay'
import self from '@/view/question/man/self'
import work from '@/view/question/man/work'
import course from '@/view/course'
import interview from '@/view/interview'
import person from '@/view/person'
import login from '@/view/login'
import detail from '@/view/detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/webApp/question'
    },
    {
      path: '/webApp',
      redirect: '/webApp/question',
      name: 'webApp',
      component: webApp,
      children: [
        {
          path: 'question',
          name: 'question',
          redirect: '/webApp/question/skill/intro',
          component: question,
          children: [
            {
              path: 'skill',
              name: 'skill',
              redirect: '/webApp/question/skill/intro',
              component: skill,
              children: [
                {
                  path: 'intro',
                  name: 'intro',
                  component: intro
                },
                {
                  path: 'html',
                  name: 'html',
                  component: html
                },
                {
                  path: 'css',
                  name: 'css',
                  component: css
                },
                {
                  path: 'js',
                  name: 'js',
                  component: js
                },
                {
                  path: 'jq',
                  name: 'jq',
                  component: jq
                },
                {
                  path: 'node',
                  name: 'node',
                  component: node
                },
                {
                  path: 'angular',
                  name: 'angular',
                  component: angular
                },
                {
                  path: 'vue',
                  name: 'vue',
                  component: vue
                },
                {
                  path: 'react',
                  name: 'react',
                  component: react
                }
              ]
            },
            {
              path: 'man',
              name: 'man',
              redirect: '/webApp/question/man/self',
              component: man,
              children: [
                {
                  path: 'leave',
                  name: 'leave',
                  component: leave
                },
                {
                  path: 'pay',
                  name: 'pay',
                  component: pay
                },
                {
                  path: 'self',
                  name: 'self',
                  component: self
                },
                {
                  path: 'work',
                  name: 'work',
                  component: work
                }
              ]
            }
          ]
        },
        {
          path: 'course',
          name: 'course',
          component: course
        },
        {
          path: 'interview',
          name: 'interview',
          component: interview
        },
        {
          path: 'person',
          name: 'person',
          component: person,
          beforeEnter: (to,from,next) => {
            var user = window.localStorage["userMsg"];
            if(!user){
              next({path:'/login',query:{"to":to.name}});
            }else{
              next();
            }
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
