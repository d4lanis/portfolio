import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {

  return (
    <div>
      <NavBar />
      <div className="main-section" style={{display: "flex", overflow: "auto"}}>
        <section style={{wordWrap: "break-word", width: "30%"}}>
          <h1>Welcome.</h1>
          <p>
            My name is Daniel Alanis and I am a web developer with 2 years of experience. I specialize in full-stack development, but I have a particular passion for backend programming.
          </p>
          <p>
            Throughout my career, I have worked on a variety of projects that have allowed me to hone my skills and expand my knowledge. From developing custom APIs to building scalable microservices, I have experience working on projects of all sizes and complexities.
          </p>
          <p>
            My technical skills include proficiency in multiple programming languages such as Typescript, Javascript, as well as expertise in popular web development frameworks and technologies such as React, Redux. Additionally, I am well-versed in cloud technologies such as AWS, which allows me to develop scalable and efficient solutions.
          </p>
        </section>
        <section style={{wordWrap: "break-word", width: "20%"}}>
          <h1>Projects</h1>
          <ul>
            <li>Stellar Menus</li>
            <li>Scaling Pp</li>
            <li>Goverment-platform</li>
            <li>To-Do App</li>
            <li>N-TECH IT Support Page</li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default App
