module.exports = {
  'swagger-api': {
    input: `http://151.248.122.104:8000/openapi.json`, // положите сюда свой сваггер/openapi конфиг
    output: {
      target: './packages/short-ai-app/src/features/api/generated/endpoints.ts',
      schemas: './packages/short-ai-app/src/features/api/generated/models',
      client: 'react-query'
    }
  }
}
