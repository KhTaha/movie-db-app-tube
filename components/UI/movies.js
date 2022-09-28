import format from 'date-fns/format'
const dateFns = require('date-fns');

const movies = [
  {
    id: 1,
    name: "LOST IN TIME",
    url:
      "https://www.youtube.com/watch?v=3M5iHWetiJA",
    artist: "HOOKED",
    rating: null,
    // createdAt:format( dateFns(new Date(2014, 1, 11), "yyyy-MM-dd'T'HH:mm:ss")),
    // updatedAt:format( dateFns(new Date(2014, 3, 11), "yyyy-MM-dd'T'HH:mm:ss"))
  },
  {
    id: 2,
    name: "BACK TO THE FUTURE",
    url:
      "https://www.youtube.com/watch?v=3M5iHWetiJA",
    artist: "HOOKED",
    rating: null,
    // createdAt:format( dateFns(new Date(2014, 1, 10), "yyyy-MM-dd'T'HH:mm:ss")),
    // updatedAt:format( dateFns(new Date(2014, 3, 10), "yyyy-MM-dd'T'HH:mm:ss"))
  },
  {
    id: 3,
    name: "MIDDLE CHILD",
    url:
      "https://www.youtube.com/watch?v=3M5iHWetiJA",
    artist: "HOOKED",
    rating: null,
    // createdAt:format( dateFns(new Date(2014, 4, 11), "yyyy-MM-dd'T'HH:mm:ss")),
    // updatedAt:format( dateFns(new Date(2014, 7, 11), "yyyy-MM-dd'T'HH:mm:ss"))
  },
//   {
//     id: 4,
//     name: "REIGN",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029417/url6.jpg",
//     artist: "HOOKED",
//     rating: 1,
//     createdAt: dateFns(new Date(2015, 1, 10), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2015, 3, 10), "yyyy-MM-dd'T'HH:mm:ss")
//   },
//   {
//     id: 5,
//     name: "THE CLICK",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029416/url4.jpg",
//     artist: "HOOKED",
//     rating: 1,
//     createdAt: dateFns(new Date(2016, 1, 10), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2016, 3, 10), "yyyy-MM-dd'T'HH:mm:ss")
//   },
  {
    id: 6,
    name: "VISION OF DREAMS",
    url:
      "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1871s",
    artist: "HOOKED",
    rating: null,
    // createdAt: dateFns(new Date(2017, 1, 10), "yyyy-MM-dd'T'HH:mm:ss"),
    // updatedAt: dateFns(new Date(2017, 3, 10), "yyyy-MM-dd'T'HH:mm:ss")
  },
  {
    id: 7,
    name: "LOST IN TIME",
    url:
      "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1871s",
    artist: "HOOKED",
    rating: null,
    // createdAt: dateFns(new Date(2017, 9, 10), "yyyy-MM-dd'T'HH:mm:ss"),
    // updatedAt: dateFns(new Date(2017, 7, 10), "yyyy-MM-dd'T'HH:mm:ss")
  },
  {
    id: 8,
    name: "BACK TO THE FUTURE",
    url:
      "https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1871s",
    artist: "HOOKED",
    rating: null
    // createdAt: dateFns(new Date(2014, 9, 11), "yyyy-MM-dd'T'HH:mm:ss"),
    // updatedAt: dateFns(new Date(2014, 7, 11), "yyyy-MM-dd'T'HH:mm:ss")
  },
//   {
//     id: 9,
//     name: "MIDDLE CHILD",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029429/url1.jpg",
//     artist: "HOOKED",
//     rating: 3,
//     createdAt: dateFns(new Date(2011, 9, 10), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2011, 10, 10), "yyyy-MM-dd'T'HH:mm:ss")
//   },
//   {
//     id: 10,
//     name: "REIGN",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029417/url6.jpg",
//     artist: "HOOKED",
//     rating: 1,
//     createdAt: dateFns(new Date(2012, 1, 12), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2012, 3, 12), "yyyy-MM-dd'T'HH:mm:ss")
//   },
//   {
//     id: 11,
//     name: "THE CLICK",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029416/url4.jpg",
//     artist: "HOOKED",
//     rating: 1,
//     createdAt: dateFns(new Date(2009, 1, 10), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2009, 3, 10), "yyyy-MM-dd'T'HH:mm:ss")
//   },
//   {
//     id: 12,
//     name: "VISION OF DREAMS",
//     url:
//       "https://res.cloudinary.com/schms/image/upload/v1560029412/url3.jpg",
//     artist: "HOOKED",
//     rating: 1,
//     createdAt: dateFns(new Date(2008, 1, 10), "yyyy-MM-dd'T'HH:mm:ss"),
//     updatedAt: dateFns(new Date(2008, 3, 10), "yyyy-MM-dd'T'HH:mm:ss")
//   }
];

export default movies;