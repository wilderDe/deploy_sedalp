
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';


export const FormTableDos = ({ formContent, handleChange }) => {



    return (
        <>
            <Typography variant='h6' textTransform='uppercase' >
                {formContent.subtitle}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Hombres</TableCell>
                            <TableCell>Mujeres</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(formContent).filter((categoria) => categoria !== 'subtitle').map((categoria) => (
                            <TableRow key={categoria} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ width: 300 }} >
                                    <TextField
                                        sx={{ width: '100%' }}
                                        label="Categoria"
                                        variant='outlined'
                                        disabled
                                        value={categoria}
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        label="Hombres"
                                        variant='outlined'
                                        autoComplete='off'
                                        type='number'
                                        name={categoria}
                                        value={formContent[categoria].hombres}
                                        onChange={(even) => handleChange(even, 'hombres')}
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        label="Mujeres"
                                        variant='outlined'
                                        autoComplete='off'
                                        type='number'
                                        value={formContent[categoria].mujeres}
                                        name={categoria}
                                        onChange={(even) => handleChange(even, 'mujeres')}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
