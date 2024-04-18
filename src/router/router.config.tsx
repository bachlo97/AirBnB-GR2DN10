import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      element: <UserTemplate />,
      children: [
        {
          path: "",
          element:<Home />
  
        },
        ]
    }
  ]);
  