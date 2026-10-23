
import { useId, useState } from 'react';

function ProjectCard({
  image,
  alt,
  title,
  description,
  technologies,
  context,
  objectives,
  skills,
  results,
  improvements,
  githubUrl,
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsId = useId();

  const hasDetails = Boolean(context);

  return (
    <div className="carte-projet">
      <img
        src={image}
        alt={alt}
        className="image-projet"
      />

      <h3>{title}</h3>

      <p>{description}</p>

      <p className="technologies">
        {technologies}
      </p>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bouton-code"
      >
        Voir le code
      </a>

      {hasDetails && (
        <>
          <button
            type="button"
            className="bouton-code bouton-details"
            aria-expanded={detailsOpen}
            aria-controls={detailsId}
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            {detailsOpen ? 'Masquer les détails' : 'Découvrir le projet'}
          </button>

          <div
            id={detailsId}
            className="details-projet"
            hidden={!detailsOpen}
          >
            <h4>Contexte</h4>
            <p>{context}</p>

            <h4>Objectifs</h4>
            <p>{objectives}</p>

            <h4>Stack technique</h4>
            <p>{technologies}</p>

            <h4>Compétences développées</h4>
            <p>{skills}</p>

            <h4>Résultats</h4>
            <p>{results}</p>

            <h4>Perspectives d'amélioration</h4>
            <p>{improvements}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
