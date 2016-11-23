import React, {PropTypes} from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import * as styles from './Item.scss';

export class Item extends React.Component {

  static propsTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    prompt: PropTypes.string
  };

  static defaultProps = {
    id: 'username',
    label: '请输入用户名',
    placeholder: '3-6个字符',
    prompt: '用户名无效'
  };


  render() {
    const {id, label, placeholder, prompt} = this.props.data;

    return (
      <FormGroup controlId={id} className={styles.item}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type="text" placeholder={placeholder}/>
        <FormControl.Feedback />
        <HelpBlock>{prompt}</HelpBlock>
      </FormGroup>
    );
  }
}