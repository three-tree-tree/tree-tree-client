export enum InterestingIssueType {
  FOREST = 'forest-and-ozone-layer',
  MARINE = 'marine-pollution',
  AIR = 'air-pollution',
  SEA_LEVEL = 'rising-see-levels',
  WEATHER = 'unusual-weather-condition',
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
  interestingIssueType: InterestingIssueType.FOREST,
  hairStyle: HairStyles.SHORT_CUT,
  hairColor: HairColors.BLACK,
  topClothes: TopClothes.SHIRTS,
  bottomClothes: BottomClothes.PANTS,
  shoesType: ShoesTypes.SNEAKERS,
};

export default initialState;
