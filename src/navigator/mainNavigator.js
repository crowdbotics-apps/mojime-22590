import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn11172557Navigator from '../features/SignIn11172557/navigator';
import Settings3172556Navigator from '../features/Settings3172556/navigator';
import Dashboard15172554Navigator from '../features/Dashboard15172554/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn11172557: { screen: SignIn11172557Navigator },
Settings3172556: { screen: Settings3172556Navigator },
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
