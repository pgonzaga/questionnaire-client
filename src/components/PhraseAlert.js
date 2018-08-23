import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { textValue: state.textValue };
};

const ConnectedPhraseAlert = ({ textValue }) => (
  <div className="row justify-content-md-center" hidden={ textValue === undefined }>
    <div className="col-md-6 col-sm-12">
      <div className="alert alert-primary" role="alert">
        Your text is: { textValue }
      </div>
    </div>
  </div>
);

const PhraseAlert = connect(mapStateToProps)(ConnectedPhraseAlert);
export default PhraseAlert;
