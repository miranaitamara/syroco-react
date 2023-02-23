import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Options from './components/options';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        paddingTop: 160,
        display: 'flex',
        margin: 0,
        justifyContent: 'center',
        width: 550,
        height: 250,
        borderTop: 'none',
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                        color: '#000000',
                    }}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

function App() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLaunchComputation = () => {
        setTimeout(handleClickOpen, 500);
    };

    return (
        <div className="App">
            <div className="header-title"> Efficientship - Computation parameters</div>
            <Options handleLaunchComputation={handleLaunchComputation} />
            {open && (
                <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}></BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography variant="h3">Computation completed</Typography>
                    </DialogContent>
                </BootstrapDialog>
            )}
        </div>
    );
}

export default App;
