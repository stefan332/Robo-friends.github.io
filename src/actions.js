import { CHANGE_SEARCH_FIELD } from './constants.js';



export const setSerachField = (text) =>({
	type : CHANGE_SEARCH_FIELD ,
	payload: text

})
