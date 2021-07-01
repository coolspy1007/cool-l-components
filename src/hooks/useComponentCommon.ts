import { TextComponentProps } from '@/defaultProps'
import { pick } from 'lodash-es'
import { computed } from 'vue'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
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
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon
