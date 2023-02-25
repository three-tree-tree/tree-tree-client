import { ColorTypes } from "../../components/Colors";

export enum InterestingIssueType {
  SAVING_PAPER,
  REDUCING_TRASH,
  SAVING_ENERGY,
  USING_BASKET,
  USING_ELEC_RECEIPT,
}

export interface InitialState {
  interestingIssueType: InterestingIssueType | null;
  hairStyle: number;
  hairColor: ColorTypes;
  topClothes: number;
  // topColor: ColorTypes;
  bottomClothes: number;
  bottomColor: ColorTypes;
  shoesType: number;
  shoesColor: ColorTypes;
}

const initialState: InitialState = {
  interestingIssueType: null,
  hairStyle: 0,
  hairColor: ColorTypes.MINT,
  topClothes: 0,
  // topColor: ColorTypes.
  bottomClothes: 0,
  bottomColor: ColorTypes.BLUE,
  shoesType: 0,
  shoesColor: ColorTypes.PURPLE,
};

export default initialState;
