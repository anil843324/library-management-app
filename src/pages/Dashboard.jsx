import React, { useContext, useEffect, useState } from "react";
import { BookListContext } from "../context/BookList";

// get the localStorage data  back
const getLocalDataBookLists = () => {
  const bookLists = localStorage.getItem("book-list");

  if (bookLists) {
    return JSON.parse(bookLists);
  } else {
    return [];
  }
};

// bylist
const getLocalDataBookLists2 = () => {
  const buylist = localStorage.getItem("buy-list");

  if (buylist) {
    return JSON.parse(buylist);
  } else {
    return [];
  }
};

// bookmark
const getLocalDataBookLists3 = () => {
  const bookmarks = localStorage.getItem("bookmark-list");

  if (bookmarks) {
    return JSON.parse(bookmarks);
  } else {
    return [];
  }
};

const Dashboard = () => {
  const [filterType, setFilterType] = useState('');

   console.log('fliter type', filterType)

  const [bookList, setBookList] = useState(getLocalDataBookLists());

   console.log(bookList)

  // buyList
  const [buyList, setByList] = useState(getLocalDataBookLists2());

  // bookmarkslist
  const [bookmarkList, setBookmarList] = useState(getLocalDataBookLists3());

  // contexts
  const {bookListId,setBookListId} =useContext(BookListContext)

// filter catgeory

 const [filterBooks,setFilterBooks]=useState(getLocalDataBookLists())
 
  // added to buy-list

  const handleBuy = (index) => {
    // add data to buylist
    const filterData1 = bookList && bookList.filter((ele) => ele.id === index);

    setByList([...buyList, ...filterData1]);

    setBookListId(index)
    // delete item from clicking by
    const filterData2 = bookList && bookList.filter((ele) => ele.id !== index);

    setBookList([...bookList, ...filterData2]);

  };

  ////////////////////////////////  add
  const handleAdd = (index) => {
    // add data to bookmarks
    const filterData1 = bookList && bookList.filter((ele) => ele.id === index);

    setBookmarList([...bookmarkList, ...filterData1]);

    setBookListId(index)
    // delete item from clicking by
    const filterData2 = bookList && bookList.filter((ele) => ele.id !== index);

    setBookList([...bookList, ...filterData2]);
  };

  //  adding localStorage of buylist

  useEffect(() => {
    localStorage.setItem("buy-list", JSON.stringify(buyList));
  }, [buyList]);

  //  adding localStorage of bookmarkslist
  useEffect(() => {
    localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  useEffect(()=>{

    const filterData2 = bookList && bookList.filter((ele) => ele.id !== bookListId);

    setBookList(filterData2)
    
  },[bookListId])


  // filer Data by Category
    const filterByCategory=(cat)=>{

        if('all'===cat.toLowerCase()){
                setFilterBooks(bookList)
              
        }else{
          let filterData= bookList.filter((el) =>
          el.category.toLowerCase()===cat.toLowerCase()
        ) 
        setFilterBooks(filterData)
        }
    
    }



  return (
    <>
      <div>
        <div>
          <div className="overflow-x-auto relative">
            <div className=" flex  gap-[95px] mt-4 mb-6">
              <label> Filter By Category:- </label>
              <select
                value={filterType}
                onChange={(e) =>  (setFilterType(e.target.value),filterByCategory(e.target.value))}
                className=" border-solid border-2 border-black  rounded-lg "
                id="category"
              >
              <option value="">Select Category</option>
              <option value="All">All</option>
                <option value="Fiction">Fiction</option>
                <option value="Self Help">Self Help</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-400  bg-yellow-400">
                <tr>
                  <th scope="col" className="py-3 px-6 ">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Author
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Description
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Added Data
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>

                  <th scope="col" className="py-3 px-6">
                    Buy
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Bookmark
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterBooks &&
                  filterBooks                 
                    .map((el) => (
                      <tr className="bg-white dark:bg-gray-800" key={el.id}>
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {el.bookName}
                        </th>
                        <td className="py-4 px-6">{el.authorName}</td>
                        <td className="py-4 px-6">{el.bookDecription}</td>
                        <td className="py-4 px-6">{el.addingDate}</td>
                        <td className="py-4 px-6">{el.category}</td>
                        <td className="py-4 px-6">{el.bookPrice}</td>

                        <td className="py-4 px-6">
                          <button
                            type="button"
                            onClick={() => {
                              handleBuy(el.id);
                            }}
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Buy
                          </button>
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => {
                              handleAdd(el.id);
                            }}
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
