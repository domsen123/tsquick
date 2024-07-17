import antfu from '@antfu/eslint-config'

export default antfu(
  {
    markdown: true,
    vue: true,
    typescript: true,
    rules: {
      'node/prefer-global/process': 'off',
      'antfu/top-level-function': 'off',
      'no-console': 'off',
      'vue/multi-word-component-names': 0,
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 0,
      'vue/html-self-closing': ['error', {
        html: {
          void: 'any',
          normal: 'any',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/custom-event-name-casing': 'off',
    },
  },
)
