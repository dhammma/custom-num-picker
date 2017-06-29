import React, { Component } from 'react';
import cx from 'classnames';
import './NumPicker.css';

class NumPicker extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showEditor: false
    };
  }

  render() {
    const { value, options, onChange } = this.props;
    const { showEditor } = this.state;
    const customValue = value && !options.includes(value) && value;

    return (
      <div className="NumPicker-container">
        {!showEditor &&
          <div className="NumPicker-option-list">
            {options.map((option, index) => (
              <button
                key={index}
                className={cx('NumPicker-option-item', {
                  active: option === value
                })}
                onClick={() => onChange(option)}
              >
                {option}
              </button>
            ))}
            <button
              className={cx('NumPicker-option-item', {
                active: customValue
              })}
              onClick={() => this.setState({ showEditor: true })}
            >
              {customValue || '...'}
            </button>
          </div>
        }
        {showEditor &&
          <div className="NumPicker-editor-container">
            <input
              type="number"
              value={value || ''}
              onChange={e => onChange(parseInt(e.target.value, 10))}
              onKeyPress={e => {
                if (e.which === 13) {
                  e.preventDefault();
                  this.setState({ showEditor: false });
                }
              }}
              className="NumPicker-editor-input"
              autoFocus
            />
            <button
              className="NumPicker-editor-close"
              onClick={() => this.setState({ showEditor: false })}
            />
          </div>
        }
      </div>
    );
  }
}

export default NumPicker;
