import React, { Component } from 'react'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import './index.scss'
import logo from '../../assets/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <Card>
            <img className="login-logo" src={logo} alt="logo" />
            <Form
              size="large"
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>

              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input placeholder="请输入验证码" />
              </Form.Item>

              <Form.Item valuePropName="checked">
                <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
