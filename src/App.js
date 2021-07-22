import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
            <Admin 
            dashboard={Dashboard} 
            authProvider={authProvider} 
            dataProvider={dataProvider}>
             {/* history={history} */}
               <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
               <Resource name="users" list={UserList} icon={UserIcon} />
            </Admin>
  );

export default App;