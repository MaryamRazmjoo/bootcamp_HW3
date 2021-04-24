import styles from './Skills.module.css'
import Header from './../Header/Header'
import {Button} from './../Button/Button'




const Skills = () =>{
    return(
        <div className={styles.body}>
            <Header title={'My Skills'}/>
            <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia
            deserunt
            mollit anim id est laborum.
            </p>
            <div classNames={styles.myButtons}>
                <button background-color={"#3490f0"} light={"#34d4f2"} large>Me as a Chef</button>
                <button background-color={"#f3bf4a"} light={"#f1cd49"} large>Me as a Sister</button>
                <button background-color={"#d558cf"} light={"#e950aa"} large>Me as a Whif</button>
                <button background-color={"#2cbf8a"} light={"#31cc69"} large>Me as a friend</button>


            </div>
        </div>
     );
}
export default Skills;