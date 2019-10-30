import React, { Component } from 'react';

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe601;</i>
            </NavItem>
            <NavItem className="right">登录</NavItem>
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe606;</i>
          </Nav>
          <Addition>
            <Button className="writing">
              <i className="iconfont">&#xe600;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

export default Header;