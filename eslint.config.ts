import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import { importX } from 'eslint-plugin-import-x'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['**/dist/', '**/node_modules/']),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    plugins: {
      react,
      prettier,
      perfectionist,
      import: importX,
    },
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      reactRefresh.configs.vite,
      reactHooks.configs.flat.recommended,
    ],
  },
  {
    // common
    rules: {
      'prefer-template': 2,
      'arrow-body-style': 2,
      '@typescript-eslint/no-non-null-assertion': 2,
    },
  },
  {
    // prettier
    rules: {
      'prettier/prettier': 2,
    },
  },
  {
    // import
    rules: {
      'import/first': 2,
      'import/newline-after-import': 2,
    },
  },
  {
    // react
    rules: {
      'react/self-closing-comp': [
        2,
        {
          html: true,
          component: true,
        },
      ],
    },
  },
  {
    // perfectionist
    rules: {
      'perfectionist/sort-objects': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-exports': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-interfaces': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-imports': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        2,
        {
          order: 'asc',
          newlinesBetween: 1,
          type: 'line-length',
          groups: [
            ['type-builtin', 'value-builtin'],
            ['type-external', 'value-external'],
            ['type-internal', 'value-internal', 'tsconfig-path'],
            [
              'type-parent',
              'type-index',
              'value-index',
              'type-sibling',
              'value-parent',
              'value-sibling',
            ],
          ],
        },
      ],
    },
  },
  prettierConfig,
  {
    // formatting fix
    rules: {
      curly: 2,
    },
  },
)
