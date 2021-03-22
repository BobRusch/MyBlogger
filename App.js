import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/Index.screen";
import ShowScreen from "./src/screens/Show.screen";
import CreateScreen from "./src/screens/Create.screen";
import EditScreen from "./src/screens/Edit.screen";

import { Provider } from "./src/context/blog.context";

const AppNavagation = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "MyBlogger",
    },
  }
);

const App = createAppContainer(AppNavagation);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
