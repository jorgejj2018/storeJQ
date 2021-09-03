
import { Link } from "react-router-dom";
const Card = (props) => {
    return (
        <>
          <section key={props.slug} className="card">
            <img src={props.img} alt={props.title} />
            <div className="card-content">
              <h2>
                {props.title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{props.rating}</span>
              </h2>
              <h2>
                ${props.price} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{props.category}</span>
              </h2>
              <p>{props.description.substring(0, 200)}...</p>
              <Link to={`/${props.slug}`}>Ver Detalles</Link>
            </div>
          </section>
        
      </>
    )
}

export default Card