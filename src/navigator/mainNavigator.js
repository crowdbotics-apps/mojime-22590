import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps172589Navigator from '../features/Maps172589/navigator';
import Additem172588Navigator from '../features/Additem172588/navigator';
import Maps172584Navigator from '../features/Maps172584/navigator';
import UserProfile172580Navigator from '../features/UserProfile172580/navigator';
import SignIn11172557Navigator from '../features/SignIn11172557/navigator';
import Dashboard15172554Navigator from '../features/Dashboard15172554/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps172589: { screen: Maps172589Navigator },
Additem172588: { screen: Additem172588Navigator },
Maps172584: { screen: Maps172584Navigator },
UserProfile172580: { screen: UserProfile172580Navigator },
SignIn11172557: { screen: SignIn11172557Navigator },
Dashboard15172554: { screen: Dashboard15172554Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
