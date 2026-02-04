const getTheTitles = function getTheTitles(booksList) {
  return booksList.reduce((titlesList, book, index) => {
    titlesList[index] = (book.title);
    return titlesList ;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
