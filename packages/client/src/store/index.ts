import type { Reducer } from 'react'
import type { Cities, IAction, ICity, IState } from '../dataStructure'
import { ActionType } from '../dataStructure'

export const initialState: IState = { cities: [], error: '', isLoading: false }
const updateCity = (cities: Cities, city: ICity) => cities?.map(c => (c.id === city?.id ? city : c))

export const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.PUT:
      if (action?.payload?.city && state?.cities?.length) {
        const updatedCities = updateCity(state.cities, action.payload.city)
        return { ...state, cities: updatedCities, isLoading: false }
      }
      return { ...state, isLoading: false }
    case ActionType.SET_CITIES:
      return { ...state, ...action.payload }
    case ActionType.LOADING:
      return { ...state, ...action.payload }
    case ActionType.ERROR:
      return { ...state, ...action.payload }
    default:
      throw new Error()
  }
}

// eslint-disable-next-line
export const setIsLoading = (dispatch: Function, isLoading: boolean) =>
  dispatch({ type: ActionType.LOADING, payload: { isLoading } })
// eslint-disable-next-line
export const setCities = (dispatch: any, cities: ICity[]) =>
  dispatch({ type: ActionType.SET_CITIES, payload: { cities, isLoading: false, error: '' } })
// eslint-disable-next-line
export const putCities = (dispatch: Function, city: ICity) =>
  dispatch({ type: ActionType.PUT, payload: { city, isLoading: false, error: '' } })
// eslint-disable-next-line
export const setError = (dispatch: Function, error: string) =>
  dispatch({ type: ActionType.ERROR, payload: { error, cities: [], isLoading: false } })
