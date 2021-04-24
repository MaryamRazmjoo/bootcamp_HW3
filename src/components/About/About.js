import styles from './About.module.css'
import Header from './../Header/Header'
import myPic from './../../images/myPic.png'
const About = () =>{
    return(
        <div className={styles.About}>
            <Header title={'Who am I?'}/>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>Hi,I'm Monica Geller .</h2>
                    <p>I'm a chef.<br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={styles.photo}>
                    <img className={styles.myPic} src={myPic} alt="me"></img>

                </div>
            </div>
        </div>
     );
}
export default  About;