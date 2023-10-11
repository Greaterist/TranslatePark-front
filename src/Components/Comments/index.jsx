import Card from "antd/es/card/Card";
import styles from "./index.module.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const Comments = (data) => {
  return (
    <Card>
      <div className={styles.user}>
        <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" className={styles.avatar}></img>
        <p className={styles.username}>{data.data.name}</p>
        <div>
          <p style={{ color: "green" }}>
            <UpOutlined /> {data.data.positive}
          </p>
          <p style={{ color: "red" }}>
            <DownOutlined /> {data.data.negative}
          </p>
        </div>
      </div>
      <p>{data.data.text}</p>
    </Card>
  );
};

export default Comments;
