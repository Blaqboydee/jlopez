import { useLocation } from "react-router-dom";

const useRouteVisibility = () => {
  const location = useLocation();

  const knownRoutes = [];
  const shouldDisplayNavBar = knownRoutes.includes(location.pathname);

  const haveGenFooter = [
    "/dashboard",
    "/dashboard/knowme",
    "/dashboard/seeme",
    "/dashboard/timetogether",
    "/dashboard/surpriseme",
    "/dashboard/booking"
  ];
  const shouldHaveGenFooter = haveGenFooter.includes(location.pathname);

  return { shouldDisplayNavBar, shouldHaveGenFooter };
};

export default useRouteVisibility;
