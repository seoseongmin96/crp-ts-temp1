import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from '@/styles/Footer.module.css'
import { style } from "@mui/system";

export function Footer(){
    return (
    <footer className={styles.container}>
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                CRP
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </footer>)
}