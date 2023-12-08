import React, { useState } from 'react';

const AddDrugForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [drugName, setDrugName] = useState('');
    const [manufacturingDate, setManufacturingDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [bprice, setBPrice] = useState();
    const [sprice, setSPrice] = useState();
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'drugName':
                setDrugName(value);
                break;
            case 'manufacturingDate':
                setManufacturingDate(value);
                break;
            case 'expirationDate':
                setExpirationDate(value);
                break;
            case 'bprice':
                setBPrice(value);
                break;
            case 'sprice':
                setSPrice(value);
                break;
            case 'image':
                setImage(e.target.files[0]);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.setShowForm(false);

        const drugData = {
            drugName,
            manufacturingDate,
            expirationDate,
            bprice,
            sprice,
            image
        };

        setDrugName('');
        setManufacturingDate('');
        setExpirationDate('');
        setBPrice('');
        setImage(null);
    };

    return (
        <div>      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide' : 'Add Product Details'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
            <label>
                Drug Name:
                <input type="text" name="drugName" value={drugName} onChange={handleInputChange} required />
            </label>
            <br />
           
            <label>
                Manufacturing Date:
                <input
                    type="date"
                    name="manufacturingDate"
                    value={manufacturingDate}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <br />
            <label>
                Expiration Date:
                <input
                    type="date"
                    name="expirationDate"
                    value={expirationDate}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <br />
            <label>
                Buying Price:
                <input type="number" name="Buying price" value={bprice} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Selling Price:
                <input type="number" name="Selling price" value={sprice} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Image:
                <input type="file" name="image" onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Add Drug</button>
        </form>
            )}
        </div>
    );
};

export default AddDrugForm;
