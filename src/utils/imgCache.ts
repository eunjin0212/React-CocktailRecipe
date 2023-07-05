import { ICocktailData } from '../types/cocktailData.type';

export const imgCache = (data: ICocktailData[]) => {
  const imgCacheData = data.map(drink => ({ ...drink, strDrinkThumb: `${drink.strDrinkThumb}?${new Date().getTime()}` }))
  return imgCacheData
}