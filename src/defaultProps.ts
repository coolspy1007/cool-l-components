import { mapValues, without } from 'lodash-es'

// 公有默认属性 interface
export interface CommonComponentProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  maxWidth: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
  cursor: string;
}

// LText 组件的默认属性 interface
export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

// LImage 组件的默认属性 interface
export interface ImageComponentProps extends CommonComponentProps {
  src: string;
}

// LShape 组件的默认属性 interface
export interface ShapeComponentProps extends CommonComponentProps {
  backgroundColor: string;
}

export type AllComponentProps = TextComponentProps & ImageComponentProps & ShapeComponentProps

//公有默认属性
export const commonDefaultProps: CommonComponentProps = {
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
}

// LText 组件的默认属性
export const textDefaultProps: TextComponentProps = {
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
}

// LImage 组件的默认属性
export const imageDefaultProps: ImageComponentProps = {
  // basic props - font styles
  src: 'test.url',
  ...commonDefaultProps
}
// LShape 组件的默认属性
export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
}


/**
 * _.without(array, [values])
 * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较
 * 例子：
 _.without([2, 1, 2, 3], 1, 2);
 // => [3]
 *
 */
//剔除 LText 组件非样式属性的key
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType', 'url', 'text'
)

//剔除 LImage 组件非样式属性的key
export const imageStylePropNames = without(
  Object.keys(imageDefaultProps),
  'actionType', 'url', 'src'
)

//剔除 LShape 组件非样式属性的key
export const shapeStylePropsNames = without(
  Object.keys(shapeDefaultProps),
  'actionType', 'url'
)
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
export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}

// 组件属性的联合类型
export type ComponentProps = TextComponentProps | ImageComponentProps | ShapeComponentProps
export const transformToComponentProps = (props: ComponentProps) => {
  const mapProps = mapValues(props, item => {
    // console.log('!------------')
    // console.log(item.constructor as StringConstructor)
    // console.log('------------!')
    return {
      type: item.constructor as StringConstructor,
      default: item
    }

  })

  return { ...mapProps, ...isEditingProp }
}
