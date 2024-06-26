// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
import { GlobalStyle } from "./components/global-style/global-style.tsx";

// ** Redux
import { store } from "./redux/store.config.ts";
import { Provider } from "react-redux";

// ** End - Redux
//  i18

function App() {
  return (
    <GlobalStyle>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GlobalStyle>
  );
}

export default App;
