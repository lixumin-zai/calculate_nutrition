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
  
  render () {
    var value = Taro.getStorageSync('dataSource')
    console.log(value)
    return (
      <View className='index'>
        156
      </View>
    )
  }
}
