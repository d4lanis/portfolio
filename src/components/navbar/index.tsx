import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import CredlyIcon from "../../assets/credly.svg";

function NavBar () {


    return (
        <nav style={{position: "fixed", top: "0%", left: "0%", width: "100%", paddingTop: "1%"}}>
            <ul style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <li>LOGO</li>
                <li><a target={"blank"} href="https://www.github.com/d4lanis"><img src={GithubIcon} style={{filter: "invert(100%)", width: "50px"}}/></a></li>
                <li><a target={"blank"} href="https://www.linkedin.com/in/daniel-alanis-569628194/"><img src={LinkedInIcon} style={{filter: "invert(100%)", width: "70px"}}/></a></li>
                <li><a target={"blank"} href="https://www.credly.com/users/daniel-alanis-hernandez"><img src={CredlyIcon} style={{width:"50px"}}/></a></li>
             </ul>
        </nav>
    );
}

export default NavBar;