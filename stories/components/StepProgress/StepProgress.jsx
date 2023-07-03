import React from 'react';
import PropTypes from 'prop-types';
import '../../global-styles.scss';
import './StepProgress.css';

/**
 * Progress indicator for steps in a progression. Example usage is in an onboarding flow.
 * 
 * For JS control, targets include:
 * 
 * **Active Step Count**: #step-progress-active-count<br />
 * **Active Step Block**: #step-progress-step-[STEP NUMBER]. <br />*Note: All completed steps need to have an added class of* `.complete`
 */
export const StepProgress = ({ stepCount, activeStep, ...props }) => {
  return (
    <div className="step-progress-container">
        <h3>Step <span id="step-progress-active-count">{activeStep}</span> of {stepCount}</h3>
        <div className="step-progress">
            {Array.apply(0, Array(stepCount)).map(function(x,i) {
                return <div id={"step-progress-step-"+(i+1)} className={activeStep && activeStep >= i+1 ? "step complete" : "step"}></div>
            })}
        </div>
    </div>
  )
};

StepProgress.propTypes = {
  stepCount: PropTypes.number,
  activeStep: PropTypes.number
};

StepProgress.defaultProps = {
  stepCount:5,
  activeStep:1
};
