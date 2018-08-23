import React, {Component} from "react";
import './PhraseForm.css';
import {connect} from "react-redux";
import {UpdatePhraseText} from '../actions/UpdatePhraseText';

const mapDispatchToProps = dispatch => {
  return {
    UpdatePhraseText: newText => dispatch(UpdatePhraseText(newText))
  };
};

class ConnectedPhraseForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { phraseValue: '' };
  }

  handleChange(event) {
    this.setState({ phraseValue: event.target.value });
  }

  handleSubmit(event) {
    const apiHost = process.env.API_HOST || 'https://questionnaire-api.herokuapp.com';
    const url = `${apiHost}/phrases?text=${this.state.phraseValue}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ phraseValue: '' });
        this.props.UpdatePhraseText(response.text);
      })
      .catch(error => console.error('Error:', error));

    event.preventDefault();
  }

  render() {
    return(
      <div className="row justify-content-md-center phrases-form">
        <div className="col-md-6 col-sm-12">
          <form onSubmit={ this.handleSubmit } className="form-inline">
            <div className="form-group">
              <input type="text" className="form-control" id="phraseTextInput" placeholder="Enter a phrase"
                     required={ true } value={ this.state.phraseValue } onChange={ this.handleChange }/>
            </div>
            <button type="submit" className="btn btn-danger phrases-button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const PhraseForm = connect(null, mapDispatchToProps)(ConnectedPhraseForm);
export default PhraseForm;
