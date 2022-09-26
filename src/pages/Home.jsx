import React, { useContext, useEffect, useState } from "react";
import { BookListContext } from "../context/BookList";



// get the localStorage data  back
const getLocalDataBookLists=()=>{

   const bookLists=localStorage.getItem('book-list');
   
    if(bookLists){
       return   JSON.parse(bookLists)
    }else{
      return []
    }

}


const Home = () => {


  const {bookListId,setBookListId} =useContext(BookListContext)

    

    const [bookData,setBookData]=useState(getLocalDataBookLists())
    const [bookName,setBookName] =useState('')
    const [authorName,setAuthorName] =useState('')
    const [bookDecription,setBookDecription] =useState('')
    const [addingDate,setAddingDate] =useState('')
    const [category,setCategory] =useState('')
    const [bookPrice,setBookPrice] =useState('')
 
     

    // handle submit data

     

    const handleSubmit=()=>{

      let obj={
        
         bookName,
         authorName,
         bookDecription,
         addingDate,
         category,
         bookPrice, 
         id: new Date().getTime().toString()
      }
       
     
       
      if(!bookData || !authorName || !bookDecription || !addingDate || !category || !bookPrice){

        alert("please fill the data")
      }else{

          console.log(obj)
         setBookData([...bookData,obj])
      }
    setBookName('')   
    setAddingDate('')
    setAuthorName('')
    setBookDecription('')
    setBookPrice('')
    setCategory('')
    setAuthorName('')

    }

    //  adding localStorage

    useEffect(() => {
     
           localStorage.setItem("book-list",JSON.stringify(bookData))

    }, [bookData,bookListId])
    
  useEffect(()=>{

    const filterData2 =bookData.filter((ele) => ele.id !== bookListId);

    setBookData(filterData2)
    
  },[bookListId])



  return (
    <>
      <h2 className=" grid place-items-center">Library Management System</h2>

      <div>
        <div className="grid place-items-center">
          <div className=" flex flex-col gap-5  ">
            <div className=" flex  gap-[80px] ">
              <label >Book Name:-</label>
              <input
              value={bookName}
              onChange={(e)=>{ setBookName(e.target.value)} }
                className=" border-solid border-2 border-black rounded-lg "
                placeholder="Book Name"
                type="text"
              />
            </div>

            <div className=" flex gap-[67px] ">
              <label >Author Name:-</label>
              <input
               value={authorName}
               onChange={(e)=>{ setAuthorName(e.target.value)} }
                className=" border-solid border-2 border-black rounded-lg "
                placeholder="Author Name"
                type="text"
              />
            </div>

            <div className=" flex  gap-[40px] ">
              <label >Book Description:-</label>
              <textarea
               value={bookDecription}
               onChange={(e)=>{ setBookDecription(e.target.value)} }
                className=" border-solid border-2 border-black rounded-lg "
                placeholder="Book Description"
                type="text"
              />
            </div>

            <div className=" flex   gap-[75px] ">
              <label >Adding Date:-</label>
              <input
               value={addingDate}
               onChange={(e)=>{ setAddingDate(e.target.value)} }
                className=" border-solid border-2 border-black  rounded-lg"
                type="date"
                id="added"
              />
            </div>

            <div className=" flex  gap-[95px]">
              <label >Category:-</label>
              <select
               value={category}
               onChange={(e)=>{ setCategory(e.target.value)} }
                className=" border-solid border-2 border-black  rounded-lg "
                id="category"
              >
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Self Help">Self Help</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className=" flex  gap-[75px] ">
              <label > Book's Price:-</label>
              <input
               value={bookPrice}
               onChange={(e)=>{ setBookPrice(e.target.value)} }
                className=" border-solid border-2 border-black rounded-lg "
                placeholder="Book's Price"
                type="number"
              />
            </div>

            <div className="grid place-items-center">
              <button
              onClick={ handleSubmit}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
