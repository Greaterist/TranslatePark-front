import { Menu } from "antd";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";


const DefaultHeader = () => {

    const onSearch = () =>{

    }

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 500 }} />
            
        </Header>
    )
}

export default DefaultHeader;