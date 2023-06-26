import { useState } from "react";
import styles from "./index.module.scss";
import { Button, Popover } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";


const TranslationWord = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const agreeClicked = () =>{

    }

    const disagreeClicked = () =>{
        
    }

    const opacity = () => {
        return {
            opacity: props.opacity
        }
    }

    return (
        <Popover
                content={<>
                <Button onClick={agreeClicked} style={{color: 'green' }}><LikeOutlined /></Button>
                <Button onClick={disagreeClicked} style={{color: 'red' }}><DislikeOutlined /></Button>
                </>}
                title="Is translation correct?"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
                >
                    <p className={styles.translation} style={opacity()}>{props.word}</p>
        </Popover>
    )
}

export default TranslationWord;