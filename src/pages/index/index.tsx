import { Component, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components';
import './index.scss'
import Table from 'taro3-table'
import { AtSearchBar, AtTabBar, AtButton, AtToast } from 'taro-ui'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      current: 0,
      isShow: false,
      result: '',
      showToast: false,
      isSearch: false,
      columns: [
        {
          title: '名称',
          dataIndex: 'Shrt_Desc',
          fixed: "left"
        },
        {
          title: '含水量(g)',
          dataIndex: 'water',  // 含水量
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.water - b.water;
            } else {
              return b.water - a.water;
            }
          },
        },
        {
          title: '能量(KJ)',
          dataIndex: 'energy',  // 能量
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.energy - b.energy;
            } else {
              return b.energy - a.energy;
            }
          },
        },
        {
          title: '蛋白质(g)',
          dataIndex: 'protein',  // 蛋白质
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.protein - b.protein;
            } else {
              return b.protein - a.protein;
            }
          }
        }, {
          title: '脂质总量(g)',
          dataIndex: 'lipid_tot',  // 脂质
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.lipid_tot - b.lipid_tot;
            } else {
              return b.lipid_tot - a.lipid_tot;
            }
          }
        },
        {
          title: '灰分(g)',    //灰分
          dataIndex: 'ash',
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.ash - b.ash;
            } else {
              return b.ash - a.ash;
            }
          }
        },
        {
          title: '总碳水化合物(g)',
          dataIndex: 'carbohydrt',  // 碳
          sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.carbohydrt - b.carbohydrt;
            } else {
              return b.carbohydrt - a.carbohydrt;
            }
          }
        },
        {
          title: '纤维(g)',
          dataIndex: 'fiber_td'  // 纤维
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.fiber_td - b.fiber_td;
            } else {
              return b.fiber_td - a.fiber_td;
            }
          }
        },
        {
          title: '糖(g)',
          dataIndex: 'sugar_tot'  // 糖
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.sugar_tot - b.sugar_tot;
            } else {
              return b.sugar_tot - a.sugar_tot;
            }
          }
        },
        {
          title: '钙(mg)',
          dataIndex: 'calcium'    // 钙
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.calcium - b.calcium;
            } else {
              return b.calcium - a.calcium;
            }
          }
        },
        {
          title: '铁(mg)',
          dataIndex: 'iron'  // 铁
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.iron - b.iron;
            } else {
              return b.iron - a.iron;
            }
          }
        },
        {
          title: '镁(mg)',
          dataIndex: 'magnesium'  // 镁
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.magnesium - b.magnesium;
            } else {
              return b.magnesium - a.magnesium;
            }
          }
        },
        {
          title: '磷(mg)',
          dataIndex: 'phosphorus'  // 磷
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.phosphorus - b.phosphorus;
            } else {
              return b.phosphorus - a.phosphorus;
            }
          }
        },
        {
          title: '钾(mg)',
          dataIndex: 'potassium'  // 钾
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.potassiumc - b.potassiumc;
            } else {
              return b.potassiumc - a.potassiumc;
            }
          }
        },
        {
          title: '钠(mg)',
          dataIndex: 'sodium'  // 钠
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.sodium - b.sodium;
            } else {
              return b.sodium - a.sodium;
            }
          }
        },
        {
          title: '锌(mg)',
          dataIndex: 'zinc'  // 锌
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.zinc - b.zinc;
            } else {
              return b.zinc - a.zinc;
            }
          }
        },
        {
          title: '铜(mg)',
          dataIndex: 'copper'  // 铜
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.copper - b.copper;
            } else {
              return b.copper - a.copper;
            }
          }
        },
        {
          title: '锰(mg)',
          dataIndex: 'manganese'  // 锰
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.manganese - b.manganese;
            } else {
              return b.manganese - a.manganese;
            }
          }
        },
        {
          title: '硒(µg)',
          dataIndex: 'selenium'  // 硒
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.selenium - b.selenium;
            } else {
              return b.selenium - a.selenium;
            }
          }
        },
        {
          title: '维生素C(mg)',
          dataIndex: 'Vit_C'  // 维他命c
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_C - b.Vit_C;
            } else {
              return b.Vit_C - a.Vit_C;
            }
          }
        },
        {
          title: '硫胺素(mg)',
          dataIndex: 'thiamin'  // 硫胺素，维生素B1
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.thiamin - b.thiamin;
            } else {
              return b.thiamin - a.thiamin;
            }
          }
        },
        {
          title: '核黄素(mg)',
          dataIndex: 'riboflavin'  // 核黄素，维生素B2
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.riboflavin - b.riboflavin;
            } else {
              return b.riboflavin - a.riboflavin;
            }
          }
        },
        {
          title: '烟酸(mg)',
          dataIndex: 'Niacin'  // 烟酸〔一种有益于皮肤和神经系统的维生素〕
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Niacin - b.Niacin;
            } else {
              return b.Niacin - a.Niacin;
            }
          }
        },
        {
          title: '维生素B5(mg)',
          dataIndex: 'panto_acid'  // 潘托酸
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.panto_acid - b.panto_acid;
            } else {
              return b.panto_acid - a.panto_acid;
            }
          }
        },
        {
          title: '维生素B6(mg)',
          dataIndex: 'Vit_B6'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_B6 - b.Vit_B6;
            } else {
              return b.Vit_B6 - a.Vit_B6;
            }
          }
        },
        {
          title: '叶酸总数(µg)',
          dataIndex: 'folate_tot'  // 叶酸
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.folate_tot - b.folate_tot;
            } else {
              return b.folate_tot - a.folate_tot;
            }
          }
        },
        {
          title: 'Folic_Acid_叶酸(µg)',
          dataIndex: 'folic_acid'  // 叶酸〔尤存在于绿色蔬菜中的一种维生素，人体利用其来制造红细胞
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.folic_acid - b.folic_acid;
            } else {
              return b.folic_acid - a.folic_acid;
            }
          }
        },
        {
          title: 'Food_Folate_食物叶酸(µg)',
          dataIndex: 'food_folate'  // 叶酸
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.food_folate - b.food_folate;
            } else {
              return b.food_folate - a.food_folate;
            }
          }
        },
        {
          title: '叶酸当量(µg)',
          dataIndex: 'folate_DFE'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.folate_DFE - b.folate_DFE;
            } else {
              return b.folate_DFE - a.folate_DFE;
            }
          }
        },
        {
          title: '胆碱总量(mg)',
          dataIndex: 'choline_tot'  //  维他命B复合体之一；胆碱
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.choline_tot - b.choline_tot;
            } else {
              return b.choline_tot - a.choline_tot;
            }
          }
        },
        {
          title: '维生素B12(µg)',
          dataIndex: 'Vit_B12'  // b12
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_B12 - b.Vit_B12;
            } else {
              return b.Vit_B12 - a.Vit_B12;
            }
          }
        },
        {
          title: '维生素A IU',
          dataIndex: 'Vit_A_IU'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_A_IU - b.Vit_A_IU;
            } else {
              return b.Vit_A_IU - a.Vit_A_IU;
            }
          }
        },
        {
          title: '维生素A RAE',
          dataIndex: 'Vit_A_RAE'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_A_RAE - b.Vit_A_RAE;
            } else {
              return b.Vit_A_RAE - a.Vit_A_RAE;
            }
          }
        },
        {
          title: '视黄醇(µg)',
          dataIndex: 'retinol'  // 维生素A醇
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.retinol - b.retinol;
            } else {
              return b.retinol - a.retinol;
            }
          }
        },
        {
          title: '阿尔法胡萝卜素(µg)',
          dataIndex: 'Alpha_carot'  //
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Alpha_carot - b.Alpha_carot;
            } else {
              return b.Alpha_carot - a.Alpha_carot;
            }
          }
        },
        {
          title: '贝塔胡萝卜素(µg)',
          dataIndex: 'Beta_carot'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Beta_carot - b.Beta_carot;
            } else {
              return b.Beta_carot - a.Beta_carot;
            }
          }
        },
        {
          title: 'Beta 隐黄素(µg)',
          dataIndex: 'Beta_crypt'  // b12
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Beta_crypt - b.Beta_crypt;
            } else {
              return b.Beta_crypt - a.Beta_crypt;
            }
          }
        },
        {
          title: '番茄红素Lycopene(µg)',
          dataIndex: 'lycopene'  // 番茄红素
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.lycopene - b.lycopene;
            } else {
              return b.lycopene - a.lycopene;
            }
          }
        },
        {
          title: '叶黄素(µg)',
          dataIndex: 'LutZea'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.LutZea - b.LutZea;
            } else {
              return b.LutZea - a.LutZea;
            }
          }
        },
        {
          title: '维生素E(mg)',
          dataIndex: 'Vit_E'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_E - b.Vit_E;
            } else {
              return b.Vit_E - a.Vit_E;
            }
          }
        },
        {
          title: '维生素d(µg)',
          dataIndex: 'Vit_D'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_D - b.Vit_D;
            } else {
              return b.Vit_D - a.Vit_D;
            }
          }
        },
        {
          title: '维生素的D_IU',
          dataIndex: 'Vit_D_IU'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_D_IU - b.Vit_D_IU;
            } else {
              return b.Vit_D_IU - a.Vit_D_IU;
            }
          }
        },
        {
          title: '维生素K(µg)',
          dataIndex: 'Vit_K'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.Vit_K - b.Vit_K;
            } else {
              return b.Vit_K - a.Vit_K;
            }
          }
        },
        {
          title: '饱和脂肪酸(g)',
          dataIndex: 'FA_Sat'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.FA_Sat - b.FA_Sat;
            } else {
              return b.FA_Sat - a.FA_Sat;
            }
          }
        },
        {
          title: '单不饱和脂肪酸(g)',
          dataIndex: 'FA_Mono'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.FA_Mono - b.FA_Mono;
            } else {
              return b.FA_Mono - a.FA_Mono;
            }
          }
        },
        {
          title: '多不饱和脂肪酸(g)',
          dataIndex: 'FA_Poly'  // 
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.FA_Poly - b.FA_Poly;
            } else {
              return b.FA_Poly - a.FA_Poly;
            }
          }
        },
        {
          title: '胆固醇(mg)',
          dataIndex: 'cholestrl'  // 胆汁
          , sort: true,
          sorter: (a, b, sortOrder) => {
            if (sortOrder === 'ascend') {
              return a.cholestrl - b.cholestrl;
            } else {
              return b.cholestrl - a.cholestrl;
            }
          }
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
            return <AtButton type='primary' size='small' circle full onClick={this.buttonOnClick.bind(this, data)}>添加</AtButton>;
            // <Button type={t ? 'default' : 'warn'} size="mini">{t ? '启用' : '禁用'}</Button>;
          },
        }
      ],
      searchDataSource: [],
      selectDataSource2: []
    }
  }

  buttonOnClick(data) {
    let dataSource = this.state.selectDataSource2.push(data)
    this.setState({
      selectDataSource: dataSource,
      showToast: true
    })
    // Taro.getStorage({
    //   key: 'dataSource',
    //   success : (res) => {
    //     console.log(res.data);
    //     if(res.data.filter(item => item !== data)===res.data){

    //   }}})
    Taro.setStorage({
      key: "dataSource",
      data: this.state.selectDataSource2
    })
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    Taro.request({
      url: 'http://114.132.185.16:9000/search/?search_data=' + this.state.value
    }).then(res => {
      // console.log(123)
      // console.log(res.data)
      let result = res.data.message
      console.log(result.length)
      let datasource: any[] = []
      for (let data of result) {
        datasource.push(
          { 'Shrt_Desc': data[1], 'water': data[2], 'energy': data[3], 'protein': data[4], 'lipid_tot': data[5], 'ash': data[6], 'carbohydrt': data[7], 'fiber_td': data[8], 'sugar_tot': data[9], 'calcium': data[10], 'iron': data[11], 'magnesium': data[12], 'phosphorus': data[13], 'potassium': data[14], 'sodium': data[15], 'zinc': data[16], 'copper': data[17], 'manganese': data[18], 'selenium': data[19], 'Vit_C': data[20], 'thiamin': data[21], 'riboflavin': data[22], 'Niacin': data[23], 'panto_acid': data[24], 'Vit_B6': data[25], 'folate_tot': data[26], 'folic_acid': data[27], 'food_folate': data[28], 'folate_DFE': data[29], 'choline_tot': data[30], 'Vit_B12': data[31], 'Vit_A_IU': data[32], 'Vit_A_RAE': data[33], 'retinol': data[34], 'Alpha_carot': data[35], 'Beta_carot': data[36], 'Beta_crypt': data[37], 'lycopene': data[38], 'LutZea': data[39], 'Vit_E': data[40], 'Vit_D': data[41], 'Vit_D_IU': data[42], 'Vit_K': data[43], 'FA_Sat': data[44], 'FA_Mono': data[45], 'FA_Poly': data[46], 'cholestrl': data[47], 
          // 'GmWt_1': data[48], 'GmWt_Desc1': data[49], 'GmWt_2': data[50], 'GmWt_Desc2': data[51], 'refuse_pct': data[52], 
          status: 1 }
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
        // 未搜索到
        this.setState({
          isShow: false,
          isSearch: true
        })
        Taro.clearStorage()
      }
    })
  }
  onCloseToast() {
    this.setState({
      showToast: false,
      isSearch: false
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
        <AtToast isOpened={this.state.showToast} text="成功" status='success' duration={200} onClose={this.onCloseToast.bind(this)}></AtToast>
        <AtToast isOpened={this.state.isSearch} text="未搜索到" status='error' duration={300} onClose={this.onCloseToast.bind(this)}></AtToast>
      </View>
    )
  }
}
