import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddButton from './addbutton';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

export default function FormModal(props) {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const handleFormModal = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			{/* <button type="button" onClick={handleOpen}>
				react-transition-group
			</button> */}
			<AddButton handleFormModal={handleFormModal} />
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Enter Record</h2>
						<form className={classes.root} noValidate autoComplete="off">
							<div>
								<TextField
									onChange={props.nameChange}
									value={props.nameValue}
									id="standard-basic"
									label="Name"
								/>
							</div>
							<div className="formModalSelect">
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">Country</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={props.countryValue}
										onChange={props.countryChange}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className="formModalSelect">
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">City</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={props.cityValue}
										onChange={props.cityChange}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div>
								<TextField
									id="standard-basic"
									label="Zip Code"
									onChange={props.zipChange}
									value={props.zipValue}
								/>
							</div>
							<div>
								<TextField
									id="standard-basic"
									label="Address"
									onChange={props.addressChange}
									value={props.addressValue}
								/>
							</div>
							<div>
								<TextField
									id="standard-basic"
									label="Email"
									onChange={props.emailChange}
									value={props.emailValue}
								/>
							</div>
							<div style={{ marginTop: '10px' }}>
								<Button onClick={props.handleDataInsert} variant="contained" color="primary">
									Save
								</Button>
							</div>
						</form>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
