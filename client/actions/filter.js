import request from 'superagent'

export const updateFilterAction = (filterOptions) => {
  return {
    type: 'UPDATE_FILTER',
    filterOptions
  }
}
