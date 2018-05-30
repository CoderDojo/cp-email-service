const emailService = require('pnp-email-service')
const config = {
  /* Check the configuration options below */
  missingLanguageFallback: () => {
    return 'en_US';
  },
  formatFunction: (template, target, format, type, lang) => {
    return format ? `${template}-${lang}/${format}.${type}` : `${template}-${lang}/${target}.${type}`; 
  },
}
const server = emailService.startServer(config, () => {
  const port = server.address().port
  console.log(`Listening on port ${port}! Send an HTTP POST to http://127.0.0.1:${port}/email/send for sending an email`)
})
