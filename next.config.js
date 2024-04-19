const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
        mongodb_password: '2YkcXq43KyPk0vqp',
        mongodb_username: 'maximilian',
      },
    }
  }

  return {
    env: {
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
      mongodb_password: '2YkcXq43KyPk0vqp',
      mongodb_username: 'maximilian',
    },
  }
}
