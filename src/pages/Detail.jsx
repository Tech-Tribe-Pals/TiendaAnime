import { useParams } from "react-router-dom";


const Detail = () => {
    const id = useParams()
    console.log(id.id);

    return (
        <main>
            Detail
        </main>
    );
}

export default Detail;
