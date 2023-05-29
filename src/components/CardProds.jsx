import { Link } from "react-router-dom";


const CardProds = ({ item }) => {
    return (
        <div className="card">
            <p>{ item.nombre }</p>
            <Link to={`/products/${ item.id }`}>Ver mas</Link>
        </div>
    );
}

export default CardProds;
