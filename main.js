/*
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};
console.log(obj1);
console.log(obj2);

function deepEqual(object1, object2) {
  for (const prop in object1) {
    if (prop in object2 === false) return false;
    if (
      typeof object1[prop] === 'object' &&
      typeof object2[prop] === 'object'
    ) {
      const result = deepEqual(object1[prop], object2[prop]);
      if (result === false) return false;
    }


    if (object1[prop] !== object2[prop]) return false;

    return true;
  }
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

/!*


function palindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(palindrome('привирп'));

const info = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
console.log(info);
function search(str) {
  function filterFunc(obj) {
    return (
      obj.country.includes(str) ||
      obj.city.includes(str) ||
      obj.hotel.includes(str)
    );
  }
  const newArr = info.filter(filterFunc);
  console.log(newArr);
}
search('Ho');

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

console.log(hotels);

const hotelsByCountries = {};

hotels.map((item) => {
  if (hotelsByCountries[item.country]) {
    hotelsByCountries[item.country].push(item.city);
  } else hotelsByCountries[item.country] = [item.city];
});
console.log(hotelsByCountries);



*!/


*/
// class User {
//   constructor({ firstName, lastName }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// class Student extends User {
//   constructor({ admissionYear, courseName, firstName, lastName }) {
//     super({ firstName, lastName });
//     this.admissionYear = admissionYear;
//     this.courseName = courseName;
//   }
//
//   get course() {
//     const now = new Date();
//     return now.getFullYear() - this.admissionYear;
//   }
// }
//
// class Students {
//   constructor(studentsData) {
//     this.studentsData = studentsData.map(
//       (prop) =>
//         new Student({
//           admissionYear: prop.admissionYear,
//           courseName: prop.courseName,
//           firstName: prop.firstName,
//           lastName: prop.lastName,
//         })
//     );
//   }
//
//   getInfo() {
//     const result = [];
//     function byField(field) {
//       return (a, b) => (a[field] < b[field] ? 1 : -1);
//     }
//     this.studentsData.sort(byField('admissionYear'));
//     for (let i = 0; i < this.studentsData.length; i++) {
//       result.push(
//         `${this.studentsData[i].fullName} - ${this.studentsData[i].courseName}, ${this.studentsData[i].course} курс`
//       );
//     }
//     return result;
//   }
// }
//
// const studentsData = [
//   {
//     firstName: 'Василий',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Java',
//   },
//   {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     admissionYear: 2018,
//     courseName: 'JavaScript',
//   },
//   {
//     firstName: 'Александр',
//     lastName: 'Федоров',
//     admissionYear: 2017,
//     courseName: 'Python',
//   },
//   {
//     firstName: 'Николай',
//     lastName: 'Петров',
//     admissionYear: 2019,
//     courseName: 'Android',
//   },
// ];
//
// const std1 = new Students(studentsData);
// console.log(std1.getInfo());

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');


const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    current: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.current < this.data.length) {
            return {
                done: false,
                value: this.data[this.current++],
            }
        }
        if (this.current <= this.data.length) {
            this.current = 0;
            return {
                done: false,
                value: this.data[this.current],
            };
        }
    },
};

function setColor(colors){
    return function (event){
        event.target.style.color = colors.next().value;
        return event;
    }
}

text1.addEventListener('click',setColor({...colors}));
text2.addEventListener('click',setColor({...colors}));
text3.addEventListener('click',setColor({...colors}));