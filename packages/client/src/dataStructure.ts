export interface ICity {
  id: number
  name: string
  country: string
  visited: boolean
  wishlist: boolean
}

export type Cities = ICity[]
export type TableProps = {
  cities: Cities
  actionAllowed?: boolean
  isLoading?: boolean
  // eslint-disable-next-line
  handleVisited?: any
  // eslint-disable-next-line
  handleWishlist?: any
  pageNumber?: number
}
// eslint-disable-next-line
export interface IEmptyProps {}
export interface IErrorProps {
  error?: string
}
export type StarIconProps = {
  color?: string
  // eslint-disable-next-line
  handleFunc?: any
  city?: ICity
  page?: number
}
export type PutPayload = {
  visited?: boolean
  wishlist?: boolean
}

export enum ActionType {
  FETCH = 'FETCH',
  PUT = 'PUT',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SET_CITIES = 'SET_CITIES',
}

export enum CONSTANTS {
  DEFAULT_PAGE = 1,
}

export interface IState {
  cities?: Cities
  city?: ICity
  error?: string
  isLoading?: boolean
}

export interface IAction {
  type: ActionType
  payload: {
    data?: string
    cities?: ICity[]
    city?: ICity
    isLoading?: boolean
    error?: string
  }
}
export interface Payload {
  visited?: boolean
  wishlist?: boolean
}
export interface ApiPayload {
  method?: string
  // eslint-disable-next-line
  dispatch: any
  urlData?: string
  payload?: Payload
}
