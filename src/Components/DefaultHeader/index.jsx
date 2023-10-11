import { AutoComplete, Button, Input, Menu } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import styles from "./index.module.scss";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getWordSearch } from "../../api/words";


const DefaultHeader = () => {


  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const handleSearch = async (value) => {
    if(value){
        const res = await getWordSearch(value)
        const updatedOptions = res.map(e => ({value: e.word, id:e.id}))
        return updatedOptions
    }
  }
    
  

  const onSelect = (value, option) =>{
    window.location.href = `/translation/${option.id}`;
    return redirect(`/translation/${option.id}`)
  } 

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Link to="/" className={styles.icon}>
        {" "}
        <img src="/icon.png" alt="" className={styles.icon} />{" "}
      </Link>
      <AutoComplete
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={async (text) => setOptions( await handleSearch(text))}
      >
        
      </AutoComplete>
      <div>
        <Link to="/profile/" className={styles.nav}>
          {" "}
          <Button>Profile</Button>
        </Link>
        <Link to="/newword/" className={styles.nav}>
          {" "}
          <Button>Add New Word</Button>
        </Link>
      </div>
    </Header>
  );
};

export default DefaultHeader;
