import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroNew from './components/HeroNew';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/education';
import Skills from './components/Skills';
import Form from './components/form';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroNew />
              <Services />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Form />
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={
            <>
              <ProjectDetail />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
