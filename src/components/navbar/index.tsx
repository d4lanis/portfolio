function NavBar () {


    return (
        <nav style={{position: "fixed", top: "0%", left: "0%", width: "100%", paddingTop: "1%"}}>
            <ul style={{display: "flex", justifyContent: "space-evenly"}}>
                <li>LOGO</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
             </ul>
        </nav>
    );
}

export default NavBar;