import React from 'react'

export default function Pagination({ totalData, rowCount, setCurrentPage, currentPage }) {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalData / rowCount); i++) {
        pages.push(i)
    }


    return (
        <div className="pages">

            <a href="#" onClick={() => setCurrentPage((prev) => prev === 1 ? prev : prev - 1)}>
                <svg className={`${currentPage === 1 ? 'disabled' : 'active'}`} width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 13L2 7L8 0.999999" stroke="#C9C9C9" stroke-width="2" />
                </svg>
            </a>
            <a className="one" href="#">1</a>
            <span>of</span>
            <a className="four" href="#">4</a>
            <a href="#" className='`${a}`' onClick={() => setCurrentPage((prev) => prev === pages.length ? prev : prev + 1)} >
                <svg className={`${currentPage === 1 ? "active" : currentPage === pages.length ? 'disabled' : 'active'}`} width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.999999L7 7L0.999999 13" stroke="#744BFC" stroke-width="2" />
                </svg>
            </a>

        </div >
    )
}
