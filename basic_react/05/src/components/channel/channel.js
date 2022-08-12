import React, { Component } from 'react'
import { Select } from 'antd'

import { getChannels } from '../../api/channels'
const { Option } = Select

export default class Channel extends Component {
  state = {
    channels: [],
  }
  render() {
    return (
      <Select
        style={{ width: 200 }}
        placeholder="请选择文章频道"
        value={this.props.value}
        onChange={this.props.onChange}
      >
        {this.state.channels.map((item) => (
          <Option value={item.id} key={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    )
  }
  componentDidMount() {
    this.getChannelsList()
  }

  async getChannelsList() {
    const res = await getChannels()
    // console.log(res.data.channels)
    this.setState({
      channels: res.data.channels,
    })
  }
}
