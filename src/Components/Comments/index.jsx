import Card from "antd/es/card/Card";
import styles from "./index.module.scss";


const Comments = (data) => {

    return (
        <Card>
            <div className={styles.user}>
                <img src={data.data.avatar} className={styles.avatar}></img>
                <p className={styles.username}>{data.data.name}</p>
            </div>
            <p>
                {data.data.text}
            </p>
        </Card>
    )
}

export default Comments;