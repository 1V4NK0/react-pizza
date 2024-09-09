import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen  grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />

      {/*the reason for div covering main is because without it width won't work 
      //for main | you can try without it to see*/}
      <div className="overflow-scroll">
        <main className=" max-w-3xl mx-auto ">
          <Outlet />
          {/*for now from what i understand it is just smart enough to render whatever is the current page, this Outlet is kinda placeholder for an element */}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
