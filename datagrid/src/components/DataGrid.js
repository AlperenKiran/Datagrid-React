import React, { useContext, useState } from "react"
import { DataContext } from "../contexts/DataContexts"
import Action from "./Action"
import Pagination from "./Pagination"


export default function DataGrid() {


    const { dataFilter } = useContext(DataContext)

    const handleRowCountChange = (event) => {
        const selectedRowCount = event.target.value;
        setRowCount(selectedRowCount);
    };


    const [rowCount, setRowCount] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);




    const lastDataIndex = currentPage * rowCount
    const firstDataIndex = lastDataIndex - rowCount
    let currentData = dataFilter.slice(firstDataIndex, lastDataIndex)

    return (

        <div className="containerr">
            <main>
                <Action />
                <table>
                    <thead>
                        <tr className="baslik">
                            <th>
                                <h2>Sosyal Medya Linki</h2>
                                <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.98602 5L4.98602 19" stroke="#744BFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M4.78241 0.285875L0.900427 5.73587C0.523197 6.26547 0.901813 7 1.55203 7L8.42004 7C9.07025 7 9.44887 6.26547 9.07164 5.73587L5.18966 0.285875C5.08998 0.145929 4.88209 0.145929 4.78241 0.285875Z"
                                        fill="#744BFC" />
                                </svg>
                            </th>
                            <th>
                                <h2>Sosyal Medya Adı</h2>
                                <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.98604 15L4.98604 1" stroke="#C0B8DC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M5.18965 19.7141L9.07163 14.2641C9.44886 13.7345 9.07025 13 8.42003 13L1.55202 13C0.901807 13 0.523193 13.7345 0.900422 14.2641L4.7824 19.7141C4.88208 19.8541 5.08997 19.8541 5.18965 19.7141Z"
                                        fill="#C0B8DC" />
                                </svg>
                            </th>
                            <th>
                                <h2>Açıklama</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.link}</td>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pages-action">
                    <div className="show">
                        <h2>Show:</h2>
                        <select value={rowCount} onChange={handleRowCountChange}>
                            <option value={2}>2 rows</option>
                            <option value={4}>4 rows</option>
                            <option value={6}>6 rows</option>
                            <option value={8}>8 rows</option>
                        </select>
                    </div>
                    <Pagination
                        totalData={dataFilter.length}
                        rowCount={rowCount}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </main>
        </div>

    )
}
