/* eslint-env jest */
const supertest = require('supertest')
const jestTimeoutMS = require('config').get('jestTimeoutMS')

test('can GET a REST API and check response using approval style', async () => {
  const request = supertest('https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io')
  const response = await request.get('/posts')
  expect(response.status).toBe(200)
  expect(response.body).toMatchSnapshot()
}, jestTimeoutMS)

test('can GET a REST API and check response using assertion style', async () => {
  const request = supertest('https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io')
  const response = await request.get('/posts')
  expect(response.status).toBe(200)
  expect(response.body.length).toBe(3)
  expect(response.body[0].id).toBe(1)
  expect(response.body[0].title).toBe('Post 1')
  expect(response.body[1].id).toBe(2)
  expect(response.body[1].title).toBe('Post 2')
  expect(response.body[2].id).toBe(3)
  expect(response.body[2].title).toBe('Post 3')
}, jestTimeoutMS)

test('can POST a REST API and check response using approval style', async () => {
  const request = supertest('https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io')
  const response = await request.post('/posts').send({ title: 'Post 4' })
  expect(response.status).toBe(201)
  expect(response.body).toMatchSnapshot()
}, jestTimeoutMS)

test('can POST a REST API and check response using assertion style', async () => {
  const request = supertest('https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io')
  const response = await request.post('/posts').send({ title: 'Post 4' })
  expect(response.status).toBe(201)
  expect(response.body.id).toBe(4)
  expect(response.body.title).toBe('Post 4')
}, jestTimeoutMS)
