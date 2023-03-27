import { Routes, Route } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"


function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<People />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
}

export default Main