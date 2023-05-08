import axios from "axios";

const URL ='https://skyscanner44.p.rapidapi.com/search-extended' 
const options = {
   
    params: {
      adults: '1',
      origin: 'MUC',
      destination: 'BER',
      departureDate: '2023-05-11',
      returnDate: '2023-05-18',
    //   currency: 'EUR',
    //   stops: '0,1,2',
    //   duration: '50',
    //   startFrom: '00:00',
    //   arriveTo: '23:59',
    //   returnStartFrom: '00:00',
    //   returnArriveTo: '23:59'
    },
    headers: {
      'X-RapidAPI-Key': 'b5aa846d9fmshb5794ca49f74e29p1cf9e6jsnb2e4c2665b79',
      'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
    }
  };
  

export const getFlights = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return data;
    }catch(error){
        console.log(error)
    }
}