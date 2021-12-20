export const USERS = [
  {
    user: 'giannngi',
    image: 'https://i.pravatar.cc/300?img=7',
  },
  {
    user: 'carlo03',
    image: 'https://i.pravatar.cc/300?img=19',
  },
  {
    user: 'b.cameli',
    image: 'https://i.pravatar.cc/300?img=32',
  },
  {
    user: 'beebee',
    image: 'https://i.pravatar.cc/300?img=14',
  },
  {
    user: 'giona.official',
    image: 'https://i.pravatar.cc/300?img=55',
  },
  {
    user: 'bigmac',
    image: 'https://i.pravatar.cc/300?img=9',
  },
];

export const POSTS = [
  {
    imageUrl: 'https://picsum.photos/600?random=0',
    user: USERS[0].user,
    profile_picture: USERS[0].image,
    likes: 1200,
    caption: 'Love this amazing sunset!!',
    comments: [
      {
        user: 'beebee',
        comment: "I agree, that's spectacular!!",
      },
      {
        user: 'bigmac',
        comment:
          'Hi! Love this picture. If you want to be featured on our page send me a DM',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/600?random=1',
    user: USERS[1].user,
    profile_picture: USERS[1].image,
    likes: 42,
    caption:
      'This is me travelling around the world. Just to let you know how spectacular my life is',
    comments: [
      {
        user: 'b.cameli',
        comment: 'Shut up son and get out of your bedroom NOW.',
      },
      {
        user: 'giona.official',
        comment: 'Ahahahah look at the last comment',
      },
    ],
  },
];

export const bottomNavigation = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/b1b1b1/home.png',
  },
  {
    name: 'Search',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/search.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/b1b1b1/search.png',
  },
  {
    name: 'Reels',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/cinema-.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/b1b1b1/cinema-.png',
  },
  {
    name: 'Market',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/stall.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/b1b1b1/stall.png',
  },
  {
    name: 'Profile',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/user.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/b1b1b1/user.png',
  },
];
