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
  Tag,
  Space,
} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { getChannels } from '../../api/channels'
import { getArticle } from '../../api/article'
import defualtImg from '../../assets/error.png'

const { Option } = Select
const { RangePicker } = DatePicker
export default class Article extends Component {
  reqPamars = {
    page: 1,
    per_page: 10,
  }
  state = {
    channels: [],
    article: {},
  }
  columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      render(cover) {
        if (cover.type >= 1) {
          return (
            <img
              src={cover.images[0]}
              alt=""
              style={{ width: 200, height: 160, objectFit: 'cover' }}
            />
          )
        } else if (cover.type === 0) {
          return (
            <img
              src={defualtImg}
              alt=""
              style={{ width: 200, height: 160, objectFit: 'cover' }}
            />
          )
        }
      },
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render(status) {
        if (status === 0) {
          return <Tag color="orange">草稿</Tag>
        } else if (status === 2) {
          return <Tag color="green">审核通过</Tag>
        } else if (status === 1) {
          return <Tag color="geekblue">待审核</Tag>
        } else if (status === 3) {
          return <Tag color="red">审核失败</Tag>
        }
      },
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
    },
    {
      title: '操作',
      // key: 'action',
      render() {
        return (
          <Space>
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Space>
        )
      },
    },
  ]
  // data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ]

  render() {
    console.log(this.reqPamars)
    console.log(this.state.article)
    const { total_count, results, page, per_page } = this.state.article
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
        <Card title={`根据筛选条件，共筛选到${total_count}条结果：`}>
          <Table
            columns={this.columns}
            dataSource={results}
            rowKey="id"
            pagination={{
              position: ['bottomCenter '],
              current: page,
              pageSize: per_page,
              total: total_count,
              onChange: this.pageOnChange,
            }}
          />
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
    const res = await getArticle(this.reqPamars)
    this.setState({
      article: res.data,
    })
    // console.log(res)
  }
  pageOnChange = (page, pageSize) => {
    this.reqPamars.page = page
    this.reqPamars.per_page = pageSize
    this.getArticleList()
  }
  // console.log(page, pageSize)
}
