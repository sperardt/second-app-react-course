export function selectBook(book){
  console.log("oie");
  //selectBook is an actionCreator, it needs to return an action,
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
