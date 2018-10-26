export default function (editor, opt = {}) {
  const trm = editor.TraitManager;
  const textTrat = trm.getType('text');

  const bm = editor.BlockManager;

  trm.addType('content', {
    events: {
      'keyup': 'onChange',
    },

    onValueChange: function () {
      var md = this.model;
      var target = md.target;
      target.set('content', md.get('value'));
    },

    getInputEl: function () {
      if (!this.inputEl) {
        this.inputEl = textTrat.prototype.getInputEl.bind(this)();
        this.inputEl.value = this.target.get('content');
      }
      return this.inputEl;
    }
  });

  trm.addType('class', {
    onValueChange() {
      var parentModel = this.target.collection.parent.em;
      var traget = this.target;
      const sm = parentModel.get('SelectorManager');
      var traitModel = this.model;
      var label = traitModel.get('value');
      var compCls = traget.get('classes');
      compCls.forEach(element => {
        if (element.id == this.model._previousAttributes.value) {
          compCls.remove(element);
        }
      });
      console.log('change button style to', label);
      if (label) {
        $.each(label.split(" "), function(i, v) {
          compCls.add(sm.add(v));
        });
        parentModel.trigger('targetClassAdded');
      }
    },

    getInputEl() {
      if (!this.$input) {
        var md = this.model;
        var opts = md.get('options') || [];
        var input = '<select>';

        if (opts.length) {
          opts.forEach(el => {
            var name, value, style;
            var attrs = '';
            if (typeof el === 'string') {
              name = el;
              value = el;
            } else {
              name = el.name ? el.name : el.value;
              value = el.value.replace(/"/g, '&quot;');
              style = el.style ? el.style.replace(/"/g, '&quot;') : '';
              attrs += style ? 'style="' + style + '"' : '';
            }
            input +=
              '<option value="' + value + '" ' + attrs + '>' + name + '</option>';
          });
        }

        input += '</select>';
        this.input = input;
        this.$input = $(this.input);

        var target = this.target;
        var name = md.get('name');
        var val = md.get('value');

        if (md.get('changeProp')) {
          val = val || target.get(name);
        } else {
          var attrs = target.get('attributes');
          val = attrs[name];
        }

        if (val) this.$input.val(val);
      }

      return this.$input.get(0);
    }
  });

  trm.addType('createPage', {
    events: {
      'keyup': 'onChange',
    },

    onValueChange: function () {
      console.log('tabTrait', this);
      var traitModel = this.model;
      var pageIdBeforeModifed = traitModel._previousAttributes.value.substr(1);
      var pageId = traitModel.get('value').substr(1);
      var target = traitModel.target;
      // 设置目标model的href
      target.setAttributes({ href: traitModel.get('value') });
      // 获取父元素
      var appPage = target.collection.parent.collection.parent.collection;
      // 寻找tabs
      appPage.forEach(ele => {
        var classes = ele.get('classes');
        classes.forEach(cl => {
          if (cl.get('name') == 'tabs-animated-wrap') {
            console.log('tabs animated wrap', ele)
            ele.view.childrenView.collection.forEach(tab => {
              var pageExsited = false;
              var pages = tab.view.childrenView.collection;
              pages.forEach(page => {
                console.log('page', page.attributes.attributes.id);
                console.log(`${pageIdBeforeModifed} change to ${pageId}`);
                if (page.attributes.attributes.id == pageIdBeforeModifed) {
                  page.setAttributes({ id: pageId });
                  pageExsited = true;
                }
              });
              if (!pageExsited) {
                pages.add(`<div id=${pageId} class='page-content tab'>
                          <div class='block'>
                              <p>${pageId} content</p>
                          </div>
                          </div>`);
              }
            });
          }
        })
      });
    },

    getInputEl: function () {
      if (!this.inputEl) {
        this.inputEl = textTrat.prototype.getInputEl.bind(this)();
      }
      return this.inputEl;
    }
  });
}
