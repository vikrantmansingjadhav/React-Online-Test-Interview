import React, { useState } from "react";
import "./Vik.css"; // Create this CSS file for styling

const FormComponent = () => {
  const [selectedForm, setSelectedForm] = useState("");
  const [itemData, setItemData] = useState({
    itemName: "",
    quantity: "",
    unitPrice: "",
    dateOfSubmission: "",
  });
  const [supplierData, setSupplierData] = useState({
    supplierName: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedForm(value === selectedForm ? "" : value); // Toggle selection
  };

  const handleItemChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSupplierChange = (e) => {
    setSupplierData({
      ...supplierData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const combinedData = {
      ...itemData,
      ...supplierData,
    };

    // Validation: Check for empty fields
    if (Object.values(combinedData).some((field) => field === "")) {
      alert("All fields are required!");
      return;
    }

    setSubmittedData(combinedData);
    alert("Form submitted successfully!");
  };

  const handleEdit = () => {
    setSelectedForm(""); // Reset form selection
    setItemData({
      itemName: "",
      quantity: "",
      unitPrice: "",
      dateOfSubmission: "",
    });
    setSupplierData({
      supplierName: "",
      companyName: "",
      country: "",
      state: "",
      city: "",
      emailAddress: "",
      phoneNumber: "",
    });
    setSubmittedData(null); // Reset submitted data
  };

  return (
    <div className="form-container">
      <h2>Select a Form</h2>
      <label>
        <input
          type="checkbox"
          value="items"
          checked={selectedForm === "items"}
          onChange={handleCheckboxChange}
        />
        Items
      </label>

      <label>
        <input
          type="checkbox"
          value="supplier"
          checked={selectedForm === "supplier"}
          onChange={handleCheckboxChange}
        />
        Supplier
      </label>

      {selectedForm === "items" && (
        <div className="form-section">
          <h3>Items Form</h3>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            value={itemData.itemName}
            onChange={handleItemChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={itemData.quantity}
            onChange={handleItemChange}
            required
          />
          <input
            type="number"
            name="unitPrice"
            placeholder="Unit Price"
            value={itemData.unitPrice}
            onChange={handleItemChange}
            required
          />
          <input
            type="date"
            name="dateOfSubmission"
            value={itemData.dateOfSubmission}
            onChange={handleItemChange}
            required
          />
        </div>
      )}

      {selectedForm === "supplier" && (
        <div className="form-section">
          <h3>Supplier Form</h3>
          <input
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
            value={supplierData.supplierName}
            onChange={handleSupplierChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={supplierData.companyName}
            onChange={handleSupplierChange}
            required
          />
          <select
            name="country"
            value={supplierData.country}
            onChange={handleSupplierChange}
            required
          > 
            
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="America">America</option>
            <option value="London">london</option>
            <option value="New York">New york</option>
            <option value="India">India</option>
            <option value="DUBAi">Dubai</option>

          </select>
          <select
            name="state"
            value={supplierData.state}
            onChange={handleSupplierChange}
            required
          >
            <option value="">Select State</option>
            <option value="California">California</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={supplierData.city}
            onChange={handleSupplierChange}
            required
          />
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={supplierData.emailAddress}
            onChange={handleSupplierChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={supplierData.phoneNumber}
            onChange={handleSupplierChange}
            required
          />
        </div>
      )}

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <h6>The Data Submitted By Users Will Be Displayed Below</h6>  <br /> 
          <table className="data-table">
            <thead>
              <tr>
                
                <button className="btn btn-success">Uploaded Data</button>

                {/* <th>Field</th> */}
                {/* <th>Value</th> */}
              </tr>
            </thead>
            <tbody>
              {Object.entries(submittedData).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table> <br />
          <button className="btn btn-primary" onClick={handleEdit}>Update Changes</button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;