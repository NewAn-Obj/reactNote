import React, { Component } from 'react'
import { Card, Breadcrumb, Form, Button, Space, Input, Radio } from 'antd'

import { Link } from 'react-router-dom'
import Channel from '../../components/channel/channel'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.scss'

export default class Publish extends Component {
  state = {
    type: 1,
  }
  render() {
    const { type } = this.state
    return (
      <div className="publish">
        <Card
          title={
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/home">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/home/publish">发布文章</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          {/*form表单*/}
          <Form
            initialValues={{ type: type, content: '' }}
            validateTrigger={['onBlur', 'onChange']}
            labelCol={{ span: 4 }}
            size="large"
            onFinish={this.onFinish}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: '文章的标题不能为空',
                },
              ]}
            >
              <Input
                style={{ width: 400 }}
                placeholder="请输入文章标题"
              ></Input>
            </Form.Item>
            <Form.Item
              label="频道"
              name="channel_id"
              rules={[
                {
                  required: true,
                  message: '请选择用户频道',
                },
              ]}
            >
              <Channel></Channel>
            </Form.Item>
            <Form.Item label="封面" name="type">
              <Radio.Group>
                <Radio value={1}>单张</Radio>
                <Radio value={3}>三张</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="内容" name="content">
              <ReactQuill
                theme="snow"
                placeholder="请输入文章内容"
                rules={[
                  {
                    required: true,
                    message: '文章的内容不能为空',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button type="primary" htmlType="submit" size="large">
                  上传文章
                </Button>
                <Button size="large">存为草稿</Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  onFinish = (values) => {
    console.log(values)
  }
}
