import GithubIcon from "../../assets/github.svg"
import LinkedInIcon from "../../assets/linkedin.svg"

function NavBar () {


    return (
        <nav style={{position: "fixed", top: "0%", left: "0%", width: "100%", paddingTop: "1%"}}>
            <ul style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <li>LOGO</li>
                <li><a href="#"><img src={GithubIcon} style={{filter: "invert(100%)", width: "50px"}}/></a></li>
                <li><a href="#"><img src={LinkedInIcon} style={{filter: "invert(100%)", width: "80px"}}/></a></li>
                <li><a href="#">Contact</a></li>
             </ul>
        </nav>
    );
}

export default NavBar;