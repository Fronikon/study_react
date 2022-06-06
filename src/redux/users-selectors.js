import {createSelector} from 'reselect';


const getDataUsersSelector = (state) => {
  return state.usersPage.users
}
export const getDataUsers = createSelector(getDataUsersSelector, (users) => {
  return users.filter((u) => true);
})
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
}
export const getFollowingInProcess = (state) => {
  return state.usersPage.followingInProcess;
}
export const getPortionSize = (state) => {
  return state.usersPage.portionSize;
}