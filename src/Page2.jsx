import React, { useState } from 'react';
import './Page2.css';

const Page2 = () => {
    const [formData, setFormData] = useState({
        rollno: '',
        ProductName: '',
        Description: '',
        Category: '',
        Price: '',
        Quantity: ''
    });

    const [items, setItems] = useState([]);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addItem = () => {
        if (!formData.rollno || !formData.ProductName) {
            alert("Input product details");
            return;
        }

        setItems([...items, formData]);
        resetForm();
        showMessage("Successful! You have added a new product.");
    };

    const editItem = (index) => {
        setCurrentEditIndex(index);
        setFormData(items[index]);
    };

    const updateItem = () => {
        if (currentEditIndex === null) {
            alert("Select a row to update!");
            return;
        }

        const updatedItems = items.map((item, index) =>
            index === currentEditIndex ? formData : item
        );

        setItems(updatedItems);
        resetForm();
        setCurrentEditIndex(null);
        showMessage("Successfully updated the product.");
    };

    const deleteItem = () => {
        if (currentEditIndex === null) {
            alert("Select a row to delete!");
            return;
        }

        const updatedItems = items.filter((_, index) => index !== currentEditIndex);
        setItems(updatedItems);
        resetForm();
        setCurrentEditIndex(null);
        showMessage("Successfully deleted the product.");
    };

    const resetForm = () => {
        setFormData({
            rollno: '',
            ProductName: '',
            Description: '',
            Category: '',
            Price: '',
            Quantity: ''
        });
    };

    const showMessage = (message) => {
        alert(message); // You can also use a modal or notification system here
    };

    return (
        <div>
            <h1>WINGS CAFE INVENTORY SYSTEM</h1>
            <div id="formpotion">
                <form>
                    <br /><br />
                    Roll No. <input type="number" name="rollno" value={formData.rollno} onChange={handleChange} />
                    Product Name <input type="text" name="ProductName" value={formData.ProductName} onChange={handleChange} />
                    Description: <input type="text" name="Description" value={formData.Description} onChange={handleChange} />
                    Category: <input type="text" name="Category" value={formData.Category} onChange={handleChange} />
                    Price: <input type="number" name="Price" value={formData.Price} onChange={handleChange} />
                    Quantity: <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} />
                    <br /><br />
                    <input type="button" value="Add Data" onClick={addItem} />
                    <input type="button" value="Update Data" onClick={updateItem} />
                    <input type="button" value="Delete Data" onClick={deleteItem} />
                    <br />
                    <hr />
                    <br />
                </form>
            </div>
            <div id="tableright">
                <table id="tbl" className="table" border="1">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} onClick={() => editItem(index)}>
                                <td>{item.rollno}</td>
                                <td>{item.ProductName}</td>
                                <td>{item.Description}</td>
                                <td>{item.Category}</td>
                                <td>{item.Price}</td>
                                <td>{item.Quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="sign-out-container">
                <button className="sign-out-button" onClick={() => { window.location.href = '/dashboard'; }}>
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Page2;
