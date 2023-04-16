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
  imageSource?: string;
  hairStyle: number;
  hairColor: ColorTypes;
  topClothes: number;
  topColor: ColorTypes;
  bottomClothes: number;
  bottomColor: ColorTypes;
  shoesType: number;
  shoesColor: ColorTypes;
}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

const getRandomEnum = () => {
  const index = getRandomInt(8);
  switch(index) {
    case 0: return ColorTypes.BLUE
    case 1: return ColorTypes.GREEN
    case 2: return ColorTypes.ORANGE
    case 3: return ColorTypes.PINK
    case 4: return ColorTypes.PURPLE
    case 5: return ColorTypes.RED
    case 6: return ColorTypes.WHITE
    case 7: return ColorTypes.YELLOW
  }
}


const initialState: InitialState = {
  interestingIssueType: null,
  imageSource: '',
  hairStyle: getRandomInt(8),
  hairColor: getRandomEnum() as ColorTypes,
  topClothes: getRandomInt(8),
  topColor: getRandomEnum() as ColorTypes,
  bottomClothes: getRandomInt(8),
  bottomColor: getRandomEnum() as ColorTypes,
  shoesType: getRandomInt(8),
  shoesColor: getRandomEnum() as ColorTypes,
};

export default initialState;
