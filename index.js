const TEMPLATE_RE = /<template>([\w\W]*)?<\/template>/;
const SCRIPT_RE = /<script>([\w\W]*)?<\/script>/;

module.exports = function(source) {
  let template = source.match(TEMPLATE_RE);
  template = template ? template[1].trim() : '<div></div>';
  // 过滤换行和标签引号
  template = template.replace(/\r\n/g, '').replace(/"|'/g, "\\'");
  let script = source.match(SCRIPT_RE);
  script = script ? script[1].replace('export default', '').trim() : '{}';
  script = `var option = ${script};`.replace(/\r\n/g, '');

  // webpack loader 需要返回一个可执行的js模块代码
  const fileContent = `
    import Vue from 'vue/dist/vue.esm';
    import React from 'react';
    // 返回一个函数式组件
    export default props => {
      const el = React.useRef(null);
      React.useEffect(() => {
        const app = new Function('Vue', '${script}; return new Vue(Object.assign({ template: "${template}" }, option))')(Vue);
        app.$mount(el.current);
        return () => app.$destroy();
      });

      return React.createElement(
        'div',
        null,
        React.createElement('div', { ref: el })
      )
    };
  `
  return fileContent;
}