import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <div>Travel Blogger</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Travel Blog</Link></li>
                    <li><Link to='/new-travel-blog'>New Travel Blog</Link></li>
                    <li><Link to='/bucket-list'>Bucket List</Link></li>            
                </ul>
            </nav>
            
        </header>
    )
}

export default MainNavigation;
