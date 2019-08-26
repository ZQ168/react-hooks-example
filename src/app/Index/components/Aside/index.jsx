import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.scss';
import * as loginAction from '../../../../redux/Login/loginAction';

@connect(
  null,
  dispatch => bindActionCreators({ ...loginAction }, dispatch),
)
export default class Aside extends Component {
  static propTypes = {
    changeLoginState: PropTypes.func,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    changeLoginState: () => {},
  };

  goLogOff = () => {
    this.props.changeLoginState('CLEAR_LOGIN_STATE');
    this.props.history.replace('/');
  };

  render() {
    return (
      <div id="asideArea">
        <ul>
          <li>侧边导航栏</li>
          <li>
            <NavLink exact to="/pageone" activeClassName="activeLink">
              useState
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pagetwo" activeClassName="activeLink">
              自定义useState
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pagethree" activeClassName="activeLink">
              useEffect
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pagefour" activeClassName="activeLink">
              useMemo
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pagefive" activeClassName="activeLink">
              useCallback
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pagesix" activeClassName="activeLink">
              useContext
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pageseven" activeClassName="activeLink">
              useLayoutEffect
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/reducer" activeClassName="activeLink">
              useReducer
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/demo" activeClassName="activeLink">
              Demo
            </NavLink>
          </li>
        </ul>
        <span onClick={this.goLogOff}>退出登录</span>
      </div>
    );
  }
}
