import "../css/App.css"
import TopContainer from "./TopContainer";
import NavBar from "./NavBar";
import About from "./About";
import ExperienceContainer from "./ExperienceContainer";
import ProjectContainer from "./ProjectContainer";
import Layout from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Layout>
      <TopContainer></TopContainer>
      <About></About>
      <ExperienceContainer></ExperienceContainer>
      <ProjectContainer></ProjectContainer>

    </Layout>
  );
}

export default App;
