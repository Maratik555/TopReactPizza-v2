import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

type PaginationProps = {
	currentPage: number
	onCurrentPage: (page: number) => void
}

export const Pagination = ({ onCurrentPage, currentPage }: PaginationProps) => (
	<ReactPaginate
		className={styles.root}
		breakLabel="..."
		nextLabel=">"
		previousLabel="<"
		onPageChange={(event) => onCurrentPage(event.selected + 1)}
		pageRangeDisplayed={4}
		pageCount={4}
		forcePage= {currentPage - 1}
	/>
);
