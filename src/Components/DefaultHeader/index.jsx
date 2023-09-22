import { AutoComplete, Button, Input, Menu } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import styles from "./index.module.scss";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "red",
            }}
          >
            <span>
              Found {query} on{" "}
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

const DefaultHeader = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []); //TODO change searchResult to backend request
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

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
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="input here" enterButton />
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
