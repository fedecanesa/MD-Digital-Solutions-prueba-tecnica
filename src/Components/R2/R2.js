import React from 'react';
import '../../css/R2.css'

const Table = ()=>{
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Ocupación</th>
                        <th>Ciudad</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr className="odd">
                        <td>Juan</td>
                        <td>25</td>
                        <td>Abogado</td>
                        <td>Buenos Aires</td>
                        <td>juan@gmail.com</td>
                        <td>1198746658</td>
                    </tr>
                    
                    <tr className="even">
                        <td>Pedro</td>
                        <td>30</td>
                        <td>Psicologo</td>
                        <td>Barcelona</td>
                        <td>pedro@gmail.com</td>
                        <td>3020369879</td>
                    </tr>
                    <tr className="odd">
                        <td>Juliana</td>
                        <td>28</td>
                        <td>Médica</td>
                        <td>Lima</td>
                        <td>juliana@gmail.com</td>
                        <td>9484789488</td>
                    </tr>
                    <tr className="even">
                        <td>Valeria</td>
                        <td>36</td>
                        <td>Contadora Pública</td>
                        <td>Rio de Janeiro</td>
                        <td>valeria@gmail.com</td>
                        <td>7041336921</td>
                    </tr>
                    <tr className="odd">
                        <td>Ernesto</td>
                        <td>40</td>
                        <td>Carpintero</td>
                        <td>La Paz</td>
                        <td>ernesto@gmail.com</td>
                        <td>9634758511</td>
                    </tr>
                    <tr className="even">
                        <td>Miranda</td>
                        <td>22</td>
                        <td>Desarrolladora Web</td>
                        <td>Santiago de Chile</td>
                        <td>miranda@gmail.com</td>
                        <td>6452314790</td>
                    </tr>
                    <tr className="odd">
                        <td>Joaquin</td>
                        <td>33</td>
                        <td>Madrid</td>
                        <td>Cantante</td>
                        <td>joaquin@gmail.com</td>
                        <td>3021478230</td>
                    </tr>
                    <tr className="even">
                        <td>Milagros</td>
                        <td>30</td>
                        <td>Bailarina</td>
                        <td>Quito</td>
                        <td>milagros@gmail.com</td>
                        <td>4156987828</td>
                    </tr>
                    <tr className="odd">
                        <td>Miguel</td>
                        <td>46</td>
                        <td>Profesor</td>
                        <td>Bogotá</td>
                        <td>miguel@gmail.com</td>
                        <td>3359874163</td>
                    </tr>
                    <tr className="even">
                        <td>Laura</td>
                        <td>29</td>
                        <td>Actriz</td>
                        <td>París</td>
                        <td>laura@gmail.com</td>
                        <td>1026587984</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;