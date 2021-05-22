import React from 'react';
import '../../css/R3.css';

const Web = () => {
    return(
        <div className="web-container">
        
            <div className="web-modal">
                <button type="button" class="btn btn-primary img" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    
                </button>
        
                {/* MODAL */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <iframe width="1350" height="480" src="https://www.youtube.com/embed/s3wNuru4U0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                  
                        </div>
                    </div>
                </div>
            </div>

           
       
            <div className="web-info">
                <h2>
                    Give the word the answer they need, become a Supernatural Partner today.
                </h2>
                <p>
                «We Are the World» (en español: «Somos el mundo») es una canción escrita por Michael Jackson y Lionel Richie en 1985, producida por Quincy Jones y grabada por un gran grupo de músicos famosos formado especialmente para la ocasión que se denominó USA for Africa (United Support of Artists for Africa, en español: Unión de Apoyo de Artistas para Africa). La grabación de la canción se realizó el 28 de enero de 1985 y fue publicada el 7 de marzo del mismo año por el sello Columbia Records. Los beneficios obtenidos por la canción fueron donados a una campaña humanitaria para intentar acabar con la tremenda hambruna en Etiopía.
                </p>        
            </div>
        </div>
    )
}

export default Web;