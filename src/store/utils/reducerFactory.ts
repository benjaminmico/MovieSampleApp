/* Used to refactor reducer following Strategy pattern */
export const createReducer =
  <T extends {[type: string]: any}, P>(strategyMap: T, initialState: P) =>
  (state = initialState, action: any) => {
    return strategyMap.hasOwnProperty(action.type)
      ? strategyMap[action.type](state, action)
      : state;
  };
