const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    return item;
})
console.log(values); //undefined
//it means for each loop doesnot return any value


//if we want to return the values and use that values, then we use filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

//if we write the above code within curly braces(within scope) then we have to write return while using arrow function
const newNums2 = myNums.filter((num) => {
   return num > 4
})
console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]



//if we want to do the same operation above using "for each" loop
const newNums3 = []

myNums.forEach((num) => {
    if(num > 4)
    {
        newNums3.push(num);
    }

})
console.log(newNums3); // [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk) => bk.genre === 'History')
  console.log(userBooks);
  //outpiut
  /*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
 */


//if we want the books which was published after 2000
const publishedBooks = books.filter((bk) => bk.publish > 2000)
console.log(publishedBooks); 
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

const userBooks3 = books.filter((bk) => 
    bk.publish >= 1995 && bk.genre === "History"
)
console.log(userBooks3);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/