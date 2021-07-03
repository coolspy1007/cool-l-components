export interface CommonComponentProps {
    actionType: string;
    url: string;
    height: string;
    width: string;
    maxWidth: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
    cursor: string;
}
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
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export interface ShapeComponentProps extends CommonComponentProps {
    backgroundColor: string;
}
export declare type AllComponentProps = TextComponentProps & ImageComponentProps & ShapeComponentProps;
export declare const commonDefaultProps: CommonComponentProps;
export declare const textDefaultProps: TextComponentProps;
export declare const imageDefaultProps: ImageComponentProps;
export declare const shapeDefaultProps: ShapeComponentProps;
/**
 * _.without(array, [values])
 * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较
 * 例子：
 _.without([2, 1, 2, 3], 1, 2);
 // => [3]
 *
 */
export declare const textStylePropNames: string[];
export declare const imageStylePropNames: string[];
export declare const shapeStylePropsNames: string[];
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
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ComponentProps = TextComponentProps | ImageComponentProps | ShapeComponentProps;
export declare const transformToComponentProps: (props: ComponentProps) => {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: StringConstructor;
        default: string;
    };
    fontFamily: {
        type: StringConstructor;
        default: string;
    };
    fontWeight: {
        type: StringConstructor;
        default: string;
    };
    fontStyle: {
        type: StringConstructor;
        default: string;
    };
    textDecoration: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    actionType: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    paddingLeft: {
        type: StringConstructor;
        default: string;
    };
    paddingRight: {
        type: StringConstructor;
        default: string;
    };
    paddingTop: {
        type: StringConstructor;
        default: string;
    };
    paddingBottom: {
        type: StringConstructor;
        default: string;
    };
    borderStyle: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    borderWidth: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    boxShadow: {
        type: StringConstructor;
        default: string;
    };
    opacity: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    cursor: {
        type: StringConstructor;
        default: string;
    };
} | {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    actionType: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    paddingLeft: {
        type: StringConstructor;
        default: string;
    };
    paddingRight: {
        type: StringConstructor;
        default: string;
    };
    paddingTop: {
        type: StringConstructor;
        default: string;
    };
    paddingBottom: {
        type: StringConstructor;
        default: string;
    };
    borderStyle: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    borderWidth: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    boxShadow: {
        type: StringConstructor;
        default: string;
    };
    opacity: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    cursor: {
        type: StringConstructor;
        default: string;
    };
} | {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    actionType: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    paddingLeft: {
        type: StringConstructor;
        default: string;
    };
    paddingRight: {
        type: StringConstructor;
        default: string;
    };
    paddingTop: {
        type: StringConstructor;
        default: string;
    };
    paddingBottom: {
        type: StringConstructor;
        default: string;
    };
    borderStyle: {
        type: StringConstructor;
        default: string;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    borderWidth: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    boxShadow: {
        type: StringConstructor;
        default: string;
    };
    opacity: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    left: {
        type: StringConstructor;
        default: string;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    cursor: {
        type: StringConstructor;
        default: string;
    };
};
