import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Home from "../../pages/sitePages/Home";
import Cardapio from "../../pages/sitePages/Cardapio";
import Promocoes from "../../pages/sitePages/Promocoes";
import NotFound from "../../pages/sitePages/NotFound";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path={"/cardapio"} element={<Cardapio />} />
                        <Route path={"/promocoes"} element={<Promocoes />} />
                    </Route>
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>            
        </>
    );
}

export default Paths;