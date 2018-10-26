import {
    EZAPPX_COMPONENT_TYPE,
} from './consts'

export default (editor, config = {}) => {
    const bm = editor.BlockManager;

    // block category
    const CATEGORY_LAYOUT = 'Layout';
    const CATEGORY_BASIC_UI = 'Basic UI';
    const CATEGORY_FORM = 'Form';

    bm.add('f7-init', {
        label: 'Init',
        attributes: { class: 'fa fa-bug' },
        category: CATEGORY_LAYOUT,
        content: `
                <div ${EZAPPX_COMPONENT_TYPE}='f7-init' id=app>
                    <!-- Statusbar overlay -->
                    <div class='statusbar'></div>

                    <!-- Your main view, should have 'view-main' class -->
                    <div class='view view-main'>
                        <!-- Initial Page, 'data-name' contains page name -->
                        <div data-name='home' class='page'>
                            <a>Drop layout here</a>
                        </div>
                    </div>
                </div>
                `
    });

    bm.add('f7-tabbar', {
        label: 'Tabbar',
        attributes: { class: 'fa fa-th-large' },
        category: CATEGORY_LAYOUT,
        draggable: '*',
        content: `
                <div class='navbar'>
                    <div class='navbar-inner sliding'>
                        <div class='title'>Animated Tabs</div>
                    </div>
                </div>
                <div class='toolbar tabbar'>
                    <div class='toolbar-inner'>
                        <a href='#tab-1' class='tab-link tab-link-active' ${EZAPPX_COMPONENT_TYPE}='f7-tab'>Tab 1</a>
                        <a href='#tab-2' class='tab-link' ${EZAPPX_COMPONENT_TYPE}='f7-tab'>Tab 2</a>
                    </div>
                </div>
                <div class='tabs-animated-wrap'>
                    <div class='tabs'>
                        <div id="tab-1" class="page-content tab tab-active">
                            <div class="block">
                            <p>Tab 1 content</p>
                            </div>
                        </div>
                        <div id="tab-2" class="page-content tab">
                            <div class="block">
                            <p>Tab 2 content</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
    });

    bm.add('f7-tab', {
        label: 'Tab',
        attributes: { class: 'fa fa-square' },
        category: CATEGORY_LAYOUT,
        content: `
                <a href='#tab-' class='tab-link' ${EZAPPX_COMPONENT_TYPE}='f7-tab'>New Tab</a>
                `
    });

    bm.add('f7-block', {
        label: 'Block',
        attributes: { class: 'fa fa-plus-square-o' },
        category: CATEGORY_LAYOUT,
        content: `
                <div class="block-title">Columns with gap</div>
                    <div class="block">
                        <a>Drop layout here</a>
                    </div>
                </div>
                `
    });


    bm.add('f7-row', {
        label: 'Row',
        attributes: { class: 'fa fa-arrows-h' },
        category: CATEGORY_LAYOUT,
        content: `
            <div class="row">
                <div ${EZAPPX_COMPONENT_TYPE}='f7-col'>col-1</div>
                <div ${EZAPPX_COMPONENT_TYPE}='f7-col'>col-2</div>
            </div>
                `
    });

    bm.add('f7-col', {
        label: 'Col',
        attributes: { class: 'fa fa-arrows-v' },
        category: CATEGORY_LAYOUT,
        content: `
                <div class="col" ${EZAPPX_COMPONENT_TYPE}='f7-col'>col</div>
                `
    });

    bm.add('f7-text', {
        label: 'Text',
        category: CATEGORY_BASIC_UI,
        attributes: { class: 'fa fa-text-width' },
        content: {
            type: 'text',
            content: 'Insert your text here',
            // style: { padding: '10px' },
            activeOnRender: 1
        },
    });

    bm.add('f7-link', {
        label: 'Link',
        category: CATEGORY_BASIC_UI,
        attributes: { class: 'fa fa-link' },
        content: {
            type: 'link',
            content: 'Link',
        },
    });

    bm.add('f7-image', {
        label: 'Image',
        category: CATEGORY_BASIC_UI,
        attributes: { class: 'fa fa-image' },
        content: {
            style: { color: 'black' },
            type: 'image',
            activeOnRender: 1
        },
    });

    bm.add('f7-video', {
        label: 'Video',
        category: CATEGORY_BASIC_UI,
        attributes: { class: 'fa fa-youtube-play' },
        content: {
            type: 'video',
            src: 'img/video2.webm',
            style: {
                height: '350px',
                width: '100%',
            },
            activeOnRender: 1
        },
    });

    bm.add('f7-button', {
        label: 'Button',
        attributes: { class: 'fa fa-square' },
        category: CATEGORY_BASIC_UI,
        content: `
                <button ${EZAPPX_COMPONENT_TYPE}='f7-button'>Button</button>
                `
    });

    bm.add('f7-badge', {
        label: 'Badge',
        attributes: { class: 'fa fa-dot-circle-o' },
        category: CATEGORY_BASIC_UI,
        content: `
                <span class="badge" ${EZAPPX_COMPONENT_TYPE}='f7-badge'>0</span>
                `
    });

    bm.add('f7-form', {
        label: 'Form',
        attributes: { class: 'fa fa-newspaper-o' },
        category: CATEGORY_FORM,
        content: `
        <form class="list" id="my-form">
        <ul>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Name</div>
                <div class="item-input-wrap">
                  <input type="text" name="name" placeholder="Your name">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">E-mail</div>
                <div class="item-input-wrap">
                  <input type="email" name="email" placeholder="E-mail">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-label">Gender</div>
                <div class="item-input-wrap">
                  <select name="gender">
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">Toggle</div>
                <div class="item-after">
                  <label class="toggle toggle-init">
                    <input type="checkbox" name="toggle" value="yes"><i class="toggle-icon"></i>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
      <div class="block block-strong row">
        <div class="col"><a class="button convert-form-to-data" href="#" ${EZAPPX_COMPONENT_TYPE}='f7-get-form-button'>Get Data</a></div>
        <div class="col"><a  href="#" ${EZAPPX_COMPONENT_TYPE}='f7-fill-form-button'>Fill Form</a></div>
      </div>`
    });
}
