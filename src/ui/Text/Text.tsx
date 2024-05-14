
import { ComponentProps, ReactNode } from 'react';
import { cn } from '../../utils/cn';


type Props = {
    children: string | ReactNode;
} & ComponentProps<'p'>

export const Text = ({className, children, ...rest} : Props) => {
    return(
        <p 
        className={cn(
            'color-black text-lg', className,
        )}
        {...rest}
        >{children}</p>
    )
}