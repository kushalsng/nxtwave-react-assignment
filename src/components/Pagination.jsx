import React, { useState } from 'react'
import { PAGINATION_LIMIT } from '../constants/pagination';
import { ReactComponent as LeftArrowIcon } from '../assets/icons/leftArrow.svg'
import { ReactComponent as RightArrowIcon } from '../assets/icons/rightArrow.svg'

const Pagination = ({ skip, setSkip, totalCount}) => {
	const limit = PAGINATION_LIMIT;
	const [currentPage, setCurrentPage] = useState(Math.floor(skip / limit) + 1)
	
  const totalPages = Math.ceil(totalCount / limit);

  const handlePrevious = () => {
    if (skip > 0) {
      setSkip(skip - limit);
			setCurrentPage(prevPage => prevPage - 1)
    }
  };

  const handleNext = () => {
    if (skip + limit < totalCount) {
      setSkip(skip + limit);
			setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const startItem = skip + 1;
  const endItem = Math.min(skip + limit, totalCount);

	return (limit < totalCount)
		? (
			<nav className="pagination" aria-label="Pagination">
				<button
					onClick={handlePrevious}
					disabled={currentPage === 1}
					className="pagination-button"
				>
					<span className="sr-only">Previous</span>
					<LeftArrowIcon />
				</button>
				<p className="pagination-label">
					Showing <span>{startItem}</span> to <span>{endItem}</span> of{' '}
					<span>{totalCount}</span> results
				</p>
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className="pagination-button next"
				>
					<span className="sr-only">Next</span>
					<RightArrowIcon />
				</button>
			</nav>
  	) : <></>;
}

export default Pagination