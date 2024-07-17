import {NavLink, Outlet} from 'react-router-dom'

const Structure = () => {
    return(
        <>
            <header>
                <NavLink className='link' to = '/films'>Films</NavLink>
                <NavLink className='link' to = '/series'>Serie</NavLink>
                <NavLink className='link' to = '/cartoons'>Cartoon</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default Structure;