import Sider from "antd/es/layout/Sider";
import Defaultlayout from "../../Layouts/Default";
import { Content, Footer } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { getById } from "../../api/words";
import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Popover, Statistic } from "antd";
import { getCommentaries } from "../../api/commentaries";
import Comments from "../../Components/Comments";
import TranslationWord from "../../Components/TranslationWord";
import TextArea from "antd/es/input/TextArea";


const TranslationPage = () => {
    const [WordList, setWordList] = useState([]);
    const [CommList, setCommList] = useState([]);
    const [UserMessage, setUserMessage] = useState('')
    const { id } = useParams();

    /*useEffect(async ()=>{
        importWord(await getById(id))
    });*/

    function onMessageChange(e){
        setUserMessage(e.target.value)
    }

    function sendMessage(){
        console.log(UserMessage)//TODO
    }

    useEffect(()=>{
        async function importWord(){
            setWordList(await getById(id))
        }
        importWord(id);
        async function importComm(){
            setCommList(await getCommentaries())
        }
        importComm();
    }, [])

    return (
        <Defaultlayout>
            <Layout>
            <Content>
            <Card title="TRANSLATION">
            <Card.Grid hoverable={false} style={{width: '75%',}}>
                <div>
                <p className={styles.word}>{WordList.word}</p>
                <p className={styles.spelling}>{WordList.spelling}</p>
                <div className="flex">
                    <TranslationWord word={WordList.translation} opacity={0.5}/>
                </div>
                
                </div>
                
                
            </Card.Grid>
            <Card.Grid hoverable={false} style={{width: '25%',}}>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                        color: '#3f8600',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                    />
            </Card.Grid>
            
            
            </Card>
            
            </Content>
            <Sider>
            <Button type="link"><Link to={"/"}>Forum</Link></Button>
                
            </Sider>
            </Layout>
            
            <Footer>
                <Card>
                    <h1>Commentaries</h1>
                    {CommList.map((e, key)=>{
                        return(
                            <Comments data={e} key={key}></Comments>
                            
                        )
                    })}
                    <TextArea
                    showCount
                    maxLength={100}
                    style={{
                        height: 120,
                        resize: 'none',
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
    )
}



export default TranslationPage;