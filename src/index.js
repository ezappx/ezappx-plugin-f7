import loadComponents from './components';
import loadBlocks from './blocks';
import loadTraits from './traits';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
    }, ...opts
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add traits
  loadTraits(editor, options);

  // editor.on('load', () => {
  //   var dom = editor.DomComponents.getComponents();
  //   // Dom中不存在元素时自动添加f7初始化Block
  //   if (dom.length == 0) {
  //     var initF7 = editor.BlockManager.get('f7-init');
  //     editor.DomComponents.addComponent(initF7.attributes.content);
  //     console.log('init f7 framework');
  //   }
  // })
};
