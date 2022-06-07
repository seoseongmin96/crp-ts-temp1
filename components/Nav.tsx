import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
//import {Header} from '@/components';
//import theme from '@/public/myTheme.js';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="https://ifh.cc/g/KtohFH.png" style={{width:90+"px"}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              회사 소개
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/company/profile">개발자들</a></li>
              <li><a className="dropdown-item" href="/company/oursite">사이트 소개</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              커뮤니티
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/community/faq">FAQ</a></li>
              <li><a className="dropdown-item" href="/community/list">자유게시판</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/site/aboutSite">관련 사이트</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              전체 기능
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/plagiarism/upload">악보 표절 검사 프로그램</a></li>
              <li><a className="dropdown-item" href="/music/musicPlay">음원 검색</a></li>
              <li><a className="dropdown-item" href="/compose/compose">작곡 프로그램</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <a href="/user/login"><button type="button" className="btn btn-dark">로그인</button></a> &nbsp; 
          <a href="/user/register"><button type="button" className="btn btn-outline-dark">회원가입</button></a>
        </form>
      </div>
    </div>
  </nav>
  );
}