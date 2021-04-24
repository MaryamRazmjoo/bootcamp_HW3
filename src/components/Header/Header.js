import styles from './Header.module.css'
const Header = (props) =>{
    return(
        <div className={styles.container}>
            <br/>
            <h1>{props.title}</h1>
            <hr/>
        </div>
     );
}
export default Header;