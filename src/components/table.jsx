import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

function createData(name, calories, fat, carbs, protein, khistakh, khutra) {
	return { name, calories, fat, carbs, protein, khistakh, khutra };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 10.0, 2),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 12.0, 3),
	createData('Eclair', 262, 16.0, 24, 6.0, 3.01, 4)
];

export default function AppTable(props) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="caption table">
				{/* <caption>A basic table example with a caption</caption> */}
				<TableHead>
					<TableRow>
						<TableCell align="left">
							<strong>Company Id</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Company Name</strong>
						</TableCell>
						<TableCell align="left">
							<strong>City</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Country</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Zip Code</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Address</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Email</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Update</strong>
						</TableCell>
						<TableCell align="left">
							<strong>Delete</strong>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.userData.map((row, i) => (
						<TableRow key={i}>
							<TableCell align="left">{row.companyId}</TableCell>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.city}</TableCell>
							<TableCell align="left">{row.country}</TableCell>
							<TableCell align="left">{row.zip}</TableCell>
							<TableCell align="left">{row.address}</TableCell>
							<TableCell align="left">{row.email}</TableCell>
							<TableCell align="left">
								<EditIcon />
							</TableCell>
							<TableCell align="left">
								<DeleteIcon />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
