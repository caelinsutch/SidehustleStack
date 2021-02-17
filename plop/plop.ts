// eslint-disable-next-line import/no-extraneous-dependencies
import { NodePlopAPI } from 'plop';

module.exports = (plop: NodePlopAPI) => {
  plop.setGenerator('Component', {
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

  plop.setGenerator('Screen Component', {
    description: 'Create a component under a screen',
    prompts: [
      {
        type: 'input',
        name: 'screen',
        message: 'Which screen is this for? (i.e. PlatformScreen)',
      },
      {
        type: 'input',
        name: 'name',
        message:
          'What is your component name? Usually preface this with `Section`',
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/Screens/{{pascalCase screen}}/Components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/Screens/{{pascalCase screen}}/Components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'modify',
        path: '../src/Screens/{{pascalCase screen}}/Components/index.ts',
        transform: (template: string, { name }: { name: string }) =>
          `${template.replace(
            /\\n$/,
            ''
          )}export { default as ${name} } from './${name}';\nexport type { ${name}Props } from './${name}';\n`,
      },
    ],
  });

  plop.setGenerator('Page', {
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
