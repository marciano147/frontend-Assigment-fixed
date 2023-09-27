import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface DeleteUserDialogProps {
deleteUserDialogOpen: boolean;
onClose: () => void;
    userCount: number;
    // onDelete: () => void;
}

export const DeleteUserDialog: React.FC<DeleteUserDialogProps> = (props) => {
    const { deleteUserDialogOpen, onClose ,userCount } = props;

    const confirmationMessage = userCount === 1 
    ? `Are you sure you want to delete ${userCount} user?`
    : `Are you sure you want to delete ${userCount} users?`;

   
    return (
        <Dialog open={deleteUserDialogOpen} onClose={onClose}>
            <DialogTitle>{`Delete ${userCount > 1 ? 'Users' : 'User'}`}</DialogTitle>
            <DialogContent>
                <Typography>{confirmationMessage}</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" >Delete</Button>
                <Button color="primary" onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
