import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import Table from 'taro3-table'
import { AtButton } from 'taro-ui'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 1,
      isShow: true,
      isShowToltalData: false,
      columns: [
        {
          title: '名称',
          dataIndex: 'Shrt_Desc',
          fixed:"left"
        },
        {
          title: 'Water_(g)',
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
          render: (status,data,index) => {
            // console.log(t)
            return <AtButton type='secondary' size='small' circle full onClick={() => { 
              this.setState({
                dataSource: this.state.dataSource.filter(item => item !== data)
              });
              Taro.setStorage({
                key: "dataSource",
                data: this.state.dataSource.filter(item => item !== data)
              }) }}>删除</AtButton>;
            // <Button type={t ? 'default' : 'warn'} size="mini">{t ? '启用' : '禁用'}</Button>;
          },
        }
      ],
      dataSource: [],
      totalDataColumns:[
        {
          title: '键',
          dataIndex: 'dataKey',
          fixed:"left",
          width: '30vw'
        },
        {
          title: '值',
          dataIndex: 'dataValue',
          width: '30vw'
        },
      ],
      totalDataSource:[]
    }
  }
  componentDidShow () {
    Taro.getStorage({
      key: 'dataSource',
      success : (res) => {
        console.log(res.data);
        this.setState({
        dataSource: res.data
      })
      }
    })
    // console.log(this.state.dataSource)
  }
  // calculate(){}
  calculate(){
    let totalData = {'water': 0, 'energy': 0, 'protein': 0, 'lipid_tot': 0, 'ash': 0, 'carbohydrt': 0, 'fiber_td': 0, 'sugar_tot': 0, 'calcium': 0, 'iron': 0, 'magnesium': 0, 'phosphorus': 0, 'potassium': 0, 'sodium': 0, 'zinc': 0, 'copper': 0, 'manganese': 0, 'selenium': 0, 'Vit_C': 0, 'thiamin': 0, 'riboflavin': 0, 'Niacin': 0, 'panto_acid': 0, 'Vit_B6': 0, 'folate_tot': 0, 'folic_acid': 0, 'food_folate': 0, 'folate_DFE': 0, 'choline_tot': 0, 'Vit_B12': 0, 'Vit_A_IU': 0, 'Vit_A_RAE': 0, 'retinol': 0, 'Alpha_carot': 0, 'Beta_carot(µg)': 0, 'Beta_crypt': 0, 'lycopene': 0, 'Lut+Zea': 0, 'Vit_E': 0, 'Vit_D': 0, 'Vit_D_IU': 0, 'Vit_K': 0, 'FA_Sat': 0, 'FA_Mono': 0, 'FA_Poly': 0, 'cholestrl': 0, 'GmWt_1': 0, 'GmWt_2': 0, 'refuse_pct': 0}
       
    for (let data of this.state.dataSource) {
      for(let keystr of Object.keys(totalData)){
        totalData[keystr] = data[keystr] + totalData[keystr]
      }
    }
    let showData: any[] = []
    for (let dataOfKey of Object.keys(totalData)){
      showData.push({"dataKey":dataOfKey, "dataValue":totalData[dataOfKey].toFixed(3)})
    }
    this.setState({
      totalDataSource: showData,
      isShowToltalData: true
    })
  }
  onClickModalAction(){
    this.setState({
      isShowToltalData: false
    })
  }
  render () {
    return (
      <View className='index'>
        {this.state.isShow && <Table
          // onChange={(v) => { console.log('onChange , v'); }
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          rowKey="title"
          scroll={{
            x: '100vw',
            y: 400,
          }}
          />}
          <AtModal isOpened={this.state.isShowToltalData}>
            {this.state.isShowToltalData && <Table
            // onChange={(v) => { console.log('onChange , v'); }
            columns={this.state.totalDataColumns}
            dataSource={this.state.totalDataSource}
            rowKey="keyData"
            scroll={{
              x: '100vx',
              y: 400,
            }}
            style={{
              margin: "auto",
            }}
            />}
            <AtModalAction> <AtButton type='primary' size='small' full onClick={this.onClickModalAction.bind(this)}>确定</AtButton> </AtModalAction>
          </AtModal>
          <AtButton type='primary' size='small' circle onClick={this.calculate.bind(this)}>计算总值</AtButton>
          
      </View>
    )
  }
}
