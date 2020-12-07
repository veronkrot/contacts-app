import { useEffect, useState } from "react";
import { DATA_VEW_MODES } from "../pages/Contacts/constants";

const getInitialDataViewMode = () => {
  return localStorage.getItem("dataViewMode") || DATA_VEW_MODES.TABLE;
};

export const useDataViewMode = () => {
  const [dataViewMode, setDataViewMode] = useState(getInitialDataViewMode);
  useEffect(() => {
    localStorage.setItem("dataViewMode", dataViewMode);
  }, [dataViewMode]);
  return [dataViewMode, setDataViewMode];
};
