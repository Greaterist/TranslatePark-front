import { useState } from "react";
import styles from "./index.module.scss";
import { AutoComplete, Button, Input, Popover, Space } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: "red",
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });




const AddTranslation = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };


    const [text, setText] = useState("")


    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
      setOptions(value ? searchResult(value) : []); //TODO change searchResult to backend request 
    };
    const onSelect = (value) => {
      console.log('onSelect', value);
    };



    const handleInput = (event) => {
        setText(event.target.value)
    }

    const handleButton = () => {
        console.log(text)
    }



    return (
        <Popover
                content={<>
                    <AutoComplete
            style={{
              width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            >
                <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input 
      defaultValue=""
      onChange={handleInput}
      />
      <Button 
      type="primary"
      onClick={handleButton}
      >+</Button>
    </Space.Compact>
            </AutoComplete>
                </>}
                title="Add Your Translation"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
                >
                    <Button>+</Button>
        </Popover>
    )
}

export default AddTranslation;