import styles from  './NavBar.module.css'

const NavBar = () =>{
    return(
        <div className={styles.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About me</a>
                    </li>
                    <li>
                        <a href="/">skills</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
export default  NavBar;