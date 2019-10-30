import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div `
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;

  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  type: 'search',
  placeholder: '搜索',
  className: 'input',
  id: 'search'
}) `
  width: 160px;
  height: 36px;
  margin-top: 9px;
  margin-left: 16px;
  padding: 8px 36px 8px 16px;
  border: none;
  border-radius: 18px;
  outline: none;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.div `
  float: right;
  margin-top: 9px;
  margin-right: 20px; 
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec7259;
  line-height: 38px;
  font-size: 14px;
  &.reg {
    color: #ec7259;
  }
  &.writing {
    background: #ec7259;
    color: #fff;
  }
`