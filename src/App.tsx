import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <NavBar/>
      <div className="main-section">
        <section>
        <h1>Welcome.</h1>
        <p>
            My name is Daniel Alanis. I'm Web Developer based in Satillo, Coahuila. MX I have developed many types of projects
        </p>
        <p>
            I'm passionate about technology, videogames and music.
        </p>
        </section>
        <section>
          <h1>Projects</h1>
          <ul>
            <li>Stellar Menus</li>
            <li>Scaling up</li>
            <li>Goverment-platform for stolen vehicles tracking</li>
            <li>To-Do App</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default App
