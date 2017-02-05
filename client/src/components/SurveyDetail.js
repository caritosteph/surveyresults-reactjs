import React, {PropTypes} from 'react';
import ThemeListContainer from '../containers/ThemeListContainer';
import Utils from '../utils/Utils';

const SurveyDetail = ({surveyDetail}) => {

  return (
    <div className = "container">
      <div className = "col-md-6 col-md-offset-3 survey-detail">
        <div className = "survey-detail-header">
          <div className = "col-md-1 icon">
            <i className = "fa fa-bar-chart"/>
          </div>
          <h3 className = "survey-detail-name">{surveyDetail.name}</h3>
        </div>
        <div className = "survey-detail-body">
          <div className = "survey-detail-rate">
            <h2 className = "detail-rate">{Utils.percentage_rate(surveyDetail.response_rate)}<sup>%</sup></h2>
          </div>
        </div>
        <div className = "survey-detail-footer">
          <div className = "col-md-6 survey-detail-info">
            <strong>{surveyDetail.participant_count}</strong>
            <p>Participants</p>
          </div>
          <div className = "col-md-6">
            <strong>{surveyDetail.submitted_response_count}</strong>
            <p>Submitted responses</p>
          </div>
        </div>
      </div>
      <div className = "col-md-12">
        <ThemeListContainer themeList = {surveyDetail.themes}/>
      </div>
    </div>
  );
};

SurveyDetail.propTypes = {
  surveyDetail: PropTypes.object.isRequired
};

export default SurveyDetail;
