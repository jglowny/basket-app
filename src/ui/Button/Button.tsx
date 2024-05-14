import { MouseEventHandler, type ComponentProps } from "react";
import { cn } from '../../utils/cn'
type Props = {
    label: string;
} & ComponentProps<'button'>

export const Button = ({label, className, ...rest}: Props) => {
    return(
        <button 
            className={cn(
                "px-4 py-1 text-sm bg-blue-600 rounded-lg border-blue-200 cursor-pointer hover:bg-blue-500 disabled:bg-gray-500 ",
             className,
            )}
            {...rest}
            >{label}
            </button>
    )
}