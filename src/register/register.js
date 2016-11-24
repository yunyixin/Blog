import React from 'react';
import {Button} from 'react-bootstrap';
import {Item} from '../components';
import * as styles from './register.scss';

export class Register extends React.Component {

  static defaultProps = {
    reg: {
      username: /^[a-zA-Z][a-zA-Z0-9_]{3,5}$/ig,
      phoneNumber: /^1\d{10}$/g,
      email: /^[.A-Za-z0-9-_]+@[A-Za-z0-9_-]+(.[A-Za-z0-9-_]+)+$/,
      password: /^\w{5,17}$/g
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 'username', value: '', label: '请输入用户名', placeholder: '3-6个字符', prompt: {show: false, label: '用户名无效'}
        }, {
          id: 'phoneNumber', value: '', label: '请输入手机号码', placeholder: '11位数字', prompt: {show: false, label: '手机号码无效'}
        }, {
          id: 'email', value: '', label: '请输入邮箱', placeholder: 'xxx@xx.com', prompt: {show: false, label: '邮箱格式错误'}
        }, {
          id: 'password', value: '', label: '请输入密码', placeholder: '不少于6个字符', prompt: {show: false, label: '密码无效'}
        }, {
          id: 'passwordAgain',
          value: '',
          label: '请再次输入密码',
          placeholder: '不少于6个字符',
          prompt: {show: false, label: '密码不一致'}
        }
      ],
      eee: {
        username: {
          id: 'username', label: '请输入用户名', placeholder: '3-6个字符', prompt: {show: false, label: '用户名无效'}
        },
        phoneNumber: {
          id: 'phoneNumber', label: '请输入手机号码', placeholder: '11位数字', prompt: {show: false, label: '手机号码无效'}
        },
        email: {
          id: 'email', label: '请输入邮箱', placeholder: 'xxx@xx.com', prompt: {show: false, label: '邮箱格式错误'}
        },
        password: {
          id: 'password', label: '请输入密码', placeholder: '不少于6个字符', prompt: {show: false, label: '密码无效'}
        },
        passwordAgain: {
          id: 'passwordAgain', label: '请再次输入密码', placeholder: '不少于6个字符', prompt: {show: false, label: '密码不一致'}
        }
      }
    };
  }

  handleInputChange(e, id) {
    const event = e || window.event;
    const value = event.target.value;
    const regex = this.props.reg;

    switch (id) {
      case 'username':
        this.validateUserName(value, regex.username, 0);

        break;
      case 'phoneNumber':
        this.validateUserName(value, regex.phoneNumber, 1);
        break;
      case 'email':
        this.validateUserName(value, regex.email, 2);
        break;
      case 'password':
        this.validateUserName(value, regex.password, 3);
        break;
      case 'passwordAgain':
        this.comparePassword(value, 4);
        break;
      default:
        break;
    }

  }

  validateUserName(value, regex, i) {
    const {data} = this.state;

    data[i].value = value;
    data[i].prompt.show = !regex.test(value);
    if (value === '') {
      data[i].prompt.show = false;
    }
    this.setState({data});
  }

  comparePassword(value, i) {
    const {data} = this.state;
    const password = data[3].value;

    data[i].value = value;
    data[i].prompt.show = value !== password;
    if (value === '') {
      data[i].prompt.show = false;
    }
    this.setState({data});
  }

  render() {
    const {data} = this.state;

    return (
      <form className={styles.register}>
        {
          data.map((item, i) => (
            <Item key={i} data={item} handleInput={(e) => this.handleInputChange(e, item.id)}/>
          ))
        }
        <Button>注册</Button>
        <Button>取消</Button>
      </form>

    );
  }
}