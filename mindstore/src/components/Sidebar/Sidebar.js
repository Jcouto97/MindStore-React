import React from 'react'
import Sort from '../Sort/Sort'
import Filter from '../Filter/Filter'
import "./sidebar.css"

function Sidebar(props) {
    const { handleSort, changeLink, changeNrProducts, productsPerPage } = props;

    //sidebar middle man entre a pagina e as componentes, passa da pagina para as componentes as props

    return (
        <>
            <div className="sidebar" >
                <Sort handleSort={handleSort} />
                <Filter changeLink={changeLink} changeNrProducts={changeNrProducts} productsPerPage={productsPerPage}/>
            </div>
        </>
    )
}

export default Sidebar