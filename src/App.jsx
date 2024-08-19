import ResponsiveDialog from "./components/Dialogbox";
import CustomizedSnackbar from "./components/Snackbar";
import Home from "./Home";
import Login from "./Login";
import useUserStore from "./stores/UserStore";

function App() {
  const user = useUserStore((state) => state.user?.name);
  return (
    <div>
      <CustomizedSnackbar />
      <ResponsiveDialog />
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
