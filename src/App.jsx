
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import { projects } from './data/projects.js';
import './App.css';



function App() {
  


  return (
    <>
      <Header />

      
      <main id="accueil">
        <h1>Bonjour, je suis Grégory.</h1>
        <p>Développeur web junior</p>

        <div className="boutons-accueil">
          <a href="#projets" className="bouton bouton-principal">
            Découvrir mes projets
          </a>

          <a href="#contact" className="bouton bouton-secondaire">
            Me contacter
          </a>
        </div>
        

      <section id="apropos" className="a-propos">
        <div className="a-propos-contenu">
          <h2>À propos de moi</h2>


        <p>
          Je suis développeur web junior en reconversion professionnelle,
          actuellement en formation chez OpenClassrooms. Après une
          expérience dans la vente et le conseil en magasin de bricolage,
          j'ai choisi de me tourner vers le développement web pour
          créer des applications utiles et accessibles.
        </p>

        <p>
          Au fil de ma formation, j'ai développé des projets concrets
          avec React, JavaScript, Node.js, Express et MongoDB.
          De Kasa à Mon Vieux Grimoire, en passant par mon
          application personnelle Cap Forme, j'ai appris à structurer
          mon code, créer des composants réutilisables et améliorer
          l'expérience utilisateur.
        </p>

        <p>
          Mon parcours professionnel m'a apporté le sens de l'écoute,
          la capacité à résoudre des problèmes et le goût du travail
          en équipe. Aujourd'hui, je souhaite continuer à progresser,
          approfondir mes compétences techniques et contribuer à des
          projets web au sein d'une équipe de développeurs.
        </p>

        </div>

        <div className="a-propos-illustration" aria-hidden="true">
          {'</>'}
        </div>
      </section>

      

        <section id="projets" className="projets">
          <h2>Mes projets</h2>



      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          alt={project.alt}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          context={project.context}
          objectives={project.objectives}
          skills={project.skills}
          results={project.results}
          improvements={project.improvements}
          githubUrl={project.githubUrl}
        />
      ))}



      </section>

      

          <section id="competences" className="competences">
            <h2>Mes compétences</h2>

            <div className="carte-competence">
              <h3>Front-end</h3>

              <p>
                HTML · CSS · JavaScript · React
              </p>
            </div>

            
            <div className="carte-competence">
              <h3>Back-end</h3>

              <p>
                Node.js · Express
              </p>
            </div>

            
            <div className="carte-competence">
              <h3>Bases de données</h3>

              <p>
                MongoDB · PostgreSQL · Supabase
              </p>
            </div>

            
            <div className="carte-competence">
              <h3>Outils</h3>

              <p>
                Git · GitHub · VS Code · Figma
              </p>
            </div>
      </section>

      

          <section id="parcours" className="parcours">
            <h2>Mon parcours</h2>

            <div className="carte-parcours">
              <h3>Vendeur en magasin de bricolage</h3>

              <p>
                Expérience professionnelle dans la vente et
                le conseil client. Cette activité m'a permis
                de développer mon sens de l'écoute, mon esprit
                d'équipe et ma capacité à résoudre des problèmes.
              </p>
            </div>

            
            <div className="carte-parcours">
              <h3>Formation Développeur Web — OpenClassrooms</h3>

              <p>
                Formation à distance pour apprendre à concevoir
                et développer des applications web avec HTML,
                CSS, JavaScript, React et Node.js.
              </p>
            </div>

            
            <div className="carte-parcours">
              <h3>Mes ambitions professionnelles</h3>

              <p>
                Continuer à progresser dans le développement web,
                approfondir mes compétences en React et Node.js
                et participer à des projets concrets au sein
                d'une équipe.
              </p>
            </div>

          </section>

          

          <section id="contact" className="contact">
            <h2>Contact</h2>

            <p>
              Vous souhaitez échanger sur un projet ou en savoir
              plus sur mon parcours ? N'hésitez pas à me contacter.
            </p>

            

            <div className="boutons-contact">
              
              <a
                href="mailto:gregorylaporte1810@gmail.com"
                className="bouton bouton-principal"
              >
                M'envoyer un e-mail
              </a>


              <a
                href="https://github.com/gregorylaporte1810-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="bouton bouton-secondaire"
              >
                Voir mon GitHub
              </a>
            </div>


          </section>

      </main>

      
      <Footer />


    </>
  )
}

export default App
