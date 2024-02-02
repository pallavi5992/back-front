import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/auth/loginSlice";
import captchaSlice from "./slice/captcha/captchaSlice";
import logoutSlice from "./slice/auth/logoutSlice";
import addUserSlice from "./slice/user/addUserSlice";
import getAllUserSlice from "./slice/user/getAllUserSlice";
import deleteUserSlice from "./slice/user/deleteUserSlice";
import getUserByTokenSlice from "./slice/user/getUserByTokenSlice";
import upadateUserByTokenSlice from "./slice/user/updateUserByTokenSlice";
import updateUserByIdSlice from "./slice/user/updateUserByIdSlice";
import getUserByIdSlice from "./slice/user/getUserByIdSlice";
import getUserNameIdSlice from "./slice/user/getUserNameIdSlice";
import searchUserSlice from "./slice/user/searchUserSlice";
import getAllModuleSlice from "./slice/mudule/getAllModuleSlice";
import getAccessAssessmentSlice from "./slice/accessAssessment/getAccessAssessmentSlice";
import addAccessAssessmentSlice from "./slice/accessAssessment/addAccessAssessmentSlice";
import addOraganisationSlice from "./slice/organisationMaster/addOrganisationSlice";
import getAllOrganisationSlice from "./slice/organisationMaster/getAllOrganisationSlice";
import deleteOrganisationSlice from "./slice/organisationMaster/deleteOrganisationSlice";
import getOrganisationByIdSlice from "./slice/organisationMaster/getOrganisationByIdSlice";
import updateOrganisationSlice from "./slice/organisationMaster/updateOrganisationSlice";
import searchOrganisationSlice from "./slice/organisationMaster/searchOrganisationSlice";
import getOrganisationbySectorIdSlice from "./slice/organisationMaster/getOrganisationbySectorIdSlice";
import addModuleConfigSlice from "./slice/moduleConfig/addModuleConfigSlice";
import getModuleConfigByModuleIdSlice from "./slice/moduleConfig/getModuleConfigByModuleIdSlice";
import getAllModuleConfigSlice from "./slice/moduleConfig/getAllModuleConfigSlice";
import forgotPasswordSlice from "./slice/auth/forgotPasswordSlice";
import resetPasswordSlice from "./slice/auth/resetPasswordSlice";


export const store=configureStore({
    reducer:{
        loginSlice:loginSlice,
        captchaSlice:captchaSlice,
        logoutSlice:logoutSlice,
        resetPasswordSlice:resetPasswordSlice,
        forgotPasswordSlice:forgotPasswordSlice,
        addUserSlice:addUserSlice,
        getAllUserSlice:getAllUserSlice,
        deleteUserSlice:deleteUserSlice,
        getUserByTokenSlice:getUserByTokenSlice,
        upadateUserByTokenSlice:upadateUserByTokenSlice,
        updateUserByIdSlice:updateUserByIdSlice,
        getUserByIdSlice:getUserByIdSlice,
        getUserNameIdSlice:getUserNameIdSlice,
        searchUserSlice:searchUserSlice,
        getAllModuleSlice:getAllModuleSlice,
        getAccessAssessmentSlice:getAccessAssessmentSlice,
        addAccessAssessmentSlice:addAccessAssessmentSlice,
        addOraganisationSlice:addOraganisationSlice,
        getAllOrganisationSlice:getAllOrganisationSlice,
        deleteOrganisationSlice:deleteOrganisationSlice,
        getOrganisationByIdSlice:getOrganisationByIdSlice,
        updateOrganisationSlice:updateOrganisationSlice,
        searchOrganisationSlice:searchOrganisationSlice,
        getOrganisationbySectorIdSlice:getOrganisationbySectorIdSlice,
        addModuleConfigSlice:addModuleConfigSlice,
        getModuleConfigByModuleIdSlice:getModuleConfigByModuleIdSlice,
        getAllModuleConfigSlice:getAllModuleConfigSlice
    },
});