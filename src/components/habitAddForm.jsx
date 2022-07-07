import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='추가할 습관'
        />
        <button className='add-button'>추가</button>
      </form>
    );
  }
}

export default HabitAddForm;
