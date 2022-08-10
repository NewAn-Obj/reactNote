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
                mobile: '13911111111',
                code: '246810',
                agree: true,
              }}
              autoComplete="off"
              onFinish={this.onFinish}
            >
              <Form.Item
                validateTrigger={['onBlur']}
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: '手机号不能为空',
                    validateTrigger: 'onBlur',
                  },
                  {
                    pattern: /^1[3-9]\d{9}$/,
                    message: '手机号格式错误',
                    validateTrigger: 'onBlur',
                  },
                ]}
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>

              <Form.Item
                validateTrigger={['onBlur']}
                name="code"
                rules={[
                  {
                    required: true,
                    message: '验证码不能为空',
                    validateTrigger: 'onBlur',
                  },
                  {
                    pattern: /^\d{6}$/,
                    message: '验证码格式错误',
                    validateTrigger: 'onBlur',
                  },
                ]}
              >
                <Input placeholder="请输入验证码" />
              </Form.Item>

              <Form.Item
                valuePropName="checked"
                name="agree"
                rules={[
                  {
                    validator(_, value) {
                      if (value) {
                        return Promise.resolve()
                      } else {
                        return Promise.reject(new Error('请阅读并同意用户协议'))
                      }
                    },
                  },
                ]}
              >
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
  onFinish = (values) => {
    console.log(values)
  }
}
