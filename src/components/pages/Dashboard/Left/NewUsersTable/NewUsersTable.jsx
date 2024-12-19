import React, { useState } from 'react';
import './NewUsersTable.css'

const NewUsersTable = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const handleStatus = (status) => {
        switch (status) {
            case 'Paid':
                return 'success';
            case 'Pending':
                return 'danger';
            default:
                return 'warning';
        }
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentItems = items.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(items.length / rowsPerPage);

    return (
        <div>
            <div className='table table-borderless datatable'>
                <thead className="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope='col'>User</th>
                        <th scope='col'>Domain</th>
                        <th scope='col'>Payment</th>
                        <th scope='col'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map(item => (
                            <tr key={item._id}>
                                <th scope="row">{item.number}</th>
                                <td style={{ minWidth: '200px' }}>{item.name}</td>
                                <td style={{ minWidth: '320px' }}>{item.domain}</td>
                                <td>{item.price.toFixed(2)}</td>
                                <td>
                                    <span className={`badge bg-${handleStatus(item.status)}`} style={{ float: 'right' }}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>No Data Available</td>
                        </tr>
                    )}
                </tbody>
            </div>
            <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', gap: '10px' }}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagi-butn"
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        className={`num-butn ${currentPage === page + 1 ? 'active' : ''}`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagi-butn"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default NewUsersTable;
