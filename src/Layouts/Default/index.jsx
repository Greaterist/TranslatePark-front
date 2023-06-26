import { ConfigProvider, Layout } from 'antd';
import DefaultHeader from '../../Components/DefaultHeader';
import DefaultFooter from '../../Components/DefaultFooter';
import { Content } from 'antd/es/layout/layout';


const Defaultlayout = ({children}) =>{
    return (
        <>
            <ConfigProvider
            theme={{
                token: {
                  colorPrimary: "#283D3B",
                }
              }}
            >
            <Layout>
            <DefaultHeader/>
            <Layout>{children}</Layout>
            <DefaultFooter/>
            </Layout>
                

            </ConfigProvider>
        </>
    )
}


export default Defaultlayout;
