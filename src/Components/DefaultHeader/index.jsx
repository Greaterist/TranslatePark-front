import { Button, Menu } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const DefaultHeader = () => {

    const onSearch = () =>{

    }

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" className={styles.icon}> <img src="/icon.png" alt="" className={styles.icon}/> </Link>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 500 }} />
            <Link to="/profile/" className={styles.nav}> <Button>Profile</Button></Link>
        </Header>
    )
}

export default DefaultHeader;