import { InitialState } from './initialState';
import * as actionTypes from './actionTypes';

interface ActionInterface {
  type: string;
  payload: any;
}

export default function reducer(
  state: InitialState,
  action: ActionInterface,
): InitialState {
  switch (action.type) {
    case actionTypes.SELECT_INTERESTS: {
      return {
        ...state,
        interestingIssueType: action.payload,
      };
    }
    case actionTypes.SELECT_HAIR_STYLE: {
      return {
        ...state,
        hairStyle: action.payload,
      };
    }
    case actionTypes.SELECT_HAIR_COLOR: {
      return {
        ...state,
        hairColor: action.payload,
      };
    }
    case actionTypes.SELECT_TOP_CLOTHES: {
      return {
        ...state,
        topClothes: action.payload,
      };
    }
    case actionTypes.SELECT_BOTTOM_CLOTHES: {
      return {
        ...state,
        bottomClothes: action.payload,
      };
    }
    case actionTypes.SELECT_SHOES: {
      return {
        ...state,
        shoesType: action.payload,
      };
    }
    default:
      return state;
  }
}
