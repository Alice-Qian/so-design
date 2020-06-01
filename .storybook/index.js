const contexts = require.context('../src/components/', true, /\.stories.tsx$/);

let stories = []

contexts.keys().forEach(component => {
  component = component.replace('./', '')
  stories.push(require('../src/components/'+component))
})

export default stories