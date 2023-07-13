
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';



export const FormTableTres = ({ formContent, handleChange }) => {
    return (
        <>
            <Typography variant='h6' textTransform='uppercase' >
                {formContent.title}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(formContent).filter((categoria) => categoria !== 'title').map((categoria) => (
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
                                        label="total"
                                        variant='outlined'
                                        autoComplete='off'
                                        name={categoria}
                                        type='number'
                                        value={formContent[categoria].total}
                                        onChange={(even) => handleChange(even, 'total')}
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
