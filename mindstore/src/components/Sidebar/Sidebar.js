import React from 'react'
import Sort from '../Sort/Sort'
import Filter from '../Filter/Filter'

function Sidebar(props) {
    const { handleSort, changeLink } = props;

    //sidebar middle man entre a pagina e as componentes, passa da pagina para as componentes as props

    return (
        <>
            <div>
                <Sort handleSort={handleSort} />
                <Filter changeLink={changeLink} />
            </div>
        </>
    )
}

export default Sidebar