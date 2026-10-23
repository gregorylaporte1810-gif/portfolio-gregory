
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
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
            Ancien vendeur en magasin de bricolage, je me
            reconvertis dans le développement web grâce
            à ma formation OpenClassrooms.
          </p>

          <p>
            Je développe des applications avec React,
            Node.js et MongoDB. Mon expérience dans la
            vente m'a permis de développer mon sens de
            l'écoute, ma capacité à résoudre des problèmes
            et mon esprit d'équipe.
          </p>
        </div>

        <div className="a-propos-illustration" aria-hidden="true">
          {'</>'}
        </div>
      </section>

      

      <section id="projets" className="projets">
        <h2>Mes projets</h2>

        <div className="carte-projet">
          
        <img
          src="/images/kasa-accueil.png"
          alt="Capture d'écran du projet Kasa"
          className="image-projet"
        />


          <h3>Kasa — Application React</h3>

          <p>
            Plateforme de location de logements développée
            avec React.
          </p>

          <p className="technologies">
            React · JavaScript · Sass · Vite
          </p>

          
          
          <a
            href="https://github.com/gregorylaporte1810-gif/kasa"
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-code"
          >
            Voir le code
          </a>

          </div>

          <div className="carte-projet">
            
            <img
              src="/images/mon-vieux-grimoire.png"
              alt="Capture d'écran du projet Mon Vieux Grimoire"
              className="image-projet"
            />


            <h3>Mon Vieux Grimoire — API REST</h3>

            <p>
              API REST permettant de gérer et de noter
              des livres avec Node.js et MongoDB.
            </p>

            <p className="technologies">
              Node.js · Express · MongoDB · JWT
            </p>

            
          <a
            href="https://github.com/gregorylaporte1810-gif/mon-vieux-grimoire"
            target="_blank"
            rel="noopener noreferrer"
            className="bouton-code"
          >
            Voir le code
          </a>

          </div>


          <div className="carte-projet">
            
            <img
              src="/images/cap-forme (2).png"
              alt="Capture d'écran du projet Cap Forme"
              className="image-projet"
            />


            <h3>Cap Forme — Suivi personnel</h3>

            <p>
              Application web de suivi du poids, des
              objectifs et des habitudes quotidiennes.
            </p>

            <p className="technologies">
              React · Supabase · PostgreSQL · Recharts
            </p>

            
            <a
              href="https://github.com/gregorylaporte1810-gif/cap-forme"
              target="_blank"
              rel="noopener noreferrer"
              className="bouton-code"
            >
              Voir le code
            </a>

          </div>

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
