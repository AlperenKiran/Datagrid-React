import React from 'react'
import { DataContext } from "../contexts/DataContexts";
import { useContext, useState } from "react";


export default function AddData({ handleClose }) {

    const { addData } = useContext(DataContext)

    const [link, setLink] = useState("")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")


    const handleSumbit = (e) => {
        e.preventDefault();
        addData(link, name, desc)
    }

    return (


        <form onSubmit={handleSumbit} className="items">
            <div className="addItem">
                <h2>Sosyal Medya Linki</h2>
                <input
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />
            </div>
            <div className="addItem">
                <h2>Sosyal Medya Adı</h2>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="addItem">
                <h2>Açıklama</h2>
                <input
                    type="text"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button id="vazgec" onClick={handleClose} >
                    Vazgeç
                </button>
                <button id="kaydet" type='submit'>
                    Kaydet
                </button>
            </div>

        </form>

    )
}
