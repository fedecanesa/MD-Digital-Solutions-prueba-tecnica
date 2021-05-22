import React, {useEffect, useState } from 'react';
import User from './User';
import '../../css/R2.css'

const Users = () =>  {

    const [ users , setUsers ] = useState([]);

    useEffect( ()=> {
        const consultarAPI = async () =>{
            const url = 'https://jsonplaceholder.typicode.com/users'
            const data = await fetch(url)
            const users = await data.json()
            setUsers(users)
        }
        consultarAPI()
    } );

    return(
        <div className="table-container">
            <h1>Ususarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>NOMBRE DE USUARIO</th>
                        <th>EMAIL</th>
                        <th>TELÉFONO</th>
                        <th>SITIO WEB</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {users.map(user => (
                        <User 
                            key={user.id}
                            user={user}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}


 
export default Users;