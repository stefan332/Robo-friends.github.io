import { CHANGE_SEARCH_FIELD } from './constants.js';


const initalState = {

	searchfiled: ''
}
 export const searchRobots = (state=initalState, action={}) =>{
 	switch(action.type){
 		case CHANGE_SEARCH_FIELD:
 		return Object.assign({}, state, {searchfield:action.payload})
 		default:
 		 return state;
 	}
 }