import { createContext, useState } from "react"


export const DataContext = createContext();


export default function DataContextsProvider({ children }) {



    const [data, setData] = useState([
        {
            link: 'instagram.com/mobilerast/', name: 'instagram', desc: "We'll help you to finish your development project successfully."
        },
        {
            link: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', desc: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'
        },
        {
            link: 'behance.net/rastmobile', name: 'behance ', desc: 'Software Development Agency Rast Mobile Information Technology Ltd.'
        },
        {
            link: 'twitter.com/rastmobile', name: 'twitter', desc: 'Software Development Agency Rast Mobile Information Technology Ltd.'
        }
    ])



    const addData = (link, name, desc) => {

        setData([...data, { link, name, desc }])

    }



    const [search, setSearch] = useState("")

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const dataFilter = data.filter(
        (item) => {
            return item.link.toLowerCase().includes(search.toLowerCase())
        }
    )


    const values = {
        data,
        setData,
        addData,
        handleInputChange,
        dataFilter
    }

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}
