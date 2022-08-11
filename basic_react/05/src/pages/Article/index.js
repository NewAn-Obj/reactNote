import React, { Component } from 'react'
import {
  Breadcrumb,
  Card,
  Radio,
  Form,
  Button,
  Select,
  DatePicker,
  Table,
} from 'antd'

import { Link } from 'react-router-dom'
import { getChannels } from '../../api/channels'
import { getArticle } from '../../api/article'

const { Option } = Select
const { RangePicker } = DatePicker
export default class Article extends Component {
  state = {
    channels: [],
    article: {},
  }
  columns = [
    {
      title: '封面',
      dataIndex: 'name',
    },
    {
      title: '标题',
      dataIndex: 'age',
    },
    {
      title: '状态',
      dataIndex: 'address',
    },
    {
      title: '发布时间',
      dataIndex: 'tags',
    },
    {
      title: '阅读数',
      dataIndex: 'tags',
    },
    {
      title: '评论数',
      dataIndex: 'tags',
    },
    {
      title: '点赞数',
      dataIndex: 'tags',
    },
    {
      title: '操作',
      // key: 'action',
    },
  ]
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  render() {
    // console.log(this.state.channels)
    return (
      <div className="article">
        <Card
          title={
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/home">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/home/article">数据概览</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          {/* from表单 */}
          <Form
            initialValues={{
              status: -1,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={-1}>全部</Radio>
                <Radio value={0}>草稿</Radio>
                <Radio value={1}>待审核</Radio>
                <Radio value={2}>审核通过</Radio>
                <Radio value={3}>审核失败</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="频道" name="channel_id">
              <Select style={{ width: 200 }} placeholder="请选择文章频道">
                {this.state.channels.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="日期" name="date">
              <RangePicker />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                筛选
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="根据筛选条件，共筛选到xxx条结果：">
          <Table columns={this.columns} dataSource={this.data} />
        </Card>
      </div>
    )
  }
  onFinish = (value) => {
    console.log(value)
  }
  componentDidMount() {
    this.getChannelsList()
    this.getArticleList()
  }

  async getChannelsList() {
    const res = await getChannels()
    // console.log(res.data.channels)
    this.setState({
      channels: res.data.channels,
    })
  }

  async getArticleList() {
    const res = await getArticle()
    this.setState({
      article: res.data,
    })
    // console.log(res)
  }
}
