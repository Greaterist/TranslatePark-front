import Card from "antd/es/card/Card";
import styles from "./index.module.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";


const Comments = (data) => {

    return (
        <Card>
            <div className={styles.user}>
                <img src={data.data.avatar} className={styles.avatar}></img>
                <p className={styles.username}>{data.data.name}</p>
                <div>
                    <p style={{color: 'green'}}><UpOutlined /> 5</p>
                    <p style={{color: 'red'}}><DownOutlined /> 3</p>
                </div>
            </div>
            <p>
                {data.data.text}
            </p>
        </Card>
    )
}

export default Comments;