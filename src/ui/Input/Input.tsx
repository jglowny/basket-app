import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";

type Props = {
    label: string;
    index?: number;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
    ({ label, index, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return(
        <div className="my-2">
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}</label>
                <input 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    id={id}
                    index={index}
                    ref={ref}
                    {...rest}
                />
        </div>
    )
}
) 