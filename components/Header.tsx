// Header는 Mern Stack 공부 할 때 썻던 크드 그대로 가져왔던 거기 때문에 현 프로젝트에서는 필요가 없는 모듈이지만 넣어준거다.

import * as React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "@/styles/Header.module.css"

export function Header(props: { sections: any; title: string; }) {
  const { sections, title } = props;

  

  return (
    <React.Fragment>

        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Button size="small">Subscribe</Button>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={styles.none}
            sx={{ flex: 1 }
          }
            >
                <Link href="/">{title}</Link>
            </Typography>
            <IconButton>
            <SearchIcon />
            </IconButton>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
        </Toolbar>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
            {sections.map((section: { title: string ; url: string ; }) => (
            <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                underline="none"
                sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
            ))}
        </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};