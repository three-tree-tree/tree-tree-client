export enum InterestingIssueType {
  SAVING_PAPER,
  REDUCING_TRASH,
  SAVING_ENERGY,
  USING_BASKET,
  USING_ELEC_RECEIPT,
}

export enum HairStyles {
  SHORT_CUT = 'short-cut',
  LONG = 'long',
}
export enum HairColors {
  BLACK = 'black',
}
export enum TopClothes {
  SHIRTS = 'shirts',
}
export enum BottomClothes {
  PANTS = 'pants',
}
export enum ShoesTypes {
  SNEAKERS = 'sneakers',
}

export interface InitialState {
  interestingIssueType: InterestingIssueType | null;
  hairStyle: HairStyles;
  hairColor: HairColors;
  topClothes: TopClothes;
  bottomClothes: BottomClothes;
  shoesType: ShoesTypes;
}

const initialState: InitialState = {
  interestingIssueType: null,
  hairStyle: HairStyles.SHORT_CUT,
  hairColor: HairColors.BLACK,
  topClothes: TopClothes.SHIRTS,
  bottomClothes: BottomClothes.PANTS,
  shoesType: ShoesTypes.SNEAKERS,
};

export default initialState;
