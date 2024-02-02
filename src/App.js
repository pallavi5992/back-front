import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import "./index.css";
import Sidebar from "./components/common/UI/Sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./components/pages/dashBoardManagnment/userDetails/User";
import OrganisationMaster from "./components/pages/dashBoardManagnment/organisationMaster/OrganisationMaster";
import ModuleConfig from "./components/pages/dashBoardManagnment/moduleConfiguration/ModuleConfig";
import Location from "./components/pages/dashBoardManagnment/location/Location";
import DiscMaster from "./components/pages/dashBoardManagnment/discMaster/DiscMaster";
import DefenceChallenge from "./components/pages/dashBoardManagnment/defenceChallenge/DefenceChallenge";
import AccessAssign from "./components/pages/dashBoardManagnment/accessAssignments/AccessAssign";
import AIinDefence from "./components/pages/dashboardConfiguration/aiInDefence/AIinDefence";
import DefenceExportAPI from "./components/pages/dashboardConfiguration/defenceExportApi/DefenceExportAPI";
import DefenceOffsetApi from "./components/pages/dashboardConfiguration/defenceOffsetApi/DefenceOffsetApi";
import DefenceProduction from "./components/pages/dashboardConfiguration/defenceProduction/DefenceProduction";
import MissionRakshaGyan from "./components/pages/dashboardConfiguration/missionRakshaGyan/MissionRakshaGyan";
import MakeProject from "./components/pages/dashboardConfiguration/makeProject/MakeProject";
import MakeprojectI from "./components/pages/dashboardConfiguration/makeprojectI/MakeprojectI";
import Makeproject2dap from "./components/pages/dashboardConfiguration/makeproject2dap/Makeproject2dap";
import Makeproject2dapsu from "./components/pages/dashboardConfiguration/makeproject2dapsu/Makeproject2dapsu";
import MakeProject3 from "./components/pages/dashboardConfiguration/makeProject3/MakeProject3";
import MakeProject3dap from "./components/pages/dashboardConfiguration/makeProject3dap/MakeProject3dap";
import MakeProject3dpsu from "./components/pages/dashboardConfiguration/makeProject3dpsu/MakeProject3dpsu";
import Idex from "./components/pages/dashboardConfiguration/idex/Idex";
import UpDefenceCorridor from "./components/pages/dashboardConfiguration/upDefenceCorridor/UpDefenceCorridor";
import TamilnaduDefenceCorridor from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/TamilnaduDefenceCorridor";
import AddUser from "./components/pages/dashBoardManagnment/userDetails/AddUser";
import UpdateUser from "./components/pages/dashBoardManagnment/userDetails/UpdateUser";
import PrivateSectore from "./components/pages/dashBoardManagnment/organisationMaster/PrivateSectore";
import AddOrganisationMaster from "./components/pages/dashBoardManagnment/organisationMaster/AddOrganisationMaster";
import ViewExportData from "./components/pages/dashboardConfiguration/defenceExportApi/ViewExportData";
import AddMakeProject from "./components/pages/dashboardConfiguration/makeProject/AddMakeProject";
import AddMakeproject2dap from "./components/pages/dashboardConfiguration/makeproject2dap/AddMakeproject2dap";
import AddMakeprojectI from "./components/pages/dashboardConfiguration/makeprojectI/AddMakeprojectI";
import AddMakeProject2Dpsu from "./components/pages/dashboardConfiguration/makeproject2dapsu/AddMakeProject2Dpsu";
import AddAIData from "./components/pages/dashboardConfiguration/aiInDefence/AddAIData";
import AddTamilDefenceData from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/AddTamilDefenceData";
import AddupDefenceData from "./components/pages/dashboardConfiguration/upDefenceCorridor/AddupDefenceData";
import AddDefenceProduction from "./components/pages/dashboardConfiguration/defenceProduction/AddDefenceProduction";
import AddMrgsIPR from "./components/pages/dashboardConfiguration/missionRakshaGyan/AddMrgsIPR";
import AddIdexData from "./components/pages/dashboardConfiguration/idex/AddIdexData";
import AddMrgsconsolidetedData from "./components/pages/dashboardConfiguration/missionRakshaGyan/AddMrgsconsolidetedData";
import AddDap from "./components/pages/dashboardConfiguration/makeProject3dap/AddDap";
import AddDpsu from "./components/pages/dashboardConfiguration/makeProject3dpsu/AddDpsu";
import AddMakeProject3 from "./components/pages/dashboardConfiguration/makeProject3/AddMakeProject3";
import AddAnnounceDataTN from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/AddAnnounceDataTN";
import AddAnnounceDataUp from "./components/pages/dashboardConfiguration/upDefenceCorridor/AddAnnounceDataUp";
import UpdateUserSelf from "./components/pages/dashBoardManagnment/userDetails/UpdateUserSelf";
import { PrivateRoutes, PublicRoutes } from "./utils/Routes";
import UpadateOrganisationMaster from "./components/pages/dashBoardManagnment/organisationMaster/UpdateOrganisationMaster";
import ForgotPassword from "./components/pages/forgotPassword/ForgotPassword";
import ResetPassword from "./components/pages/forgotPassword/ResetPassword";
import CardSection from "./components/pages/dashboard/CardSection";
import NotFoundPage from "./components/common/UI/notFountPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="admin/index" element={<PublicRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot/password" element={<ForgotPassword />} />
          <Route path="reset/password/:token" element={<ResetPassword />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<Sidebar />}>
            <Route path="/" element={<CardSection />} />
          </Route>
        </Route>
        <Route path="admin/index" element={<PrivateRoutes />}>
          <Route element={<Sidebar />}>
          
            <Route path="user" element={<User />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="update/:id/user" element={<UpdateUser />} />
            <Route path="update/user/self/data" element={<UpdateUserSelf />} />

            <Route path="accessassign" element={<AccessAssign />} />

            {/* organisationMaster Private sector AddOrgniation sector */}
            <Route path="organisationmaster" element={<OrganisationMaster />} />
            <Route
              path=":sectorId/privatesector"
              element={<PrivateSectore />}
            />
            <Route
              path="addorganisationmaster"
              element={<AddOrganisationMaster />}
            />
            <Route
              path="upadte/:id/organisation/master"
              element={<UpadateOrganisationMaster />}
            />

            <Route path="moduleconfig" element={<ModuleConfig />} />
            <Route path="location" element={<Location />} />
            <Route path="discmaster" element={<DiscMaster />} />
            <Route path="defencechallenge" element={<DefenceChallenge />} />

            {/* DashBoard configuration routes */}

            <Route path="defenceExportAPI" element={<DefenceExportAPI />} />
            <Route
              path="defenceExportAPI/viewexportdata"
              element={<ViewExportData />}
            />

            <Route path="defenceOffsetAPI" element={<DefenceOffsetApi />} />

            <Route path="defenceproduction" element={<DefenceProduction />} />
            <Route
              path="adddefenceproductiondata"
              element={<AddDefenceProduction />}
            />

            <Route
              path="missionrakshagyanshakti"
              element={<MissionRakshaGyan />}
            />
            <Route path="addmrgsipr" element={<AddMrgsIPR />} />
            <Route
              path="addmrgsiconsolidatedData"
              element={<AddMrgsconsolidetedData />}
            />

            <Route path="makeproject" element={<MakeProject />} />
            <Route path="addmakeproject" element={<AddMakeProject />} />

            <Route path="make1project" element={<MakeprojectI />} />
            <Route path="addmakeprojectI" element={<AddMakeprojectI />} />

            <Route path="makeprojectdap" element={<Makeproject2dap />} />
            <Route path="addmakeproject2dap" element={<AddMakeproject2dap />} />

            <Route path="makeprojectdpsu" element={<Makeproject2dapsu />} />
            <Route
              path="addmakeproject2dpsu"
              element={<AddMakeProject2Dpsu />}
            />

            <Route path="makeproject3" element={<MakeProject3 />} />
            <Route path="addmakeproject3" element={<AddMakeProject3 />} />

            <Route path="makeproject3dap" element={<MakeProject3dap />} />
            <Route path="addDap" element={<AddDap />} />

            <Route path="makeproject3dpsu" element={<MakeProject3dpsu />} />
            <Route path="addDpsu" element={<AddDpsu />} />

            <Route path="idex" element={<Idex />} />
            <Route path="addidexdata" element={<AddIdexData />} />

            <Route path="uttarpradeshdefence" element={<UpDefenceCorridor />} />
            <Route path="addupdefenceData" element={<AddupDefenceData />} />
            <Route path="addannouncedataup" element={<AddAnnounceDataUp />} />

            <Route
              path="tamilnadudefence"
              element={<TamilnaduDefenceCorridor />}
            />
            <Route
              path="addtamilnadudefenceData"
              element={<AddTamilDefenceData />}
            />
            <Route path="addannouncedatatn" element={<AddAnnounceDataTN />} />

            <Route path="aidefence" element={<AIinDefence />} />
            <Route path="addaidefenceData" element={<AddAIData />} />

            {/* Pryas API*/}
          </Route>
        </Route>

        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
