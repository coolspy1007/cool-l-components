import { ComponentProps } from '@/defaultProps'
import { pick } from 'lodash-es'
import { computed } from 'vue'

const useComponentCommon = (
  props: Readonly<Partial<ComponentProps & { isEditing: boolean }>>,
  picks: string[]
) => {
  /**
   * _.pick(object, [props])
   * 创建一个从 object 中选中的属性的对象。
   * 例子：
   var object = { 'a': 1, 'b': '2', 'c': 3 };

   _.pick(object, ['a', 'c']);
   // => { 'a': 1, 'c': 3 }
   */
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    // 如果 actionType=url 并且 url 有值， 不是在编辑的情况下 可以跳转
    if (props.actionType === 'url' && props.url && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon
