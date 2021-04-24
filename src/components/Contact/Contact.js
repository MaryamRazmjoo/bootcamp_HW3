import {FaInstagramSquare,FaGithub,FaLinkedin} from 'react-icons/fa'
import styles from './Contact.module.css'
const Contact = () =>{
    return(
        <div className={styles.contact}>
                <FaInstagramSquare color="#efc13b" size="30px" style={{padding:"1%"}} />
                <FaGithub color="#efc13b" size="30px" style={{padding:"1%"}} />
                <FaLinkedin color="#efc13b" size="30px" style={{padding:"1%"}} />

        </div>
     );
}
export default  Contact;