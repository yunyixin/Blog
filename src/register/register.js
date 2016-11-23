import React from 'react';
import {Button} from 'react-bootstrap';
import {Item} from '../components';
import * as styles from './register.scss';

export class Register extends React.Component {

  render() {
    const data = [
      {
        id: 'username', label: '请输入用户名', placeholder: '3-6个字符', prompt: '用户名无效'
      }, {
        id: 'phoneNumber', label: '请输入手机号码', placeholder: '', prompt: '手机号无效'
      }, {
        id: 'password', label: '请输入密码', placeholder: '不少于6个字符', prompt: '密码无效'
      }
    ];

    return (
      <form className={styles.register}>
        {
          data.map((item, i) => (
             <Item key={i} data={item}/>
            ))
        }
        <Button>注册</Button>
        <Button>取消</Button>
      </form>

    );
  }
}