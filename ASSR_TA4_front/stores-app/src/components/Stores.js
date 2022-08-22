import React, {useEffect, useState}from "react";
import Piechart from "./Piechart";

const Stores = () => {

    const [stores, setStores] = useState([]);
    const [original, setOriginal] = useState([]);
    const [showTabla, setShowTabla] = useState(true);
    const [showCharts, setShowCharts] = useState(false);
    const urlStores = "http://localhost:3000/api/store";

    const fetchStores = (urlStores) => { 
        fetch(urlStores)
            .then(response => response.json())
            .then(data => {setStores(data); setOriginal(data)})
            .catch(error => console.log(error))
    };

    const columnas = [
        {label: "ID", accessor:"id", sortable: true},
        {label: "Área", accessor:"areaTienda"},
        {label: "Productos disponibles", accessor:"productosDisponibles", sortable: true},
        {label: "Compradores diarios", accessor:"compradoresDiarios", sortable: true},
        {label: "Ingresos por ventas", accessor:"ventas", sortable: true}
    ];

    useEffect(() => {
        fetchStores(urlStores);
    }, []);

    const sortByVentas = () => {
        setShowCharts(false);
        setShowTabla(true);
        let sorted = [...original].sort((a, b) => {
            return a["ventas"] > b["ventas"] ? -1: 1;
        });
        sorted = sorted.slice(0, 10)
        setStores(sorted);
    };

    const showGraficas = () => {
        setShowTabla(false);
        setShowCharts(true);
    };

    return (
        <>
            <div className="container">
            <button type="button" className="btn btn-primary" onClick={() => {setStores(original);}}>Mostrar todo</button>
                <button type="button" className="btn btn-primary" onClick={sortByVentas}>Top 10 ventas</button>
                <button type="button" className="btn btn-primary" onClick={showGraficas}>Gráficas</button>
                {showTabla && <table className="table" id="tabla">
                    <thead>
                        <tr>

                            {columnas.map(({label, accessor, sortable}) => {
                                return(
                                <th
                                key={accessor}>
                                    {label}
                                </th>);
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stores.map((store, index) => (
                                <tr key={store.id}>
                                <th scope="row">{store.id}</th>
                                <td>{store.areaTienda}</td>
                                <td>{store.productosDisponibles}</td>
                                <td>{store.compradoresDiarios}</td>
                                <td>{store.ventas}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>}
                {showCharts ? <Piechart data={original}></Piechart> : <></>}
            </div>
        </>
    )
}

export default Stores;