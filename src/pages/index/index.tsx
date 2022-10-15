import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Table from 'taro3-table'
import { AtSearchBar, AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro'
const dataSource = [
  {
      username: '小红',
      telephone: '123'
  },
  {
      username: '小明',
      telephone: '456'
  }
]

const columns = [
  {
      title: '用户名',
      dataIndex: 'username'
  },

  {
      title: '手机号',
      dataIndex: 'telephone'
  }
]


export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      current: 0,
      isShow: false
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
    if(value === 1){
      // 搜索
      Taro.navigateTo({
        url: '/pages/calculate/index',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }
        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        }
      })
    }
  }
  onChange (value) {
    this.setState({
      value: value
    });
    if (this.state.isShow===false){
      this.setState({
        isShow: true
      })
    }
    else{
      this.setState({
        isShow: false
      })
    }
    // Taro.request({
    //     url:'http://127.0.0.1:8000/'
    // }).then(res=>{
    //     console.log(res.data)
    //     if (this.state.isShow===false){
    //       this.setState({
    //         isShow: true
    //       })
    //     }
    //     else{
    //       this.setState({
    //         isShow: false
    //       })
    //     }

    // })
  }
  render () {
    return (
      <View className='index'>
        <AtSearchBar
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        />
        {this.state.isShow && <Table
            columns={columns}
            dataSource={dataSource}
            rowKey="title"
        />}
        <AtTabBar
        fixed
        tabList={[
            { title: '计算', iconType: 'bullet-list'},
            { title: 'test', iconType: 'camera' },
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
        />
      </View>
    )
  }
}
