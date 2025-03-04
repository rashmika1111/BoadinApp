// db/placeDB.js
const placeDB = [
    {
      id: 1,
      type: 'house',
      district: 'Colombo',
      location: 'Colombo 03',
      price: '$500/month',
      capacity: 4,
      mobile: '0712345678',
      images: [
        require('../assets/house/img1.jpg'), // Updated to .jpeg
        require('../assets/house/img2.jpeg'),
         // Updated to .jpeg
      ],
    },
    {
      id: 2,
      type: 'room',
      district: 'Colombo',
      location: 'Colombo 07',
      price: '$200/month',
      capacity: 2,
      mobile: '0712345679',
      images: [
        require('../assets/room/im1.jpeg'), // Updated to .jpeg
        require('../assets/room/im1.jpeg'), // Updated to .jpeg
      ],
    },
    {
      id: 3,
      type: 'house',
      district: 'Kandy',
      location: 'Kandy City',
      price: '$400/month',
      capacity: 6,
      mobile: '0712345680',
      images: [
        require('../assets/house/img2.jpeg'), // Updated to .jpeg
        require('../assets/house/img2.jpeg'), // Updated to .jpeg
      ],
    },
    {
      id: 4,
      type: 'room',
      district: 'Galle',
      location: 'Galle Fort',
      price: '$150/month',
      capacity: 1,
      mobile: '0712345681',
      images: [
        require('../assets/room/im3.jpeg'), // Updated to .jpeg
        require('../assets/room/im3.jpeg'), // Updated to .jpeg
      ],
    },
    {
      id: 5,
      type: 'house',
      district: 'Gampaha',
      location: 'Kadawatha',
      price: '$450/month',
      capacity: 5,
      mobile: '0712345682',
      images: [
        require('../assets/house/img4.jpeg'), // Updated to .jpeg
        require('../assets/house/img4.jpeg'), // Updated to .jpeg
      ],
    },
  ];
  
  export default placeDB;
