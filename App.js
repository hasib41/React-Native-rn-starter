import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/componentsScreen"
import ListScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/counterScreen";
import ColorScreen from "./src/screens/colorScreen";
import SquareScreen from "./src/screens/squareScreen";

const navigator = createStackNavigator({
    Home: HomeScreen,
    components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "App",
    },
});

export default createAppContainer(navigator);