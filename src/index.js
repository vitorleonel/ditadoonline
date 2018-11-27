import { createStackNavigator, createAppContainer } from "react-navigation";

import MainContainer from "./containers/Main";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainContainer
  }
});

export default createAppContainer(AppNavigator);
