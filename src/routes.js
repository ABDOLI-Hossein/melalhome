
import { Route, Switch, Redirect, Router, BrowserRouter,} from "react-router-dom";

import Rents from "./components/rents";
import Mortgage from "./components/mortgage";
import Sale from "./components/sale";
import PostDetail from "./components/postDetail";
import Login from "./components/login";
import Received from "./components/received";
import Logout from "./components/logout";
import CreatePost2 from "./components/user/Create_posts/create_post";
import NotFound from "./components/notFound";
import PrivateRoute from "./components/utils/privateRoute";
import PublicRoutes from "./components/utils/publicRoutes";
import Home from "./components/user/Home/home";

function Routes({user}) {

 
    return (
            <Switch>  
                    <PublicRoutes restricted={false} path="/" exact component={Home}/>
                    <PublicRoutes restricted={false} path="/rent" component={Rents} />
                    <PublicRoutes restricted={false} path="/sale" component={Sale} />
                    <PublicRoutes restricted={false} path="/mortgage" component={Mortgage} />
                    <PublicRoutes restricted={false} path="/post-detail/:id/:posttype" render={(props) => <PostDetail {...props} user={user}  />}/>
                    <PublicRoutes path="/create-post" render={(props) => <CreatePost2 {...props} user={user} />}/> 
                    <PublicRoutes path="/login" restricted={true} component={Login} />
                    <PublicRoutes path='/not-found' restricted={false} component={NotFound} />
                    
                    <PrivateRoute path='/received' component={Received} user={user} />
                    <PrivateRoute path='/logout' component={Logout}/>

                    <Redirect to='/not-found'/>             
            </Switch>
      );
}

export default Routes;

