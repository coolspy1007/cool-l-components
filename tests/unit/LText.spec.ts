import { shallowMount } from '@vue/test-utils'
import LText from '@/components/LText'
import { textDefaultProps } from '@/defaultProps'

describe('LText 组件测试', () => {
  const { location } = window
  beforeEach(() => {
    // 改变 window.location.href 默认属性，让他变成一个可写的字符串，用于测试是否跳转链接
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: ''
      }
    })
  })
  afterEach(()=>{
    // 每个 case 结束后，还原 window.location
    window.location = location
  })
  it('LText 组件默认属性应该正常', () => {
    const text = 'hello LText'
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        text,
      }
    })
    //
    expect(wrapper.text()).toBe(text)
    // console.log('props', wrapper.props())
    // wrapper.element.tagName 会将所有标签元素大写
    expect(wrapper.element.tagName).toBe('DIV')
    // 取出组件 style 样式属性，应该包含某些默认的 css 样式
    const attrs = wrapper.attributes()
    // console.log('attrs', attrs)
    const style = attrs.style
    expect(style.includes('font-size')).toBeTruthy()
    // actionType 被样式属性剔除，不属于样式属性
    expect(style.includes('actionType')).toBeFalsy()
    const props = wrapper.props()
    // 默认应该是 非编辑状态
    expect(props.isEditing).toBeFalsy()
  })
  it('LText 默认不能跳转', async () => {
    const url = 'test.url'
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        actionType: 'url',
        url,
        tag: 'h1'
      }
    })
    expect(wrapper.element.tagName).toBe('H1')
    await wrapper.trigger('click') // 触发点击组件
    expect(window.location.href).toBe(url) // 浏览器地址是否改变（测试是否跳转）
  })

  it('LText 在编辑状态不能跳转', async () => {
    const url = 'test.url'
    const wrapper = shallowMount(LText, {
      props: {
        ...textDefaultProps,
        actionType: 'url',
        url,
        tag: 'p',
        isEditing: true
      }
    })
    expect(wrapper.element.tagName).toBe('P')
    await wrapper.trigger('click') // 触发点击组件
    expect(window.location.href).not.toBe(url) // 编辑状态不会跳转
  })
})
