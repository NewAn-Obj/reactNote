import React, { Component } from 'react'
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Space,
  Input,
  Radio,
  Upload,
  Modal,
  message,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Channel from '../../components/channel/channel'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.scss'
import {
  getArticleById,
  publishArticle,
  updataArticle,
} from '../../api/article'

export default class Publish extends Component {
  state = {
    type: 1,
    fileList: [],
    previewShow: false,
    previewUrl: '',
    id: this.props.match.params.id,
  }
  formRef = React.createRef()
  render() {
    const { type, id } = this.state
    // console.log(this.props)

    return (
      <div className="publish">
        <Card
          title={
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/home">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/home/publish">{id ? '修改文章' : '发布文章'}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          {/*form表单*/}
          <Form
            ref={this.formRef}
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
              <Radio.Group onChange={this.onTypeChange}>
                <Radio value={1}>单张</Radio>
                <Radio value={3}>三张</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* 上传封面组件 */}
            <Form.Item wrapperCol={{ offset: 4 }}>
              {this.state.type !== 0 && (
                <>
                  <Upload
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onPreview={this.handlePreview}
                    //name属性是上传后文件的名字
                    name="image"
                    //action是上传url地址
                    action="http://geek.itheima.net/v1_0/upload"
                    onChange={this.uploadImage}
                    // beforeUpload={this.beforeUpload}
                  >
                    {this.state.fileList.length < this.state.type && (
                      <PlusOutlined />
                    )}
                  </Upload>
                  <Modal
                    visible={this.state.previewShow}
                    title="图片预览"
                    footer={null}
                    onCancel={this.handleCancel}
                  >
                    <img
                      alt=""
                      style={{
                        width: '100%',
                      }}
                      src={this.state.previewUrl}
                    />
                  </Modal>
                </>
              )}
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
                  {this.state.id ? '确认修改' : '上传文章'}
                </Button>
                <Button size="large" onClick={this.addDraft}>
                  存为草稿
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  async componentDidMount() {
    //如果是修改问文章，则this.state.id为true，获取文章详情并回显到页面
    if (this.state.id) {
      const res = await getArticleById(this.state.id)
      // console.log(res)
      const images = res.data.cover.images.map((item) => {
        return {
          url: item,
        }
      })
      const values = {
        ...res.data,
        type: res.data.cover.type,
      }
      this.formRef.current.setFieldsValue(values)
      this.setState({
        fileList: images,
        type: res.data.cover.type,
      })
    }
  }
  async save(value, draft) {
    if (this.state.fileList.length !== this.state.type) {
      return message.warning('图片数量不符合要求')
    }
    // 发表文章
    const images = this.state.fileList.map((item) => {
      return item.url || item.response.data.url
    })
    // console.log(addData)
    try {
      if (this.state.id) {
        await updataArticle(
          {
            ...value,
            cover: {
              type: this.state.type,
              images,
            },
            id: this.state.id,
          },
          draft
        )
        message.success('修改成功！')
      } else {
        await publishArticle(
          {
            ...value,
            cover: {
              type: this.state.type,
              images,
            },
          },
          draft
        )
        message.success('发布成功！')
      }

      // console.log(res, value, this.state.type, images)
      this.props.history.push('/home/article')
    } catch (error) {
      message.error('服务器繁忙，请稍后重试')
    }
    // console.log(res)
    // this.props.histiry.push('/home/article')
  }
  onFinish = async (values) => {
    // console.log(values)
    this.save(values, false)
  }
  onTypeChange = (e) => {
    this.setState({
      type: e.target.value,
      fileList: [],
    })
    // console.log(e)
    // console.log(this.state.type)
  }
  uploadImage = (e) => {
    // console.log(e)
    this.setState({
      fileList: e.fileList,
    })
  }
  handlePreview = (file) => {
    console.log(file)
    //如果图片是通过回显的方式得到的那么这个图片的url可以通过file.url得到
    //如果图片是自己上传的，则要通过file.response.data.url得到
    const url = file.url || file.response.data.url
    this.setState({
      previewShow: true,
      previewUrl: url,
    })
  }
  handleCancel = () => {
    this.setState({
      previewShow: false,
      previewUrl: '',
    })
  }
  beforeUpload = (data) => {
    console.log(data)
    if (data.type !== 'image/jpeg' || data.type !== 'image/png') {
      message.warning('请上传jpeg或png格式的图片')
      return Upload.LIST_IGNORE
    }
    message.success('图片上传成功')
  }
  addDraft = async () => {
    // console.log('添加草稿')
    // console.log(this.formRef)
    const values = await this.formRef.current.validateFields()
    this.save(values, true)
  }
}
