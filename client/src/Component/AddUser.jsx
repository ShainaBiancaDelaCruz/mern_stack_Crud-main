import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddUser() {
    const [value, setValue] = useState({
        no: '',
     
        vn: '',
        amount: "",
        date:"",
        address:"",
        descOfPayment:"",
        bankAcc:"",
        invoiceNo:"",
        preparedBy:"",
        accounting:"",
        approvedBy: "",
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:8000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Expenses</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>No</label>
                                    <input type="text" value={value.no} name='no' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>VN</label>
                                    <input type="text" value={value.vn} name='vn' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" value={value.amount} name='amount' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" value={value.date} name='date' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" value={value.address} name='address' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Description Of Payment</label>
                                    <input type="text" value={value.descOfPayment} name='descOfPayment' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Bank Account</label>
                                    <input type="text" value={value.bankAcc} name='bankAcc' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Invoice no</label>
                                    <input type="number" value={value.invoiceNo} name='invoiceNo' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Prepared by:</label>
                                    <input type="text" value={value.preparedBy} name='preparedBy' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Accounting</label>
                                    <input type="text" value={value.accounting} name='accounting' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Approved By:</label>
                                    <input type="text" value={value.approvedBy} name='approvedBy' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
