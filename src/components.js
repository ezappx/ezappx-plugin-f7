import {
  EZAPPX_COMPONENT_TYPE
} from './consts'

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  // 编辑显示文本
  domc.addType('defualtContent', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        traits: [{
          type: 'content',
          label: '文本',
          name: 'text',
        }]
      }
    }),

    // Define the View
    view: defaultView,
  });

  var defaultConentType = domc.getType('defualtContent');
  var defaultConentModel = defaultConentType.model;
  var defaultConentView = defaultConentType.view;


  // 初始化框架
  domc.addType('f7-init', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        script: function () {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.innerHTML = `
          var app = new Framework7({
            root: '#app',
            name: 'config.appName',
            id: 'com.ezappx.config.appName',
            panel: {
                swipe: 'left',
            },
          });`
          $("head").append(script);

        }
      }
    },
      {
        isComponent: function (el) {
          if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-init') {
            return { type: 'f7-init' };
          }
        },
      }),

    // Define the View
    view: defaultView,
  });

  // tab
  // TODO 拖入画布时清空画布内容
  domc.addType('f7-tab', {
    model: defaultConentModel.extend({
      defaults: {
        ...defaultConentModel.prototype.defaults,
        traits: defaultConentModel.prototype.defaults.traits.concat([{
          type: 'createPage',
          label: 'Page Id',
          name: 'href',
        }])
      }
    },
      {
        isComponent: function (el) {
          if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-tab') {
            return { type: 'f7-tab' };
          }
        },
      }),

    // Define the View
    view: defaultView,
  });

  // col
  domc.addType('f7-col', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        traits: [{
          type: 'text',
          label: '占比',
          name: 'class',
        }]
      }
    },
      {
        isComponent: function (el) {
          if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-col') {
            return { type: 'f7-col' };
          }
        },
      }),

    // Define the View
    view: defaultView,
  });

  // button
  domc.addType('f7-button',
    {
      model: defaultConentModel.extend(
        {
          defaults: {
            ...defaultConentModel.prototype.defaults,
            draggable: '*',
            droppable: true,
            tagName: 'button',
            traits: defaultConentModel.prototype.defaults.traits.concat([{
              type: 'text',
              label: '目标地址',
              name: "formaction",
            }, {
              type: 'class',
              label: '按钮样式',
              name: 'class',
              options: [
                { value: '', name: '默认' },
                { value: 'button-fill', name: '实色' },
                { value: 'button-raised', name: '阴影' },
                // { value: 'button-raised button-fill', name: '实色阴影按钮' },
              ],
            }
            ]),
          },
        },
        {
          isComponent: function (el) {
            if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-button') {
              return { type: 'f7-button' };
            }
          },
        }),

      view: defaultConentView.extend({
        events: {
          'click': 'handleClick'
        },

        init() {
          const sm = this.model.em.get('SelectorManager');
          this.model.get('classes').add(sm.add('col'));
          this.model.get('classes').add(sm.add('button'));
        },

        handleClick(e) {
          e.preventDefault();
        }
      })
    });

  // badge
  domc.addType('f7-badge',
    {
      model: defaultConentModel.extend(
        {
          defaults: {
            ...defaultConentModel.prototype.defaults,
            draggable: '*',
            droppable: false,
            traits: defaultConentModel.prototype.defaults.traits.concat([{
              type: 'class',
              label: '样式',
              name: 'class',
              options: [
                { value: '', name: '默认' },
                { value: 'color-red', name: '红色' },
                { value: 'color-blue', name: '蓝色' },
                { value: 'color-green', name: '绿色' },
              ],
            }]),
          },
        },
        {
          isComponent: function (el) {
            if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-badge') {
              return { type: 'f7-badge' };
            }
          },
        }),

      view: defaultConentView,
    });

  // form button
  domc.addType('f7-fill-form-button',
    {
      model: defaultConentModel.extend(
        {
          defaults: {
            ...defaultConentModel.prototype.defaults,
            script: function () {
              var $$ = Dom7;
              $$('.fill-form-from-data').on('click', function () {
                var formData = {
                  'name': 'Ezappx',
                  'email': 'dev@ezappx.com',
                  'gender': 'female',
                  'toggle': ['yes'],
                }
                app.form.fillFromData('#my-form', formData);
              });
            },
            traits: defaultConentModel.prototype.defaults.traits.concat([{
              type: 'class',
              label: '按钮样式',
              name: 'class',
              options: [
                { value: '', name: '默认' },
                { value: 'button-fill', name: '实色' },
                { value: 'button-raised', name: '阴影' },
              ],
            }
            ])
          },
        },
        {
          isComponent: function (el) {
            if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-fill-form-button') {
              return { type: 'f7-fill-form-button' };
            }
          },
        }),

      view: defaultConentView.extend({
        init() {
          const sm = this.model.em.get('SelectorManager');
          this.model.get('classes').add(sm.add('fill-form-from-data'));
          this.model.get('classes').add(sm.add('button'));
        },
      })
    });

  // form button
  domc.addType('f7-get-form-button',
    {
      model: defaultConentModel.extend(
        {
          defaults: {
            ...defaultConentModel.prototype.defaults,
            script: function () {
              var $$ = Dom7;

              $$('.convert-form-to-data').on('click', function () {
                var formData = app.form.convertToData('#my-form');
                alert(JSON.stringify(formData));
              });

            },
            traits: defaultConentModel.prototype.defaults.traits.concat([{
              type: 'class',
              label: '按钮样式',
              name: 'class',
              options: [
                { value: '', name: '默认' },
                { value: 'button-fill', name: '实色' },
                { value: 'button-raised', name: '阴影' },
              ],
            }
            ])
          },
        },
        {
          isComponent: function (el) {
            if ($(el).attr(EZAPPX_COMPONENT_TYPE) == 'f7-get-form-button') {
              return { type: 'f7-get-form-button' };
            }
          },
        }),

      view: defaultConentView.extend({
        init() {
          const sm = this.model.em.get('SelectorManager');
          this.model.get('classes').add(sm.add('convert-form-to-data'));
          this.model.get('classes').add(sm.add('button'));
        },
      })
    });
}
