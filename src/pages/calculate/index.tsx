import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 1,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
    if(value === 0){
      // 搜索
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
  render () {
    return (
      <View className='index'>
        123
      </View>
    )
  }
}
