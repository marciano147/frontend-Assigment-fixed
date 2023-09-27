import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { GridRowSelectionModel } from '@mui/x-data-grid';

interface DeleteUserDialogProps {
deleteUserDialogOpen: boolean;
onClose: () => void;
userCount: number;
handleDeleteUsers: (userId: GridRowSelectionModel) => void;
rowSelectionModel: GridRowSelectionModel;
}

export const DeleteUserDialog: React.FC<DeleteUserDialogProps> = (props) => {
    const { deleteUserDialogOpen, onClose ,userCount, handleDeleteUsers, rowSelectionModel } = props;

    const confirmationMessage = userCount === 1 
    ? `Are you sure you want to delete ${userCount} user?`
    : `Are you sure you want to delete ${userCount} users?`;

    const handleDeleteUsersClick = () => {
        handleDeleteUsers(rowSelectionModel);
        console.log(rowSelectionModel);
        onClose();
    }
   
    return (
        <Dialog open={deleteUserDialogOpen} onClose={onClose}>
            <DialogTitle>{`Delete ${userCount > 1 ? 'Users' : 'User'}`}</DialogTitle>
            <DialogContent>
                <Typography>{confirmationMessage}</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleDeleteUsersClick}>Delete</Button>
                <Button color="primary" onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
