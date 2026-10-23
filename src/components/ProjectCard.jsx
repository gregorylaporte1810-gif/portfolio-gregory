
function ProjectCard({
  image,
  alt,
  title,
  description,
  technologies,
  githubUrl,
}) {
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
    </div>
  );
}

export default ProjectCard;
