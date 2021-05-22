import React from 'react';
import '../../css/R2.css'

const User = ({user}) => {
    // extraer los datos
    const { id, name, username, email, phone , website } = user;

    return ( 
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
        </tr>

     );
}

export default User;