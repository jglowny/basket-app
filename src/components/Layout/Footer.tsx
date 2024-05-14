type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Footer = ( {children}: Props ) => {
    <footer className="">
        {children}
    </footer>
}