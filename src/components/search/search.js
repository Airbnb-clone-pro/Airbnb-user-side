
import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';



const choices = [
    { id: 1, text: 'Anywhere' },
    { id: 2, text: 'Any week' },
    { id: 3, text: 'Add guest', withIcon: true },
];
const Search = ({isScreenSmall}) => {
    return (
        <>
            <Paper
                sx={{
                    borderRadius: 20,
                    ml: `${isScreenSmall?'0':'20px'}`,
                    display:`${isScreenSmall?'flex':''}`,
                    justifyContent:`${isScreenSmall?'center':''}`
                }}
                elevation={3}
            >
                <Stack
                    sx={{
                        borderRadius: 20,
                        px: `${isScreenSmall?'60px':'30px'}`,
                        width:"100%",
                        display:'flex',
                        justifyContent:'space-between'
                    }}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    {choices.map((choice) => {
                        return (
                            <Button key={choice.id} >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.primary,
                                        fontWeight: 'bold',
                                        overflow: 'hidden',
                                        width:"100%",
                                        
                                    }}
                                >
                                    {choice.text}
                                </Typography>
                                {choice.withIcon && (
                                    <Box
                                        sx={{
                                            ml: 2,
                                            mt: 0,
                                            mr: 1,
                                        }}
                                    >
                                        <IoSearchCircleSharp color={pink[500]} size={32} />
                                    </Box>
                                )}
                            </Button>
                        );
                    })}
                </Stack>
            </Paper>

        </>
    );
};

export default Search;