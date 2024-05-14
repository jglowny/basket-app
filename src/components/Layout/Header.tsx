import { ReactNode } from "react";

type Props = {
    children?:ReactNode;
}

export const Header = ( {children}: Props ) => {
    <div className="">
        {children}
    </div>
}