import axios from 'axios';

const dataInitial = {
    countries: [],
    countriesPage: [],
    tenCountries:[],
    country: [],
}

const GET_COUNTRIES_OK = 'GET_ALLCOUNTRIES_OK'
const GET_NUMBER_PAGE = 'GET_NUMBER_PAGE'
const GET_PAGE = 'GET_PAGE'
const GET_BY_NAME = 'GET_BY_NAME'
const GET_BY_ASC = 'GET_BY_ASC'



export default function countriesReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_COUNTRIES_OK:
            return { ...state, countries: action.payload }
        case GET_NUMBER_PAGE:
            return { ...state, countriesPage: action.payload }
        case  GET_PAGE:
            return {...state, tenCountries: action.payload}
        case GET_BY_NAME:
            return {...state, country: action.payload}
        case GET_BY_ASC:
            return {...state, countries: action.payload}
        
        default:
            return state;
    
        }
}





export const getCountriesAction = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:3001/countries')
        dispatch({
            type: GET_COUNTRIES_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}


export const getNumberPage = (countries) => (dispatch) => { 

    try {
        let arr = [];
        for (let i = 0; i < countries.length / 10; i++) {
            arr.push(i);
        }
        dispatch({
            type: GET_NUMBER_PAGE,
            payload: arr
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPage = (currentPageP, countriesS) => (dispatch)=>{ 
    let update = [];
    if (currentPageP === 0) {
      for (let i = 0; i < 9; i++) {
        update.push(countriesS[i]);
      }
      dispatch({
        type:GET_PAGE,
        payload: update
      });
    } else {
      for (let i = currentPageP * 10; i < currentPageP * 10 + 10; i++) {
        update.push(countriesS[i]);
      }
      dispatch({
      type: GET_PAGE,
      payload: update
        });
    }
    update = [];


}

export const getCountryByName  = (name) => (dispatch) =>{
    try {
        const res =  axios.get('http://localhost:3001/countries?name' + name)
        dispatch({
            type: GET_COUNTRIES_OK,
            payload: res.data
        })
        
    } catch (error) {
        console.log(error)
    }
}


export const orderByAsc = (countries, option) => (dispatch) =>{
    try {
       let rta = countries.sort((a, b)=>{
        if(a.name < b.name){
            return -1
        }else if( a.name > b.name){
            return 1
        } else{
            return 0
        }
       })
       console.log(option)
    dispatch({
        type: GET_BY_ASC,
        payload: option === 'País ascendente' ? rta : rta.reverse()
    })
        
    } catch (error) {
        console.log(error)
    }
}