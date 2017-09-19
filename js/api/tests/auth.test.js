import authAPI from './services/auth'

test('A failed login attempt at the API level returns an error',
() => {
  expect(authAPI('badusername', 'badpassword').toBe('error'))
})

test('A good login attempt at the API level returns helloworld',
() => {
  expect(authAPI('sconnor@finback670.com', 'Spc0708cms!').toBe('helloworld'))
})
