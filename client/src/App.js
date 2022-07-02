import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Register, Landing, ProtectedRoute } from "./pages";
import {
  AddJob,
  Alljobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob></AddJob>} />
          <Route path="all-jobs" element={<Alljobs></Alljobs>} />
          <Route path="profile" element={<Profile></Profile>} />
        </Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
