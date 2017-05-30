import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import webApp from '@/webApp'
import question from '@/view/question'
import course from '@/view/course'
import major from '@/view/course/children/major'

import school from '@/view/course/children/school'
import angular from '@/view/course/courses/angular'
import css3 from '@/view/course/courses/css3'
import h5 from '@/view/course/courses/h5'
import javascript from '@/view/course/courses/javascript'
import jquery from '@/view/course/courses/jquery'
import model from '@/view/course/courses/model'
import node from '@/view/course/courses/node'
import react from '@/view/course/courses/react'
import vue from '@/view/course/courses/vue'

import interview from '@/view/interview'
import person from '@/view/person'


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
          component: question
        },
        {
          path: 'course',
          name: 'course',
          component: course,
          children: [
            {
              path: 'major',
              name: 'major',
              component: major
            },
            {
              path: 'school',
              name: 'school',
              component: school,
              children: [
                {
                  path: 'angular',
                  name: 'angular',
                  component: angular
                },
                {
                  path: 'css3',
                  name: 'css3',
                  component: css3
                },
                {
                  path: 'h5',
                  name: 'h5',
                  component: h5
                },
                {
                  path: 'school',
                  name: 'school',
                  component: school
                },
                {
                  path: 'javascript',
                  name: 'javascript',
                  component: javascript
                },
                {
                  path: 'jquery',
                  name: 'jquery',
                  component: jquery
                },
                {
                  path: 'model',
                  name: 'model',
                  component: model
                },
                {
                  path: 'node',
                  name: 'node',
                  component: node
                },
                {
                  path: 'react',
                  name: 'react',
                  component: react
                },
                {
                  path: 'vue',
                  name: 'vue',
                  component: vue
                }
              ]


            }
          ]

        },
        {
          path: 'interview',
          name: 'interview',
          component: interview
        },
        {
          path: 'person',
          name: 'person',
          component: person
        }
      ]
    }

  ]
})
