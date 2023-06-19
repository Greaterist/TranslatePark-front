import Sider from "antd/es/layout/Sider";
import Defaultlayout from "../../Layouts/Default";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { getById } from "../../api/words";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";


const TranslationPage = () => {

    const [WordList, setWordList] = useState([]);
    const { id } = useParams();

    /*useEffect(async ()=>{
        importWord(await getById(id))
    });*/

    useEffect(()=>{
        async function importWord(){
            setWordList(await getById(id))
        }
        importWord(id);
    }, [])

    return (
        <Defaultlayout>
            <Content>
            <p>TRANSLATION</p>
            <div>
                <p className={styles.word}>{WordList.word}</p>
                <p className={styles.spelling}>{WordList.spelling}</p>
                <p className={styles.translation}>{WordList.translation}</p>
            </div>
            </Content>
            <Sider>
                
            </Sider>
        </Defaultlayout>
    )
}



export default TranslationPage;