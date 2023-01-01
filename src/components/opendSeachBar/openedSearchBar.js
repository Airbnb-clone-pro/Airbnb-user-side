import { Divider, Paper, Stack, styled } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

const OpenedSearchBar = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={0}
                sx={{
                    borderRadius: '99px',
                    backgroundColor: '#fff',
                    width:"1000px",
                    display:'flex',
                    justifyContent:'space-between'
                }}
            >
                <Item className='flex flex-col start'>
                    <span className='text-start ps-1'>Where</span>
                    <input type="text" className='border-0 ring-0 focus:ring-0' value="" placeholder='search directions' />
                </Item>
                <Item className='flex flex-col'
                    onClick={() => { props.setShowDateRange(true); props.setShowGuestsInput(false) }}
                >
                    <span className='text-start'>Check in</span>
                    <span className='mt-2'>{`${props.startDate?`${format(props.startDate, "dd-MM")}`:"Add dates"}`}</span>
                </Item>
                <Item className='flex flex-col' onClick={() => { props.setShowDateRange(true); props.setShowGuestsInput(false) }}>
                    <span className='text-start'>Check out</span>
                    <span className='mt-2'>{`${props.endDate?`${format(props.endDate, "dd-MM")}`:"Add dates"}`}</span>
                </Item>
                <Item className='flex justify-between'>
                    <div className='flex flex-col justify-start'>
                        <span className='text-start'>Who</span>
                        <span className='mt-2 text-start' onClick={() => { props.setShowGuestsInput(true); props.setShowDateRange(false); }}>{`${(props.numberOfAdults || props.numberOfChildren)?`${props.numberOfAdults + props.numberOfChildren} guests`:"Add guests"}`}</span>
                    </div>
                    <button className='bg-gray[900] ml-10'>Search</button>
                </Item>
            </Stack>
        </div>
    );
}

export default OpenedSearchBar;
