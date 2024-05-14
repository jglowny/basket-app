type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Main = ( {children}: Props ) => {
    <main className="">
        {children}
    </main>
}