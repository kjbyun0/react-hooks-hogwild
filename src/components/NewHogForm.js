import React, { useState } from 'react';

function NewHogForm({ addNewHog }) {
    const [hogObj, setHogObj] = useState({
        name: '',
        specialty: '',
        greased: false,
        weight: '',
        "highest medal achieved": '',
        image: '',
    });

    function handleOnChange(e) {
        switch(e.target.name) {
            case 'name': 
                setHogObj({
                    ...hogObj,
                    name: e.target.value,
                });
                break;
            case 'specialty': 
                setHogObj({
                    ...hogObj,
                    specialty: e.target.value,
                });
                break;
            case 'greased':
                setHogObj({
                    ...hogObj,
                    greased: e.target.value,
                });
                break;
            case 'weight':
                setHogObj({
                    ...hogObj,
                    weight: e.target.value,
                });
                break;
            case 'highest medal achieved': 
                setHogObj({
                    ...hogObj,
                    'highest medal achieved': e.target.value,
                });
                break;
            case 'image':
                setHogObj({
                    ...hogObj,
                    image: e.target.value,
                });
                break;
        }
    }

    function handleNewHogOnSubmit(e) {
        e.preventDefault();

        addNewHog(hogObj);

        setHogObj({
            name: '',
            specialty: '',
            greased: false,
            weight: '',
            "highest medal achieved": '',
            image: '',
        });
    }

    return (
        <form name='new hog' onSubmit={handleNewHogOnSubmit}>
            <label>Name: </label>
            <input type='text' name='name' value={hogObj.name} onChange={handleOnChange} placeholder='Enter Name Here...' />
            <br />
            <label>Specialty: </label>
            <input type='text' name='specialty' value={hogObj.specialty} onChange={handleOnChange} placeholder='Enter Specialty Here...' />
            <br />
            <label>Greased: </label>
            <select name='greased' value={hogObj.greased} onChange={handleOnChange} placeholder='Select Yes/No for Greased Here...'>
                <option value="No">No</option>
                <option value='Yes'>Yes</option>
            </select>
            <br />
            <label>Weight: </label>
            <input type='text' name='weight' value-={hogObj.weight} onChange={handleOnChange} placeholder='Enter weight Here...' />
            <br />
            <label>Highest Medal Achieved: </label>
            <input type='text' name='highest medal achieved' value={hogObj['highest medal achieved']} onChange={handleOnChange} placeholder='Enter Highest Medal Achieved Here...' />
            <br />
            <label>Image: </label>
            <input type='text' name='image' value={hogObj.image} onChange={handleOnChange} placeholder='Enter image link here...' />
            <input type='submit' value='Submit' />
            <br />
            <br />
        </form>
    );
}

export default NewHogForm;