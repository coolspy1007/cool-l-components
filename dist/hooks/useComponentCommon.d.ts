import { ComponentProps } from '@/defaultProps';
declare const useComponentCommon: (props: Readonly<Partial<ComponentProps & {
    isEditing: boolean;
}>>, picks: string[]) => {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<import("../defaultProps").TextComponentProps & {
        isEditing: boolean;
    }>>> | Partial<Readonly<Partial<import("../defaultProps").ImageComponentProps & {
        isEditing: boolean;
    }>>> | Partial<Readonly<Partial<import("../defaultProps").ShapeComponentProps & {
        isEditing: boolean;
    }>>>>;
    handleClick: () => void;
};
export default useComponentCommon;
