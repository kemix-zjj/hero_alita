import React, { useState, FC } from 'react'
import { query } from './service'
import { Swiper, Space, Tabs, Card } from 'antd-mobile';
import { Page, Content, Header, Footer, Show } from '@alita/flow';
import { MovieOutline } from 'antd-mobile-icons'
import styles from './index.less';

// 图片导入
import banner1 from '@/assets/heros/banner1.jpg'
import banner2 from '@/assets/heros/banner2.jpg'
import banner3 from '@/assets/heros/banner3.jpg'
import banner4 from '@/assets/heros/banner4.jpg'
import { useRequest } from 'alita';

// 英雄分类
const heroType = [
  // { key: 0, value: '热门' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' }
]

// 轮播图数据获取
const imgs = [banner1, banner2, banner3, banner4]
const items = imgs.map((img, index) => (
  <Swiper.Item key={index}>
    <img src={img} alt="" className={styles.img} />
  </Swiper.Item>
))


interface HerosPageProps { }
const localData = []
const HerosPage: FC<HerosPageProps> = () => {
  // 存储点击英雄类型的key值
  const [filterKey, setFilterKey] = useState(0);
  // 存储过滤筛选后的英雄数据
  const [filterHeros, setFilterHeros] = useState([]);
  // 英雄数据获取
  const { data: heros = localData } = useRequest(query);

  // 测试
  // console.log('真实的数据', heros); //真实的数据 对数据进行遍历输出是要对真实的数据进行的，不能对虚拟的DOM数据进行处理
  // console.log('虚拟DOM', herosArray); //虚拟DOM 

  // 1.点击英雄类型进行相关展示（要进行数据变化存储。因为有切换英雄类型）
  // 获取点击英雄类型的key值
  const onChange = (key) => {
    // console.log('点击英雄类型的key值', key);
    // 进行更新存储
    setFilterKey(key)
    // 通过点击获取到的key值对真实的的英雄数据进行过滤筛选(key = hero_type)
    const newheros = heros.filter((item) => {
      // console.log('每一个英雄的信息', item);
      // console.log('英雄的hero_type:', item.hero_type, '点击英雄类型的key值:', key);
      return item.hero_type == key
    })
    // 过滤后的英雄数据
    // console.log(newheros);
    // 对过滤后的英雄数据进行存储
    setFilterHeros(newheros)
  }
  // 2.热门英雄相关展示（初始化展示就好，不用useState进行存储相关数据变化）
  const hotheros = heros.filter((item) => {
    // 热门英雄的具有hero_type2的属性值的
    return item.hero_type2
  })


  return (
    <Page>
      <Header>
        {/* 轮播图导航展示 */}
        <div id='heroList' className={styles.heroList}>
          <span>
            <Space wrap style={{ fontSize: 15 }}>
              <MovieOutline />
            </Space>
            {/* 空格 */}
            &nbsp;
            英雄列表
          </span>
          {/* 三个点点的实现 */}

        </div>
        <div id='slide'>
          {/* 轮播图效果展示 */}
          <Swiper
            trackOffset={10}
            allowTouchMove={true}  //手势切换
            autoplay={true} //自动播放
            loop={true} //循环
          >{items}</Swiper>
        </div>

      </Header>

      <Content>
        {/* 英雄展示区：优化--> 可以将遍历数据的操作提前出来。 */}
        <Tabs onChange={onChange}>
          <Tabs.Tab title='热门' key='hots'>
            {hotheros.map(item => {
              const imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`
              return (
                <Space className={styles.heroitem} key={item.ename}>
                  <Card className={styles.herocard} >
                    <img src={imgUrl} />
                    <p>{item.cname}</p>
                  </Card>
                </Space>
              )
            })}

          </Tabs.Tab>
          {heroType.map(data => (
            <Tabs.Tab title={data.value} key={data.key} >
              {filterHeros.map(item => {
                const imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`
                return (
                  <Space className={styles.heroitem} key={item.ename}>
                    <Card className={styles.herocard} >
                      <img src={imgUrl} />
                      <p>{item.cname}</p>
                    </Card>
                  </Space>
                )
              })}
            </Tabs.Tab>
          ))}

        </Tabs>
      </Content>

      <Footer>

      </Footer>
    </Page>
  );
};

export default HerosPage;
