import React from 'react'

const Footer = ({date}) => {
    return ( 
        <footer className="footer">
            <p>Todos los derechos se encuentran reservados &copy; {date}</p>
        </footer>
     );
}
 
export default Footer;