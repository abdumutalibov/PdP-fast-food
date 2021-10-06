import Generic from "../page/Generic";
  
import  buyurtma from '../assets/icons/buyurtmalar.svg';
import  filial  from '../assets/icons/filial.svg';
import  hisobot  from '../assets/icons/hisobot.svg';
import  hodimlar  from '../assets/icons/settings.svg';
import settings  from '../assets/icons/settings.svg';
import  mahsulotlar  from '../assets/icons/mahsulotlar.svg';
import kategoriya  from '../assets/icons/kategoriya.svg';
import  mijozlar  from '../assets/icons/mijozlar.svg';


export const sidebar = [
    {
      id: 1,
      path: 'buyurtmalar',
      title: 'Buyurtmalar',
      Component: Generic,
      Icon: buyurtma,
      hidden: false,
    },
    {
      id: 2,
      path: '/maxsulotlar',
      title: 'Maxsulotlar',
      Component: Generic,
      Icon: mahsulotlar,
      hidden: false,
    },
    {
      id: 3,
      path: '/katigoriya',
      title: 'Katigoriya',
      Component: Generic,
      Icon: kategoriya,
      hidden: false,
    },
    {
      id: 4,
      path: '/filiallar',
      title: 'Filiallar',
      Component: Generic,
      Icon: filial,
      hidden: false,
    },
    {
      id: 5,
      path: '/mijozlar',
      title: 'Mijozlar',
      Component: Generic,
      Icon: mijozlar,
      hidden: false,
    },
    {
      id: 6,
      path: '/hisobot',
      title: 'Hisobot',
      Component: Generic,
      Icon: hisobot,
      hidden: false,
    },
    {
      id: 7,
      path: '/hodimlar',
      title: 'Hodimlar',
      Component: Generic,
      Icon: hodimlar,
      hidden: false,
    },
    {
      id: 8,
      path: '/katalog',
      title: 'Katalog',
      Component: Generic,
      Icon: settings,
      hidden: false,
    },
  ];