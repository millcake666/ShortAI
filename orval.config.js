module.exports = {
  'swagger-api': {
    input: `/docs/api-docs.json`, // положите сюда свой сваггер/openapi конфиг
    output: {
      target: './packages/short-ai-app/src/features/api/generated/endpoints.ts',
      schemas: './packages/short-ai-app/src/features/api/generated/models',
      client: 'react-query'
    }
  }
}
