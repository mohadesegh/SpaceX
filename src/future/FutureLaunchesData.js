import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function FutureLaunchesData() {
  const [futureLaunches, setFutureLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/upcoming")
      .then((data) => {
        console.log(data);
        setFutureLaunches(data?.data);
      });
    setTotalPages(Math.ceil(pastLaunches.length / itemsPerPage));
  }, []);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = pastLaunches.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="bg-transparent">
      <div className="p-4 mt-4">
        <h1 className="text-4xl text-white text-center font-semibold mb-6">
          Future Launches
        </h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            {futureLaunches.map((item) => (
              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                    <i className="fas fa-exclamation-circle text-gray-400"></i>
                  </div>
                </div>
                <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1 text-gray-400">
                    {item.mission_name}
                  </h3>
                  <p className="leading-tight text-justify"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReactPaginate
        className="flex flex-wrap p-20 items-center justify-center space-x-10 w-full text-white"
        breakLabel={"..."}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={"<<"}
        nextLabel={">>"}
      />
    </div>
  );
}

export default FutureLaunchesData;
