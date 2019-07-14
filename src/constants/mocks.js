const categories = [
    {
      id: 'plants',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 147,
      image: require('../../assets/icons/plants.png')
    },
    {
      id: 'seeds',
      name: 'Seeds',
      tags: ['products', 'shop'],
      count: 16,
      image: require('../../assets/icons/seeds.png')
    },
    {
      id: 'flowers',
      name: 'Flowers',
      tags: ['products', 'inspirations'],
      count: 68,
      image: require('../../assets/icons/flowers.png')
    },
    {
      id: 'sprayers',
      name: 'Sprayers',
      tags: ['products', 'shop'],
      count: 17,
      image: require('../../assets/icons/sprayers.png')
    },
    {
      id: 'pots',
      name: 'Pots',
      tags: ['products', 'shop'],
      count: 47,
      image: require('../../assets/icons/pots.png')
    },
    {
      id: 'fertilizers',
      name: 'fertilizers',
      tags: ['products', 'shop'],
      count: 47,
      image: require('../../assets/icons/fertilizers.png')
    },
    {
      id: 'fertilizers2',
      name: 'fertilizers2',
      tags: ['products', 'shop'],
      count: 49,
      image: require('../../assets/icons/fertilizers.png')
    },
  ];

const deviations = [
    {
        id: 1,
        name: 'Lim Ming Joon',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 2,
        name: 'Narul Nabila',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 3,
        name: 'Tan Chee Boon',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 4,
        name: 'Zarifah De Limah',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 5,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 6,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 7,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 8,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 9,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 10,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 11,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 12,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 13,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 14,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 15,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
    {
        id: 16,
        name: 'Seven Eleven',
        deviationNo: '201905-0038',
        date: '17/05/2019',
        image: require('../../assets/icons/plants.png'),
    },
];
  
  const products = [
    {
      id: 1, 
      name: '16 Best Plants That Thrive In Your Bedroom',
      description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
      tags: ['Interior', '27 m²', 'Ideas'],
      images: [
        require('../../assets/images/plants_1.png'),
        require('../../assets/images/plants_2.png'),
        require('../../assets/images/plants_3.png'),
        // showing only 3 images, show +6 for the rest
        require('../../assets/images/plants_1.png'),
        require('../../assets/images/plants_2.png'),
        require('../../assets/images/plants_3.png'),
        require('../../assets/images/plants_1.png'),
        require('../../assets/images/plants_2.png'),
        require('../../assets/images/plants_3.png'),
      ]
    }
  ];
  
  const explore = [
    // images
    require('../../assets/images/explore_1.png'),
    require('../../assets/images/explore_2.png'),
    require('../../assets/images/explore_3.png'),
    require('../../assets/images/explore_4.png'),
    require('../../assets/images/explore_5.png'),
    require('../../assets/images/explore_6.png'),
  ];
  
  const profile = {
    username: 'react-ui-kit',
    location: 'Europe',
    email: 'contact@react-ui-kit.com',
    avatar: require('../../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
  };
  
  export {
    categories,
    explore,
    products,
    profile,
    deviations,
  }