import ReactPaginate from "react-paginate";
import "./style/pagination.css";

interface PaginationProps {
    pageCount : number;
    onPageChange: (selected: number)=> void
    
}
 
const PaginationTable = ({pageCount, onPageChange} : PaginationProps) => {
    return ( 
        <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Siguiente"
            onPageChange={(selected)=>{
                onPageChange(selected.selected)
            }}
            pageRangeDisplayed={0}
            pageCount={pageCount}
            previousLabel="Anterior"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </>
     );
}
 
export default PaginationTable;