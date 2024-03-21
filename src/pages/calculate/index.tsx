import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import Table from 'taro3-table'
import { AtButton } from 'taro-ui'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
const standardData = {
  "water": {
      "title": "含水量(g)",
      "value": 1300
  },
  "energy": {
      "title": "能量(KJ)",
      "value": 2600
  },
  "protein": {
      "title": "蛋白质(g)",
      "value": 60
  },
  "lipid_tot": {
      "title": "脂质总量(g)",
      "value": "20-30"
  },
  "ash": {
      "title": "灰分(g)",
      "value": 0
  },
  "carbohydrt": {
      "title": "总碳水化合物(g)",
      "value": 120
  },
  "fiber_td": {
      "title": "纤维(g)",
      "value": 0
  },
  "sugar_tot": {
      "title": "糖(g)",
      "value": "≤10"
  },
  "calcium": {
      "title": "钙(mg)",
      "value": 800
  },
  "iron": {
      "title": "铁(mg)",
      "value": 12
  },
  "magnesium": {
      "title": "镁(mg)",
      "value": 330
  },
  "phosphorus": {
      "title": "磷(mg)",
      "value": 720
  },
  "potassium": {
      "title": "钾(mg)",
      "value": 2000
  },
  "sodium": {
      "title": "钠(mg)",
      "value": 1500
  },
  "zinc": {
      "title": "锌(mg)",
      "value": 12.5
  },
  "copper": {
      "title": "铜(mg)",
      "value": 0.8
  },
  "manganese": {
      "title": "锰(mg)",
      "value": 4.5
  },
  "selenium": {
      "title": "硒(µg)",
      "value": 60
  },
  "Vit_C": {
      "title": "维生素C(mg)",
      "value": 100
  },
  "thiamin": {
      "title": "硫胺素(mg)",
      "value": 0
  },
  "riboflavin": {
      "title": "核黄素(mg)",
      "value": 0
  },
  "Niacin": {
      "title": "烟酸(mg)",
      "value": 15
  },
  "panto_acid": {
      "title": "维生素B5(mg)",
      "value": 0
  },
  "Vit_B6": {
      "title": "维生素B6(mg)",
      "value": 1.4
  },
  "folate_tot": {
      "title": "叶酸总数(µg)",
      "value": 400
  },
  "folic_acid": {
      "title": "Folic_Acid_叶酸(µg)",
      "value": 0
  },
  "food_folate": {
      "title": "Food_Folate_食物叶酸(µg)",
      "value": 0
  },
  "folate_DFE": {
      "title": "叶酸当量(µg)",
      "value": 0
  },
  "choline_tot": {
      "title": "胆碱总量(mg)",
      "value": 500
  },
  "Vit_B12": {
      "title": "维生素B12(µg)",
      "value": 2.4
  },
  "Vit_A_IU": {
      "title": "维生素A IU",
      "value": 0
  },
  "Vit_A_RAE": {
      "title": "维生素A RAE",
      "value": 0
  },
  "retinol": {
      "title": "视黄醇(µg)",
      "value": 0
  },
  "Alpha_carot": {
      "title": "阿尔法胡萝卜素(µg)",
      "value": 0
  },
  "Beta_carot": {
      "title": "贝塔胡萝卜素(µg)",
      "value": 0
  },
  "Beta_crypt": {
      "title": "Beta 隐黄素(µg)",
      "value": 0
  },
  "lycopene": {
      "title": "番茄红素Lycopene(µg)",
      "value": 0
  },
  "LutZea": {
      "title": "叶黄素(µg)",
      "value": 0
  },
  "Vit_E": {
      "title": "维生素E(mg)",
      "value": 0
  },
  "Vit_D": {
      "title": "维生素d(µg)",
      "value": 0
  },
  "Vit_D_IU": {
      "title": "维生素的D_IU",
      "value": 0
  },
  "Vit_K": {
      "title": "维生素K(µg)",
      "value": 0
  },
  "FA_Sat": {
      "title": "饱和脂肪酸(g)",
      "value": 0
  },
  "FA_Mono": {
      "title": "单不饱和脂肪酸(g)",
      "value": 0
  },
  "FA_Poly": {
      "title": "多不饱和脂肪酸(g)",
      "value": 0
  },
  "cholestrl": {
      "title": "胆固醇(mg)",
      "value": 0
  },
  // "GmWt_1": {
  //     "title": "GmWt_1",
  //     "value": 0
  // },
  // "GmWt_2": {
  //     "title": "GmWt_2",
  //     "value": 0
  // },
  // "refuse_pct": {
  //     "title": "Refuse_Pct",
  //     "value": 0
  // }
}

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      isShow: true,
      isShowToltalData: false,
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
        // {
        //   title: 'GmWt_1',
        //   dataIndex: 'GmWt_1'  // 
        //   , sort: true,
        //   sorter: (a, b, sortOrder) => {
        //     if (sortOrder === 'ascend') {
        //       return a.GmWt_1 - b.GmWt_1;
        //     } else {
        //       return b.GmWt_1 - a.GmWt_1;
        //     }
        //   }
        // },
        // {
        //   title: 'GmWt_Desc1',
        //   dataIndex: 'GmWt_Desc1'  // 
        //   , sort: true,
        //   sorter: (a, b, sortOrder) => {
        //     if (sortOrder === 'ascend') {
        //       return a.GmWt_Desc1 - b.GmWt_Desc1;
        //     } else {
        //       return b.GmWt_Desc1 - a.GmWt_Desc1;
        //     }
        //   }
        // },
        // {
        //   title: 'GmWt_2',
        //   dataIndex: 'GmWt_2'  // 
        //   , sort: true,
        //   sorter: (a, b, sortOrder) => {
        //     if (sortOrder === 'ascend') {
        //       return a.GmWt_2 - b.GmWt_2;
        //     } else {
        //       return b.GmWt_2 - a.GmWt_2;
        //     }
        //   }
        // },
        // {
        //   title: 'GmWt_Desc2',
        //   dataIndex: 'GmWt_Desc2'  // 胆汁
        //   , sort: true,
        //   sorter: (a, b, sortOrder) => {
        //     if (sortOrder === 'ascend') {
        //       return a.GmWt_Desc2 - b.GmWt_Desc2;
        //     } else {
        //       return b.GmWt_Desc2 - a.GmWt_Desc2;
        //     }
        //   }
        // },
        // {
        //   title: 'Refuse_Pct',
        //   dataIndex: 'refuse_pct'  // 
        //   , sort: true,
        //   sorter: (a, b, sortOrder) => {
        //     if (sortOrder === 'ascend') {
        //       return a.refuse_pct - b.refuse_pct;
        //     } else {
        //       return b.refuse_pct - a.refuse_pct;
        //     }
        //   }
        // },
        {
          title: '操作',
          dataIndex: 'status',
          sort: true,

          // 右固定列示例
          fixed: 'right',

          // 禁用点击展开功能
          expandable: false,
          width: '15vw',
          render: (status, data, index) => {
            // console.log(t)
            return <AtButton type='secondary' size='small' circle full onClick={() => {
              this.setState({
                dataSource: this.state.dataSource.filter(item => item !== data)
              });
              Taro.setStorage({
                key: "dataSource",
                data: this.state.dataSource.filter(item => item !== data)
              })
            }}>删除</AtButton>;
            // <Button type={t ? 'default' : 'warn'} size="mini">{t ? '启用' : '禁用'}</Button>;
          },
        }
      ],
      dataSource: [],
      totalDataColumns: [
        {
          title: '成分',
          dataIndex: 'dataKey',
          fixed: "left",
          width: '20vw'
        },
        {
          title: '值',
          dataIndex: 'dataValue',
          width: '25vw'
        },
        {
          title: '标准',
          dataIndex: 'standardValue',
          width: '25vw'
        }
      ],
      totalDataSource: []
    }
  }
  componentDidShow() {
    Taro.getStorage({
      key: 'dataSource',
      success: (res) => {
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
    let totalData = {'water': 0, 'energy': 0, 'protein': 0, 'lipid_tot': 0, 'ash': 0, 'carbohydrt': 0, 'fiber_td': 0, 'sugar_tot': 0, 'calcium': 0, 'iron': 0, 'magnesium': 0, 'phosphorus': 0, 'potassium': 0, 'sodium': 0, 'zinc': 0, 'copper': 0, 'manganese': 0, 'selenium': 0, 'Vit_C': 0, 'thiamin': 0, 'riboflavin': 0, 'Niacin': 0, 'panto_acid': 0, 'Vit_B6': 0, 'folate_tot': 0, 'folic_acid': 0, 'food_folate': 0, 'folate_DFE': 0, 'choline_tot': 0, 'Vit_B12': 0, 'Vit_A_IU': 0, 'Vit_A_RAE': 0, 'retinol': 0, 'Alpha_carot': 0, 'Beta_carot': 0, 'Beta_crypt': 0, 'lycopene': 0, 'LutZea': 0, 'Vit_E': 0, 'Vit_D': 0, 'Vit_D_IU': 0, 'Vit_K': 0, 'FA_Sat': 0, 'FA_Mono': 0,
    //  'FA_Poly': 0, 'cholestrl': 0, 'GmWt_1': 0, 'GmWt_2': 0, 'refuse_pct': 0
  }
       
    for (let data of this.state.dataSource) {
      for (let keystr of Object.keys(totalData)) {
        totalData[keystr] = data[keystr] + totalData[keystr]
      }
    }
    let showData: any[] = []
    for (let dataOfKey of Object.keys(totalData)) {
      console.log(standardData[dataOfKey])
      showData.push({ "dataKey": standardData[dataOfKey]["title"], "dataValue": Math.round(totalData[dataOfKey] * 10000) / 10000, "standardValue": standardData[dataOfKey]["value"] })
    }
    this.setState({
      totalDataSource: showData,
      isShowToltalData: true
    })
  }
  onClickModalAction() {
    this.setState({
      isShowToltalData: false
    })
  }
  render() {
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
