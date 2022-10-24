const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <nav>Ini navbar</nav>
            <aside>Ini sidebar</aside>
            {children}
        </>
    )
}

export default Layout;