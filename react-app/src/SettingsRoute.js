import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Team from './routes/team/Team.component'

const SettingsRoute=({match})=>(
    <Fragment>
        <Route path={`${match.url}/Team`} component={Team}/>
    </Fragment>
);

export default SettingsRoute