/* API */
"use client";

/* importo los hooks */
import { useEffect, useState } from "react";

/* consumo la API */
export function List() {
    
    const [datos, setDatos] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setDatos(data));
    }, []);

    const [userdat, setUserdat] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUserdat(data));
    }, []);

    /* console.log(datos);
    console.log(userdat); */

    /* devuelvo la respuesta estructurada en html */
    
    /* en cada card muestra 
    -username 
    -title
    -body
    en el respectivo orden */
    return (
        <>
            <div className="container">
            
                {datos?.map((post) => (
                    <div className="card-container" key={post.id}>
                        <div className="card-content">
                            <h1>{
                                /* uso find para encotrar las coincidencias de user.id y post.userId tomando el atrtibuto username, sino que devuelva unknwon */
                                userdat?.find((user) => user.id === post.userId)?.username || "Unknown"
                            }</h1>
                            
                            <p>{post.title}</p>
                            <p>{post.body}</p>                               
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}