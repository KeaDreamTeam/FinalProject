import request from 'superagent'

export const postContactForm = (form, callback) => {
  request
    .post('/contact')
    .send(form)
    .end((err, res) => {
      if (err) callback(err, res.body)
      else callback(null, res.body)
    })
}
