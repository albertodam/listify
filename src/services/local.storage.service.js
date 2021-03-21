const saveList = (list) => {
  localStorage.setItem('myList', JSON.stringify(list))
}

const getList = () => {
  return JSON.parse(localStorage.getItem('myList')) || []
}

export { saveList, getList }
