import './Projects.css'
export default function Projects() {
  return (
    <section className="project"> 
       <div className="project-container">
      <h2 className='project-title'>Projects</h2>
      <p className='project-text'>
        <a
          href="https://umarahgul.github.io/AwesomeBooksModule/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >Awesome Books Project
      </a>
       <br></br>
              <a
          href="https://umarahgul.github.io/capstone-1/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >Capstone 1
      </a>

      <br></br>
              <a
          href="https://umarahgul.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >Portfolio
      </a>

      </p>
      </div>
    </section>
  );
}