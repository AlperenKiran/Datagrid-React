import React from 'react'
import { Modal } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../contexts/DataContexts"
import AddData from './AddData'

export default function Action() {

    const { data, handleInputChange } = useContext(DataContext)

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        handleClose();
    }, [data])


    return (

        <div className="action">
            <div className="search-filter">
                <div className="search-container">
                    <input onChange={handleInputChange} type="text" placeholder="Search objects..." />
                    <div className="search-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40263 12.7974 1 8.6 1C4.40263 1 1 4.40263 1 8.6C1 12.7974 4.40263 16.2 8.6 16.2Z"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.6 17L15 15.4" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="filter">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 1C16 0.447715 15.5523 0 15 0H1C0.447715 0 0 0.447715 0 1V2.58579C0 2.851 0.105357 3.10536 0.292893 3.29289L4.7071 7.7071C4.89464 7.89464 4.99999 8.14899 4.99999 8.41421V15.3063C4.99999 15.6476 5.33434 15.8886 5.65811 15.7806L10.6581 14.114C10.8623 14.0459 11 13.8548 11 13.6396V8.41422C11 8.149 11.1054 7.89465 11.2929 7.70711L15.7071 3.29289C15.8946 3.10536 16 2.851 16 2.58579V1Z"
                            fill="#744BFC" />
                    </svg>
                </div>
            </div>
            <button onClick={handleShow} id="openModalBtn" className="button" href="#">
                Yeni Hesap Ekle
            </button>

            <Modal className='modal' show={show} onHide={handleClose} >
                <div className="modal-content">
                    <span className="close closeIcon" onClick={handleClose} >&times;</span>
                    <AddData handleClose={handleClose} />
                </div>
            </Modal>

        </div>

    )
}
