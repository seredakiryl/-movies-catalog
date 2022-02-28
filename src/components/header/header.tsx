import styles from './header.module.css'
import userIcon from '../../assets/images/userIcon.png'


const Header = () => {
    return (
        <header className={styles.header_contener}>
            <div className={styles.name_web}>
                Movies Catalog
            </div>
            <div>
                <input />
            </div>
            <div>
                <div className={styles.user}> 
                     <img className={styles.user_img} src = {userIcon}/>
                     <span> Виктор</span>
                </div>
            </div>
        </header>
    )
}

export default Header;