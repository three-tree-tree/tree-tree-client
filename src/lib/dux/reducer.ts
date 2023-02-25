import { InitialState } from './initialState';
import * as actionTypes from './actionTypes';
import { CreatingBoxStatus } from '../../components/CreationPage';
import { ColorTypes } from '../../components/Colors';

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
    case actionTypes.SELECT_ITEM: {
      const {
        type,
        color,
        number,
      } = action.payload as { type: CreatingBoxStatus, color: ColorTypes, number: number };

      const newSelection: Record<string, any> = {};

      if (type === CreatingBoxStatus.HAIR) {
        newSelection.hairStyle = number;
        newSelection.hairColor = color;
      }
      if (type === CreatingBoxStatus.SHIRTS) {
        newSelection.topClothes = number;
      }
      if (type === CreatingBoxStatus.PANTS) {
        newSelection.bottomClothes = number;
        newSelection.bottomColor = color;
      }
      if (type === CreatingBoxStatus.SHOES) {
        newSelection.shoesType = number;
        newSelection.shoesColor = color;
      }

      return {
        ...state,
        ...newSelection,
      };
    }
    case actionTypes.CHANGE_COLOR: {
      const { type, color } = action.payload;
      const newSelection: Record<string, any> = {};
      if (type === CreatingBoxStatus.HAIR) {
        newSelection.hairColor = color;
      }
      if (type === CreatingBoxStatus.PANTS) {
        newSelection.bottomColor = color;
      }
      if (type === CreatingBoxStatus.SHOES) {
        newSelection.shoesColor = color;
      }
      return {
        ...state,
        ...newSelection,
      };
    }
    default:
      return state;
  }
}
