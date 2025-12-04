import './header.scss'

function HeaderComponent () {

    return (
        <header >
            <div className="header_logo">
                Education
            </div>
            <nav className="header_nav">
                <li>Home</li>
                <li>Courses</li>
                <li>Page</li>
                <li>blog</li>
                <li>Contact</li>
            </nav>
        </header>
    )
}

export default HeaderComponent;