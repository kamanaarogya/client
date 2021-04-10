const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img className="logo" src="logo.jpg" alt="logo" />
                <ul className="menu">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
