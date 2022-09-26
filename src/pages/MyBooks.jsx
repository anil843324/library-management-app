import React, { useEffect, useState } from "react";


// get the localStorage data  back
const getLocalDataBookLists = () => {

  const buyLists = localStorage.getItem('buy-list');

  if (buyLists) {
    return JSON.parse(buyLists)
  } else {
    return []
  }

}


const MyBooks = () => {

  const [buykList, setBuyList] = useState(getLocalDataBookLists())

    console.log('buylist',buykList)

  return (
    <>
      <div>
        <div>
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
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

                 
                </tr>
              </thead>
              <tbody>

                {
                  buykList && buykList.map((el) => (
                    <tr className="bg-white dark:bg-gray-800" key={el.id}>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {el.bookName}
                      </th>
                      <td className="py-4 px-6 text-gray-900 ">{el.authorName}</td>
                      <td className="py-4 px-6 text-gray-900">{el.bookDecription}</td>
                      <td className="py-4 px-6 text-gray-900">{el.addingDate}</td>
                      <td className="py-4 px-6 text-gray-900">{el.category}</td>
                      <td className="py-4 px-6 text-gray-900">{el.bookPrice}</td>
                      
                    </tr>
                  ))

                }





              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
