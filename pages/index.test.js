import test from 'ava'
import jsdom from 'jsdom'
import { createServer } from 'http'
import { resolve } from 'path'

let nuxt = null
let server = null

test.before('Init Nuxt.js', (t) => {
  const Nuxt = require('nuxt')
  const options = {
    rootDir: resolve(__dirname, '..'),
    dev: false
  }
  nuxt = new Nuxt(options)
  return nuxt.build()
    .then(function() {
      server = createServer((req, res) => nuxt.render(req, res))
      server.listen(4000, 'localhost')
    })
})

test('Route / exits and render HTML', async t => {
  let context = {}
  const {html} = await nuxt.renderRoute('/', context)
  t.true(html.includes('img/logo.png'))
  t.is(context.nuxt.error, null)
  t.is(context.nuxt.data[0].message, 'My Message 2')
})

test('Route / exits and render HTML', async t => {
  const window = await nuxt.renderAndGetWindow(jsdom, 'http://localhost:4000/')
  const element = window.document.querySelector('.title')
  t.not(element, null)
  console.log(element.textContent)
  t.is(element.textContent, 'My Message 2')
  t.is(window.getComputedStyle(element).color, 'rgb(80, 81, 83)')
})

test.after('Closing server and nuxt.js', t => {
  server.close()
  nuxt.close()
})