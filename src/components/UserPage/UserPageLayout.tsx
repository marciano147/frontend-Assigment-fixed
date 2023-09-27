import { Grid } from '@mui/material';
import React from 'react';

type UserPageLayoutProps = {
    children: React.ReactNode[];
  };
  
  export const UserPageLayout: React.FC<UserPageLayoutProps> = ({ children }) => (
    <div style={{ display: 'flex', height: '100vh' }}>
       
        <Grid container spacing={1} padding={2} maxWidth={'97%'} >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {children[0]}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {children[1]}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                {children[2]}
            </Grid>
        </Grid>
     
    </div>
);
