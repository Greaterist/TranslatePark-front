import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import Defaultlayout from "../../Layouts/Default";
import { useEffect, useState } from "react";
import { getlanguages } from "../../api/languages";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const languageFiller = () => {
  return ["Zhejiang", "Jiangsu"];
};

const NewWordPage = () => {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    async function importLanguages() {
      setLanguages(await getlanguages());
    }
    importLanguages();
  }, []);

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Defaultlayout>
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Language">
          <Space.Compact>
            <Form.Item
              name="language"
              noStyle
              rules={[
                {
                  required: true,
                  message: "language is required",
                },
              ]}
              onFinish={handleSubmit}
            >
              <Select placeholder="Select language">
                {languages.map((e) => {
                  return (
                    <Option value={e.id} key={e.id}>
                      {e.language_code}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Space.Compact>
        </Form.Item>
        <Form.Item
          label="Word"
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="Word"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Input Word" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Spelling"
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="Spelling"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Input Spelling" />
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Defaultlayout>
  );
};

export default NewWordPage;
