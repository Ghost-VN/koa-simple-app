const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    region: {
      id: 111,
      value: 'Вінницька',
    },
    city: {
      id: 876,
      value: 'Липовець',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    region: {
      id: 222,
      value: 'Житомирська',
    },
    city: {
      id: 412,
      value: 'Бердичів',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    region: {
      id: 333,
      value: 'Тернопільська',
    },
    city: {
      id: 148,
      value: 'Чортків',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    region: {
      id: 111,
      value: 'Вінницька',
    },
    city: {
      id: 877,
      value: 'Іллінці',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    region: {
      id: 444,
      value: 'Хмельницька',
    },
    city: {
      id: 541,
      value: 'Летичів',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    region: {
      id: 555,
      value: 'Львівська',
    },
    city: {
      id: 356,
      value: 'Яворів',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    region: {
      id: 777,
      value: 'Київська',
    },
    city: {
      id: 876,
      value: 'Фастів',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    region: {
      id: 111,
      value: 'Вінницька',
    },
    city: {
      id: 421,
      value: 'Ладижин',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    region: {
      id: 333,
      value: 'Тернопільська',
    },
    city: {
      id: 150,
      value: 'Збараж',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    region: {
      id: 333,
      value: 'Тернопільська',
    },
    city: {
      id: 153,
      value: 'Бережани',
    },
  },
];

const adverts = [
  {
    id: 31983781,
    marka: {
      id: '48',
      name: 'Mercedes-Benz',
    },
    model: {
      id: '59655',
      name: 'GLE 43 AMG',
    },
    price: {
      UAH: 1472403,
      USD: 51900,
      EUR: 46113,
    },
  },
  {
    id: 32050156,
    marka: {
      id: '84',
      name: 'Volkswagen',
    },
    model: {
      id: '38063',
      name: 'Passat B7',
    },
    price: {
      UAH: 363136,
      USD: 12800,
      EUR: 11372,
    },
  },
  {
    id: 31983249,
    marka: {
      id: '24',
      name: 'Ford',
    },
    model: {
      id: '239',
      name: 'Fiesta',
    },
    price: {
      UAH: 312041,
      USD: 10999,
      EUR: 9772,
    },
  },
  {
    id: 32040859,
    marka: {
      id: '84',
      name: 'Volkswagen',
    },
    model: {
      id: '38063',
      name: 'Passat B7',
    },
    price: {
      mainCurrency: '1',
      UAH: 312041,
      USD: 10999,
      EUR: 9772,
    },
  },
  {
    id: 32048971,
    marka: {
      id: '38',
      name: 'Lexus',
    },
    model: {
      id: '56869',
      name: 'GX 470',
    },
    price: {
      mainCurrency: '1',
      UAH: 516334,
      USD: 18200,
      EUR: 16170,
    },
  },
  {
    id: 31831722,
    marka: {
      id: '84',
      name: 'Volkswagen',
    },
    model: {
      id: '38063',
      name: 'Passat B7',
    },
    price: {
      mainCurrency: '1',
      UAH: 326255,
      USD: 11500,
      EUR: 10217,
    },
  },
  {
    id: 31958944,
    marka: {
      id: '24',
      name: 'Ford',
    },
    model: {
      id: '240',
      name: 'Focus',
    },
    price: {
      mainCurrency: '1',
      UAH: 326255,
      USD: 11500,
      EUR: 10217,
    },
  },
  {
    id: 32007243,
    marka: {
      id: '2233',
      name: 'Tesla',
    },
    model: {
      id: '47858',
      name: 'Model 3',
    },
    price: {
      mainCurrency: '1',
      UAH: 1106430,
      USD: 39000,
      EUR: 34651,
    },
  },
  {
    id: 32036000,
    marka: {
      id: '6',
      name: 'Audi',
    },
    model: {
      id: '47',
      name: 'A4',
    },
    price: {
      mainCurrency: '1',
      UAH: 309233,
      USD: 10900,
      EUR: 9684,
    },
  },
  {
    id: 31953382,
    marka: {
      id: '79',
      name: 'Toyota',
    },
    model: {
      id: '35002',
      name: 'Land Cruiser 200',
    },
    price: {
      mainCurrency: '1',
      UAH: 1702171,
      USD: 59999,
      EUR: 53309,
    },
  },
];

module.exports = {
  users, adverts,
};
