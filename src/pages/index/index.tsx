import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components';
import './index.scss'
import Table from 'taro3-table'
import { AtSearchBar, AtTabBar, AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      current: 0,
      isShow: false,
      result: '',
      columns: [
        {
          title: '名称',
          dataIndex: 'Shrt_Desc',
          fixed:"left"
        },
        {
          title: 'Water_(g)',
          sort: true,
          dataIndex: 'water'  // 含水量
        },
        {
          title: 'Energ_Kcal',
          dataIndex: 'energy'  // 能量
        },
        {
          title: 'Protein_(g)',
          dataIndex: 'protein'  // 蛋白质
        }, {
          title: 'Lipid_Tot_(g)',
          dataIndex: 'lipid_tot'  // 脂质
        },
        {
          title: 'Ash_(g)',
          dataIndex: 'ash'
        },
        {
          title: 'Carbohydrt_(g)',
          dataIndex: 'carbohydrt'  // 碳
        },
        {
          title: 'Fiber_TD_(g)',
          dataIndex: 'fiber_td'  // 纤维
        },
        {
          title: 'Sugar_Tot_(g)',
          dataIndex: 'sugar_tot'  // 糖
        },
        {
          title: 'Calcium_(mg)',
          dataIndex: 'calcium'    // 钙
        },
        {
          title: 'Iron_(mg)',
          dataIndex: 'iron'  // 铁
        },
        {
          title: 'Magnesium_(mg)',
          dataIndex: 'magnesium'  // 镁
        },
        {
          title: 'Phosphorus_(mg)',
          dataIndex: 'phosphorus'  // 磷
        },
        {
          title: 'Potassium_(mg)',
          dataIndex: 'potassium'  // 钾
        },
        {
          title: 'Sodium_(mg)',
          dataIndex: 'sodium'  // 钠
        },
        {
          title: 'Zinc_(mg)',
          dataIndex: 'zinc'  // 锌
        },
        {
          title: 'Copper_(mg)',
          dataIndex: 'copper'  // 铜
        },
        {
          title: 'Manganese_(mg)',
          dataIndex: 'manganese'  // 锰
        },
        {
          title: 'Selenium_(µg)',
          dataIndex: 'selenium'  // 硒
        },
        {
          title: 'Vit_C_(mg)',
          dataIndex: 'Vit_C'  // 维他命c
        },
        {
          title: 'Thiamin_(mg)',
          dataIndex: 'thiamin'  // 硫胺素，维生素B1
        },
        {
          title: 'Riboflavin_(mg)',
          dataIndex: 'riboflavin'  // 核黄素，维生素B2
        },
        {
          title: 'Niacin_(mg)',
          dataIndex: 'Niacin'  // 烟酸〔一种有益于皮肤和神经系统的维生素〕
        },
        {
          title: 'Panto_Acid_(mg)',
          dataIndex: 'panto_acid'  // 潘托酸
        },
        {
          title: 'Vit_B6_(mg)',
          dataIndex: 'Vit_B6'  // 
        },
        {
          title: 'Folate_Tot_(µg)',
          dataIndex: 'folate_tot'  // 叶酸
        },
        {
          title: 'Folic_Acid_(µg)',
          dataIndex: 'folic_acid'  // 叶酸〔尤存在于绿色蔬菜中的一种维生素，人体利用其来制造红细胞
        },
        {
          title: 'Food_Folate_(µg)',
          dataIndex: 'food_folate'  // 叶酸
        },
        {
          title: 'Folate_DFE_(µg)',
          dataIndex: 'folate_DFE'  // 
        },
        {
          title: 'Choline_Tot(mg)',
          dataIndex: 'choline_tot'  //  维他命B复合体之一；胆碱
        },
        {
          title: 'Vit_B12_(µg)',
          dataIndex: 'Vit_B12'  // b12
        },
        {
          title: 'Vit_A_IU',
          dataIndex: 'Vit_A_IU'  // 
        },
        {
          title: 'Vit_A_RAE',
          dataIndex: 'Vit_A_RAE'  // 
        },
        {
          title: 'Retinol(µg)',
          dataIndex: 'retinol'  // 维生素A醇
        },
        {
          title: 'Alpha_Carot(µg)',
          dataIndex: 'Alpha_carot'  //
        },
        {
          title: 'Beta_Carot(µg)',
          dataIndex: 'Beta_carot(µg)'  // 
        },
        {
          title: 'Beta_Crypt(µg)',
          dataIndex: 'Beta_crypt'  // b12
        },
        {
          title: 'Lycopene(µg)',
          dataIndex: 'lycopene'  // 番茄红素
        },
        {
          title: 'Lut+Zea(µg)',
          dataIndex: 'Lut+Zea'  // 
        },
        {
          title: 'Vit_E(mg)',
          dataIndex: 'Vit_E'  // 
        },
        {
          title: 'Vit_D(µg)',
          dataIndex: 'Vit_D'  // 
        },
        {
          title: 'Vit_D_IU',
          dataIndex: 'Vit_D_IU'  // 
        },
        {
          title: 'Vit_K(µg)',
          dataIndex: 'Vit_K'  // 
        },
        {
          title: 'FA_Sat(g)',
          dataIndex: 'FA_Sat'  // 
        },
        {
          title: 'FA_Mono(g)',
          dataIndex: 'FA_Mono'  // 
        },
        {
          title: 'FA_Poly(g)',
          dataIndex: 'FA_Poly'  // 
        },
        {
          title: 'Cholestrl(mg)',
          dataIndex: 'cholestrl'  // 胆汁
        },
        {
          title: 'GmWt_1',
          dataIndex: 'GmWt_1'  // 
        },
        {
          title: 'GmWt_Desc1',
          dataIndex: 'GmWt_Desc1'  // 
        },
        {
          title: 'GmWt_2',
          dataIndex: 'GmWt_2'  // 
        },
        {
          title: 'GmWt_Desc2',
          dataIndex: 'GmWt_Desc2'  // 胆汁
        },
        {
          title: 'Refuse_Pct',
          dataIndex: 'refuse_pct'  // 
        },
        {
          title: '操作',
          dataIndex: 'status',
          sort: true,

          // 右固定列示例
          fixed: 'right',

          // 禁用点击展开功能
          expandable: false,
          width: '15vw',
          render: (status, data, index) => {  //status
            // console.log(status)
            // console.log(index)
            // console.log(text)
            return <AtButton type={status ? 'primary' : 'secondary'} size='small' circle full onClick={this.buttonOnClick.bind(this, status, index)}>{status ? '添加' : '删除'}</AtButton>;
            // <Button type={t ? 'default' : 'warn'} size="mini">{t ? '启用' : '禁用'}</Button>;
          },
        }
      ],
      searchDataSource: [],
      selectDataSource: []
    }
  }
  buttonOnClick(status, index){
    var dataSource = this.state.searchDataSource
    dataSource[index].status = status ? 0 : 1
    this.setState({
      dataSource: dataSource
    })
    
    Taro.setStorage({
      key: "dataSource",
      data: this.state.dataSource
    })
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick(){
    Taro.request({
      url: 'http://192.168.137.1:8000/search/?search_data=' + this.state.value
    }).then(res => {
      // console.log(123)
      // console.log(res.data)
      let result = res.data.message
      let datasource: any[] = []
      for (let data of result) {
        datasource.push(
          { 'Shrt_Desc': data[1], 'water': data[2], 'energy': data[3], 'protein': data[4], 'lipid_tot': data[5], 'ash': data[6], 'carbohydrt': data[7], 'fiber_td': data[8], 'sugar_tot': data[9], 'calcium': data[10], 'iron': data[11], 'magnesium': data[12], 'phosphorus': data[13], 'potassium': data[14], 'sodium': data[15], 'zinc': data[16], 'copper': data[17], 'manganese': data[18], 'selenium': data[19], 'Vit_C': data[20], 'thiamin': data[21], 'riboflavin': data[22], 'Niacin': data[23], 'panto_acid': data[24], 'Vit_B6': data[25], 'folate_tot': data[26], 'folic_acid': data[27], 'food_folate': data[28], 'folate_DFE': data[29], 'choline_tot': data[30], 'Vit_B12': data[31], 'Vit_A_IU': data[32], 'Vit_A_RAE': data[33], 'retinol': data[34], 'Alpha_carot': data[35], 'Beta_carot(µg)': data[36], 'Beta_crypt': data[37], 'lycopene': data[38], 'Lut+Zea': data[39], 'Vit_E': data[40], 'Vit_D': data[41], 'Vit_D_IU': data[42], 'Vit_K': data[43], 'FA_Sat': data[44], 'FA_Mono': data[45], 'FA_Poly': data[46], 'cholestrl': data[47], 'GmWt_1': data[48], 'GmWt_Desc1': data[49], 'GmWt_2': data[50], 'GmWt_Desc2': data[51], 'refuse_pct': data[52], status: 1 }
        )
      }
      this.setState({
        result: res.data.message,
        searchDataSource: datasource
      })
      if (this.state.result != '') {
        this.setState({
          isShow: true
        })
      }
      else {
        this.setState({
          isShow: false
        })
        Taro.clearStorage()
      }
    })
  }

  render() {
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        {this.state.isShow && <Table
          // onChange={(v) => { console.log('onChange , v'); }
          columns={this.state.columns}
          dataSource={this.state.searchDataSource}
          rowKey="title" 
          scroll={{
            x: '100vw', 
            y: 400,
          }} 
        />}
      </View>
    )
  }
}
