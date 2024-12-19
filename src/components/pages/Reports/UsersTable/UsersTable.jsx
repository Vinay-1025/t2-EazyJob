import React, { useEffect, useState } from 'react';
import './UsersTable.css';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiMailSend } from 'react-icons/bi';

const UsersTable = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0); 
    const [rowsPerPage, setRowsPerPage] = useState(5); 
    const [selectedItems, setSelectedItems] = useState([]);
    const [filteredRole, setFilteredRole] = useState('');
    const [filteredStatus, setFilteredStatus] = useState('');

    const fetchData = () => {
        fetch('http://localhost:4000/newuser')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setSelectedItems((prev) => [...prev, id]);
        } else {
            setSelectedItems((prev) => prev.filter((item) => item !== id));
        }
    };

    const handleRoleFilterChange = (event) => {
        setFilteredRole(event.target.value);
    };

    const handleStatusFilterChange = (event) => {
        setFilteredStatus(event.target.value);
    };

    const filteredItems = items.filter(item => {
        const roleMatches = filteredRole ? item.role === filteredRole : true;
        const statusMatches = filteredStatus ? item.Status === filteredStatus : true;
        return roleMatches && statusMatches;
    });

    const currentPageItems = filteredItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const totalPages = Math.ceil(filteredItems.length / rowsPerPage);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 3;

        if (totalPages <= maxPagesToShow) {
            for (let i = 0; i < totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let start = Math.max(0, page - 1);  
            let end = Math.min(totalPages - 1, page + 1);

            if (end - start < 2) {
                if (start === 0) {
                    end = Math.min(start + 2, totalPages - 1);
                } else {
                    start = Math.max(end - 2, 0);
                }
            }

            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active':
                return 'text-success';
            case 'Inactive':
                return 'text-danger';
            default:
                return 'text-info';
        }
    };

    return (
        <div className="container">
            <div className="filters">
                <select value={filteredRole} onChange={handleRoleFilterChange} className="filter-dropdown">
                    <option value="">All Roles</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="Devops">Devops</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
                <select value={filteredStatus} onChange={handleStatusFilterChange} className="filter-dropdown">
                    <option value="">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedItems(filteredItems.map(item => item._id));
                                        } else {
                                            setSelectedItems([]);
                                        }
                                    }}
                                    checked={selectedItems.length === filteredItems.length}
                                />
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageItems.map((item, index) => (
                            <tr key={item._id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item._id)}
                                        onChange={(e) => handleCheckboxChange(e, item._id)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td className={getStatusClass(item.Status)}>{item.Status}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>{item.joined_date}</td>
                                <td>
                                    <button className='usertable-mail'> <BiMailSend className='user-send-mail' /> Invite</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <div className="pagination-left">
                        <select onChange={handleRowsPerPageChange} value={rowsPerPage} className='pagi-dropdown' >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={-1}>All</option>
                        </select>
                        <span className='pagi-desc'>
                            Showing {page * rowsPerPage + 1} to{' '}
                            {Math.min((page + 1) * rowsPerPage, filteredItems.length)} of {filteredItems.length} entries
                        </span>
                    </div>
                    <div className="pagination-right">
                        <button
                            onClick={() => setPage(0)}
                            disabled={page === 0}
                            className='pagi-butn'
                        >
                            <HiChevronDoubleLeft />
                        </button>
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page === 0}
                            className='pagi-butn'
                        >
                            <HiChevronLeft />
                        </button>
                        {pageNumbers.map((num, index) => (
                            <button
                                key={index}
                                onClick={() => setPage(num)}
                                disabled={num === page}
                                className={`num-butn ${num === page ? 'active' : ''}`}
                            >
                                {num + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page >= totalPages - 1}
                            className='pagi-butn'
                        >
                            <HiChevronRight />
                        </button>
                        <button
                            onClick={() => setPage(totalPages - 1)}
                            disabled={page >= totalPages - 1}
                            className='pagi-butn'
                        >
                            <HiChevronDoubleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersTable;
