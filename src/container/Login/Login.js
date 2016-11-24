import React from 'react';
import {Button} from 'react-bootstrap';
import {Item} from '../../components';


export class Login extends React.Component {

  static defaultProps = {
    data: [
      {
        id: 'username', value: '', placeholder: '用户名',  prompt: {show: false, label: '请输入正确的邮箱或手机号'}
      },
      {
        id: 'password', value: '', placeholder: '6-16位，区分大小写'
      }
    ],
    reg: {
      phoneNumber: /^1\d{10}$/g,
      email: /^[.A-Za-z0-9-_]+@[A-Za-z0-9_-]+(.[A-Za-z0-9-_]+)+$/,
    }
  };

  handleInputChange(e, id) {
    const event = e || window.event;
    const value = event.target.value;

    if(id === 'username') {

    }
  }

  render() {
    const {data} = this.props;

    return (
      <form className={styles.Login}>
        {
          data.map((item, i) => (
            <Item key={i} data={item} handleInput={(e) => this.handleInputChange(e, item.id)}/>
          ))
        }
        <Button>登录</Button>
        <Button>取消</Button>
      </form>

    );
  }
}