import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
}));

const CustomizedProgressBars = ({ value }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box display="flex" alignItems="center" style={{ width: '800px' }}>
                <BorderLinearProgress variant="determinate" value={value} style={{ flex: 1, marginRight: '10px' }} />
                <Box minWidth={35}>
                    <span>{value}%</span>
                </Box>
            </Box>
        </Box>
    );
}

CustomizedProgressBars.propTypes = {
    value: PropTypes.number.isRequired
};

export default CustomizedProgressBars;
