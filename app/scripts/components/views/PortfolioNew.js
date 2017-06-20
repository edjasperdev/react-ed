import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
const Link = require('react-router-dom').Link;

class PortfolioNew extends Component{

  renderField (field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;
    
    return ( 
      <div className={ className }>
        <label>{field.label}</label>
        <input 
          className="form-input"
          type="text"
          {...field.input}
        />
        <div className="text-help">
        { touched ? error : null }
        </div>
      </div>
    );


  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/portfolio');
    });
  }

  render(){

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="new-form">
        <Field
          name='title'
          component={this.renderField}
          label="Title"
        />
        <Field
          name='categories'
          component={this.renderField}
          label="Categories"
        />
         <Field
          name='content'
          component={ this.renderField }
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/portfolio" className="cancel-post"><button className="btn btn-danger">Cancel</button></Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title ) {
    errors.title = "Enter a title!";
  }
  if(!values.content){
    errors.content = "Enter some content!";
  }

  return errors;

}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PortfolioNew)
);



