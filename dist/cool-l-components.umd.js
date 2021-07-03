(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CoolLComponents = {}, global.Vue, global._));
}(this, (function (exports, vue, lodashEs) { 'use strict';

  const useComponentCommon = (props, picks) => {
      /**
       * _.pick(object, [props])
       * 创建一个从 object 中选中的属性的对象。
       * 例子：
       var object = { 'a': 1, 'b': '2', 'c': 3 };
    
       _.pick(object, ['a', 'c']);
       // => { 'a': 1, 'c': 3 }
       */
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          // 如果 actionType=url 并且 url 有值， 不是在编辑的情况下 可以跳转
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  //公有默认属性
  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '373px',
      maxWidth: '373px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'relative',
      left: '0',
      top: '0',
      right: '0',
      cursor: ''
  };
  // LText 组件的默认属性
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  // LImage 组件的默认属性
  const imageDefaultProps = {
      // basic props - font styles
      src: 'test.url',
      ...commonDefaultProps
  };
  // LShape 组件的默认属性
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  /**
   * _.without(array, [values])
   * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较
   * 例子：
   _.without([2, 1, 2, 3], 1, 2);
   // => [3]
   *
   */
  //剔除 LText 组件非样式属性的key
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  //剔除 LImage 组件非样式属性的key
  const imageStylePropNames = lodashEs.without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
  //剔除 LShape 组件非样式属性的key
  const shapeStylePropsNames = lodashEs.without(Object.keys(shapeDefaultProps), 'actionType', 'url');
  /**
   * _.mapValues(object, [iteratee=_.identity])
   * 创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。
   例子：
   var users = {
          'fred':    { 'user': 'fred',    'age': 40 },
          'pebbles': { 'user': 'pebbles', 'age': 1 }
        };

   _.mapValues(users, function(o) { return o.age; });
   // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  /*将属性对象转换成以下形式，便于组件props使用
      text: {
        type: String
      },
      fontSize: {
        type: String
      },
   */
  // 是否正在编辑，编辑中不执行任何 action
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, item => {
          // console.log('!------------')
          // console.log(item.constructor as StringConstructor)
          // console.log('------------!')
          return {
              type: item.constructor,
              default: item
          };
      });
      return { ...mapProps, ...isEditingProp };
  };

  const textProps = transformToComponentProps(textDefaultProps);
  var script$2 = vue.defineComponent({
      name: 'l-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...textProps
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-6bf95b7a");

  const render$2 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: _ctx.styleProps,
      class: "l-text-component",
      onClick: vue.withModifiers(_ctx.handleClick, ["prevent"])
    }, {
      default: _withId$1(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  });

  script$2.render = render$2;
  script$2.__scopeId = "data-v-6bf95b7a";
  script$2.__file = "src/components/LText/LText.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps$1 = transformToComponentProps(imageDefaultProps);
  // array that contains style props
  var script$1 = vue.defineComponent({
      name: 'l-image',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-1e970aa2");

  const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("img", {
      style: _ctx.styleProps,
      class: "l-image-component",
      onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, ["src"]))
  });

  script$1.render = render$1;
  script$1.__scopeId = "data-v-1e970aa2";
  script$1.__file = "src/components/LImage/LImage.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  const defaultProps = transformToComponentProps(shapeDefaultProps);
  // array that contains style props
  var script = vue.defineComponent({
      name: 'l-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          // 重用并且简化
          // 抽离并且获得 styleProps
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropsNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("div", {
      style: _ctx.styleProps,
      class: "l-shape-component",
      onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/LShape/LShape.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.LImage = script$1;
  exports.LShape = script;
  exports.LText = script$2;
  exports.default = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
