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

  // return (
	// 	<React.Fragment>
	// 		{totalCount > limit ? (
	// 			<div className='d-flex justify-content-end'>
	// 				<div sm={6}>
	// 					<div className='pagination-styles'>
	// 						<button className={'pagination-btn page-item '+(skip + limit === limit ? 'd-none' : '')}  onClick={() =>skip <= 0? null : setSkip(skip - limit)}>
	// 								Previous
	// 						</button>
	// 						<div className='page-entries'>
	// 							<p className='m-sm-0'>
	// 								<span>{skip < totalCount ? skip + 1 :  Math.ceil(totalCount - skip + 1)}</span>{' - '}
	// 								<span>{skip + limit < totalCount ?  Math.ceil((skip + limit)) :  Math.ceil(totalCount)}</span>
	// 								&nbsp;<span className='text-muted'>of</span>&nbsp;
	// 								<span className=''>{Math.ceil(totalCount)}</span>
	// 							</p>
	// 						</div>
	// 						<button className={'pagination-btn page-item ' + (skip + limit >= totalCount ? 'd-none' : '')} onClick={() =>skip + limit <= totalCount? setSkip(skip + limit): null} >
	// 								Next
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		) : null}
	// 	</React.Fragment>
	// );

	return (limit < totalCount)
		? (
			<nav className="pagination" aria-label="Pagination">
				<button
					onClick={handlePrevious}
					disabled={currentPage === 1}
					className="pagination-button rounded-l-md text-gray-400"
				>
					<span className="sr-only">Previous</span>
					<LeftArrowIcon />
				</button>
				<p className="text-sm text-gray-700">
					Showing <span className="font-medium">{startItem}</span> to <span className="font-medium">{endItem}</span> of{' '}
					<span className="font-medium">{totalCount}</span> results
				</p>
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className="pagination-button rounded-r-md text-gray-400"
				>
					<span className="sr-only">Next</span>
					<RightArrowIcon />
				</button>
			</nav>
  	) : <></>;
}

export default Pagination