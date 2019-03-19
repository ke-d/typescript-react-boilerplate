const { generate } = require('graphql-code-generator');

async function main() {
  await generate(
    {
      schema: [process.env.GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql'],
      documents: ['./src/graphql/*.ts'],
      config: {},
      overwrite: true,
      generates: {
        './src/generated-models.tsx': {
          config: {},
          plugins: [
            'typescript-common',
            'typescript-client',
            'typescript-react-apollo',
          ],
        },
      },
      require: [],
    },
    true
  );
}

main();
