import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { User } from '../../redux/usersActions';

interface AddUserDialogProps {
    open: boolean;
    onClose: () => void;
    handleAddUser: (user: User) => void;
}

export const AddUserDialog: React.FC<AddUserDialogProps> = ( props) => {
    const { open, onClose , handleAddUser} = props;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [actions, setActions] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        // Check if all fields are filled
        if (fullName && email && department && actions) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [fullName, email, department, actions]);

    const handleSubmit = () => {
        const newUser: User = {
            fullName,
            email,
            department,
            actions,
        };
        handleAddUser(newUser);
        onClose();
        setFullName('');
        setEmail('');
        setDepartment('');
        setActions('');
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New User</DialogTitle>
            <DialogContent>
                <TextField fullWidth margin="normal" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField fullWidth margin="normal" label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <TextField fullWidth margin="normal" label="Actions" value={actions} onChange={(e) => setActions(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSubmit}  disabled={!isValid}>Add</Button>
                <Button color="primary" onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
