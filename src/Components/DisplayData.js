import React from 'react'
import ReactPaginate from 'react-paginate'

function DisplayData( { displayUsersdata , noOfPages , changePage, } ) {
    return (
        <div>
            <div className="outer-box">
                {displayUsersdata}
                </div>
                <div className="paging">
                <ReactPaginate 
                    previousLabel={"prv"}
                    nextLabel={"next"}
                    pageCount={noOfPages}
                    onPageChange={changePage}
                    containerClassName={"paginationContainer"}
                    previousClassName={"prevBtnn"}
                    nextClassName={"nxtBtnn"}
                    activeClassName={"activeNo"}
                />
                </div>
        </div>
    )
}

export default DisplayData
