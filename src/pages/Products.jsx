import { useEffect, useState } from "react";
import CardProds from "../components/CardProds";

const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  let arr = []
  
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch("./src/db/data.json");
        const data = await response.json();
        data.productos.map((e, i) => {
          if (i <= 5) {
            arr.push(e)
          }
        })
        setProds(arr)
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      } finally {
        setLoading(false); // Establecer el estado de loading en false después de recibir los datos (o en caso de error)
      }
    };

    fetchData();
  }, []);

  return (
    <main>
    <section className="home">
    <p>Tu tienda online de Anime</p>
    </section>
    <section>
    <p>Carousel</p>
    </section>
    <section>
    <p>Prods</p>
    </section>
    <section>
    <p>Mas ofertas</p>
    </section>
    <section className="prods">
    {loading ? (
      <p>Cargando...</p>
    ) : (
      prods.map((item, i) => <CardProds key={i} item={item} />)
    )}
    </section>
    </main>
  );
};

export default Products;
