const date = '2020-11-27';
console.log(date) ;

function NewDate(date) {
  date.replace(/-/g,'.');
  let newDate = date.replace(/-/gi, '.');
  newDate = newDate.split('.');
  newDate = newDate.reverse();
   newDate = newDate.join('.');
   return newDate;
}
console.log(NewDate(date)) ;


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

function search(string) {
  const array = [];
  for (let i = 0; i < info.length; i++) {
    let searchString = `${info[i].country} ${info[i].city} ${info[i].hotel}`;
    if (searchString.includes(string)) {
      array.push(searchString);
    }
  }
  return array;
}

console.log(search('Spa'));

