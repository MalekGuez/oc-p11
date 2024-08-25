import { Link } from "react-router-dom";

const Card = ({data}) => {
    return (
        <Link to={"./location/"+data.id} className="kasa-card">
            <img className="kasa-card__image" src={data.cover} alt={data.title} />
            <h2 className="kasa-card__title">{data.title}</h2>
        </Link>
    );
  };
  
  export default Card;
  