// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';

module.exports = (plop: NodePlopAPI) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/Components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/Components/index.ts',
        transform: (template: string, { name }: { name: string }) =>
          `${template.replace(
            /\\n$/,
            ''
          )}export { default as ${name} } from './${name}';\nexport type { ${name}Props } from './${name}';\n`,
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../pages/{{lowerCase name}}.tsx',
        templateFile: 'templates/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Screens/{{pascalCase name}}Screen/{{name}}Screen.tsx',
        templateFile: 'templates/component-screen.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/Screens/{{pascalCase name}}Screen/index.tsx',
        templateFile: 'templates/index-screen.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/Screens/index.ts',
        transform: (template: string, { name }: { name: string }) =>
          `${template.replace(
            /\\n$/,
            ''
          )}export { default as ${name}Screen } from './${name}Screen';\nexport type { ${name}ScreenProps } from './${name}Screen';\n`,
      },
    ],
  });
};
