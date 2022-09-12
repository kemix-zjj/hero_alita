import HomeGary from '@/assets/demoIcon/home.png';
import HomeBlue from '@/assets/demoIcon/home1.png';
import ListGary from '@/assets/demoIcon/list.png';
import ListBlue from '@/assets/demoIcon/list1.png';
import SettingGray from '@/assets/demoIcon/setting.png'
import SettingBlue from '@/assets/demoIcon/setting1.png'
import StrategyGary from '@/assets/demoIcon/strategy.png'
import type {
  NavBarListItem,
  NavBarProps,
  ResponseError,
  TabBarListItem,
  TabBarProps,
  TitleListItem,
} from 'alita';

export const request = {
  // prefix: '/api',
  prefix: '',
  method: 'get',
  // 为请求增加请求头
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
  errorHandler: error => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};

// 设置标题
const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '王者荣耀',
  }
];

// 导航栏，未配置，则默认展示navBar并且标题未默认标题
const navList: NavBarListItem[] = [];

// 定义头部导航信息
const navBar: NavBarProps = {
  navList,
  // mode: 'light', //没变化？？
  // fixed: true, //已去除
  pageBackground: 'white',//定义页面颜色 
  color: '#5415ac',
  // selectedColor:'#f5b866',

};

// 底部导航
const tabList: TabBarListItem[] = [
  {
    pagePath: '/',
    text: '首页',
    iconPath: HomeGary,
    selectedIconPath: HomeBlue,
    title: '首页',
    iconSize: '', //图标
    badge: '', //消息
  },
  {
    pagePath: '/strategy',
    text: '攻略中心',
    iconPath: ListGary,
    selectedIconPath: ListBlue,
    title: '攻略中心',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/event',
    text: '赛事中心',
    iconPath: SettingGray,
    selectedIconPath: SettingBlue,
    title: '赛事中心',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/games',
    text: 'IP新游',
    iconPath: StrategyGary,
    selectedIconPath: ListBlue,
    title: 'IP新游',
    iconSize: '',
    badge: '',
  }
];

// 定义页面切换页信息
const tabBar: TabBarProps = {
  color: `#5415ac`,
  selectedColor: '#f5b866',
  backgroungColor: 'red',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,// []则代表隐藏底部导航
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
