import React, { useCallback } from "react";
import PropTypes from "prop-types";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { DATA_VEW_MODES } from "../constants";

export const ToggleDataViewMode = ({ dataViewMode, setDataViewMode }) => {
  const handleChangeViewMode = useCallback(
    (_, nextView) => {
      setDataViewMode(nextView);
    },
    [setDataViewMode]
  );
  return (
    <ToggleButtonGroup
      value={dataViewMode}
      size="small"
      exclusive
      onChange={handleChangeViewMode}
    >
      <ToggleButton
        value={DATA_VEW_MODES.GRID}
        aria-label={DATA_VEW_MODES.GRID}
      >
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VEW_MODES.TABLE}
        aria-label={DATA_VEW_MODES.TABLE}
      >
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleDataViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VEW_MODES.TABLE, DATA_VEW_MODES.GRID]),
  setDataViewMode: PropTypes.func.isRequired,
};
