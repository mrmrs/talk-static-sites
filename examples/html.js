// example template
module.exports = ({
  html,
  css,
  scripts,
  title,
  meta = [],
  links = [],
  static: isStatic
}) => `<!DOCTYPE html>
<head>
  <title>{title}</title>
  ${css}
</head>
<div id=root>${html}</div>
${scripts}
`

