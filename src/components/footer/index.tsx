function Footer () {
    return (
        <footer style={{position: "fixed", bottom: "0%", left: "0%", width: "100%", paddingBottom: "1%"}}>
            <ul style={{display: "flex", justifyContent: "center"}}>
                <li>{new Date().getFullYear()} &#169; - Daniel Alanis.</li>
            </ul>
        </footer>
    );
}

export default Footer;