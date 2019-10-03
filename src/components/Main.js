import React from 'react';
import '../styles/main.css';
import PropTypes from 'prop-types';
import GeneralStatus from './GeneralStatus';
import EmployeeStatus from './EmployeeStatus';

const Main = (props) => {
  const {
    attributeObject,
    getLevelInfo,
    defaultObject,
    careerInfo,
    getAttributeId
  } = props;

  return (
    <div className="main__container">
      <EmployeeStatus />
      <GeneralStatus
        careerInfo={careerInfo}
        getAttributeId={getAttributeId}
        attributeObject={attributeObject}
        getLevelInfo={getLevelInfo}
        defaultObject={defaultObject}
      />
    </div>
  );
};

Main.propTypes = {
  attributeObject: PropTypes.object,
  getLevelInfo: PropTypes.func.isRequired,
  defaultObject: PropTypes.object.isRequired,
  careerInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAttributeId: PropTypes.func.isRequired
};

export default Main;
