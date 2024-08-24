import "./style.css"

export default function Card({ title, description, url, imgAlt}) {
    return (
      <div className="CardContainer">
        <img src={url} alt={imgAlt} />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    );
  }