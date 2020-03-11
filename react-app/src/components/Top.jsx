import React from 'react';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { getSiteRecords } from '../actions/Action'
// top bar
import TopMenu from './TopMenu';
// body
import SiteRecordList from './SiteRecordList';
// bottom
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Top extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     userid: ""
        // };
        this.store = createStore(
            rootReducer,
            applyMiddleware(thunk, logger)
        )

    }

    render() {
        return (this.store.dispatch(getSiteRecords(this.props.userid)))
            .then(res => 
                <div>
                    <TopMenu />
                    <SiteRecordList data={res} />
                    <div className="">
                        <BottomNavigation style={{ bottom: "0" }}>
                            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                        </BottomNavigation>
                    </div>
                </div>
            )
    }
}

export default Top