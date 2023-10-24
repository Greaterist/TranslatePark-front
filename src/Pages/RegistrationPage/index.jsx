import { useState } from "react";
import Defaultlayout from "../../Layouts/Default";
import { Button, Form, Input } from "antd";
import { PasswordInput } from "antd-password-input-strength";

const RegistrationPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [level, setLevel] = useState(0);

  const minLevel = 1;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const validatePassword = (rule, value, callback) => {
    if (value && value !== "Secret") {
      callback("Error!");
    } else {
      callback();
    }
  };

  return (
    <Defaultlayout>
      <p>REGISTRATION</p>
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
        <Form.Item
          name="username"
          label="username"
          rules={[
            { required: true, 
                message: "Please input Username" },
           {
            pattern: new RegExp(/^[\w.-]*$/i),
            message: "field must not contain special symbols"
           }
          ]}
        >
          <Input placeholder="input Email" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="input Email" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              validator: async () => {
                return level >= minLevel
                  ? Promise.resolve()
                  : Promise.reject(errorMessage);
              },
              message: "Password is too weak",
            },
            {
                required: true,
                message: "Please input your Password!",
              },
          ]}
          name="password"
          label="Password"
        >
          <PasswordInput
            placeholder="input password"
            onLevelChange={setLevel}
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
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

export default RegistrationPage;
