import Sider from "antd/es/layout/Sider";
import Defaultlayout from "../../Layouts/Default";
import { Content, Footer } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { getById, getTranslationById } from "../../api/words";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Card, Layout, Popover, Statistic } from "antd";
import { getCommentariesById } from "../../api/commentaries";
import Comments from "../../Components/Comments";
import TranslationWord from "../../Components/TranslationWord";
import TextArea from "antd/es/input/TextArea";
import AddTranslation from "../../Components/AddTranslation";

const TranslationPage = React.forwardRef(() => {
  const [WordList, setWordList] = useState([]);
  const [targetWord, setTargetWord] = useState([]);
  const [CommList, setCommList] = useState([]);
  const [UserMessage, setUserMessage] = useState("");
  const { id } = useParams();

  function onMessageChange(e) {
    setUserMessage(e.target.value);
  }

  function sendMessage() {
    console.log(UserMessage); //TODO
  }

  useEffect(() => {
    async function importWord(id) {
      setTargetWord(await getById(id));
      setWordList(await getTranslationById(id))
      //console.log(await getTranslationById(id))
      //console.log(await getById(id))
    }
    importWord(id);
    async function importComm(id) {
      setCommList(await getCommentariesById(id));
      console.log(await getCommentariesById(id));
    }
    importComm(id);
  }, []);


  

  return (
    <Defaultlayout>
      <Layout>
        <Content>
          <Card title="TRANSLATION">
            <Card.Grid hoverable={false} style={{ width: "75%" }}>
              <div>
                <p className={styles.word}>{targetWord.word}</p>
                <p className={styles.spelling}>{targetWord.phonetic}</p>
                <div className="flex">
                  {WordList.map((e, i, arr)=><TranslationWord word={e.word} rating={e.rating} key={i} opacity={1-(1/arr.length*i)} />
                  )
                  }
                  <AddTranslation id={WordList.id} />
                </div>
              </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={{ width: "25%" }}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card.Grid>
          </Card>
        </Content>
        <Sider>
          <Button type="link">
            <Link to={"/"}>Forum</Link>
          </Button>
        </Sider>
      </Layout>

      <Footer>
        <Card>
          <h1>Commentaries</h1>
          {CommList.map((e, key) => {
            return <Comments data={e} key={key}></Comments>;
          })}
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            onChange={onMessageChange}
            placeholder="enter your text here..."
          />
          <Button type="primary" onClick={sendMessage}>
            Click me!
          </Button>
        </Card>
      </Footer>
    </Defaultlayout>
  );
});

export default TranslationPage;
