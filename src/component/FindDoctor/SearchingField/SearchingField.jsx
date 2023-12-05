import React, { useEffect, useState } from 'react';
import NearAbout from '../NearAbout/NearAbout';


const SearchingField = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [specialItem, setSpecialItem] = useState('');
    const [filterSpecial, setFilterSpecial] = useState([]);
    const [passingToData, setPassingToData] = useState([]);

    const cityList = [
        "Uttara", "Banani", "Gulshan", "Badda", "Khilgaon", "RajarBagh", "Savar",
        "Gazipur", "Mirpur-1", "Mirpur-2", "Mirpur-10", "Mirpur-12", "Mohammedpur", "Shyamoli", "Agargaon", "Dhanmondi"
    ];

    const specialization = [
        "Dental Care", "Anesthesiology", "Child Development", "Endocrinology", "Neuro ICU", "Orthopedics", "Cardiac & Vascular Surgery",
        "Dermatology", "End , Head , Neck Surgery", "General Surgery",
    ];

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredCities = cityList.filter(city =>
            city.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCities(filteredCities);
    };

    const handleSelectCity = (selectedCity) => {
        setSearchTerm(selectedCity);
        setFilteredCities([]);

    };

    const handleSpecialChange = (e) => {
        const searchTerm = e.target.value;
        setSpecialItem(searchTerm);

        const filteredSpecial = specialization.filter(special =>
            special.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterSpecial(filteredSpecial);
    };

    const handleSelectSpecial = (selectedCity) => {
        setSpecialItem(selectedCity);
        setFilterSpecial([]);

    };

    // searchItem and specialItem checking factors
    useEffect(() => {
        if (searchTerm && specialItem) {
            setPassingToData([]);
            const bothData = data?.filter(dt => dt.location === searchTerm && dt.profession.includes(specialItem))

            setPassingToData(bothData);

            console.log(passingToData);
        }

        else if (searchTerm) {

            setPassingToData([]);
            const locationData = data?.filter(dt => dt.location === searchTerm)
            setPassingToData(locationData);
            console.log(passingToData);
        }

        else if (specialItem) {

            setPassingToData([]);
            const specialData = data?.filter(dt => dt.profession.includes(specialItem))
            setPassingToData(specialData);
            console.log(passingToData);
        }

    })

    return (

        <div className='md:mx-20 my-7'>
            <h1 className='my-7 text-2xl font-bold text-center'>Search By Your Area With Sepcialization </h1>

            <div className='flex justify-evenly my-16'>

                {/* area choosing */}
                <div>
                    <label htmlFor="" className='font-semibold opacity-60'>Pick Your Area Name</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="select select-secondary w-full max-w-xs mt-3"
                        placeholder="Search for a city..."
                    />

                    {filteredCities.length !== 0 &&
                        <ul
                            className="w-full max-w-xs mt-3 border-2 p-4"
                        >
                            {filteredCities.map((city, index) => (
                                <li key={index} className='py-3 border-b-[1px] hover:cursor-pointer'
                                    onClick={() => handleSelectCity(city)}
                                >{city}</li>
                            ))}
                        </ul>
                    }
                </div>



                {/* special checking */}
                <div>
                    <label htmlFor="" className='font-semibold opacity-60'>Pick Specialization </label>
                    <input
                        type="text"
                        value={specialItem}
                        onChange={handleSpecialChange}
                        className="select select-secondary w-full max-w-xs mt-3"
                        placeholder="Search for a specialization..."
                    />

                    {filterSpecial.length !== 0 &&
                        <ul
                            className="w-full max-w-xs mt-3 border-2 p-4"
                        >
                            {filterSpecial.map((special, index) => (
                                <li key={index} className='py-3 border-b-[1px] hover:cursor-pointer'
                                    onClick={() => handleSelectSpecial(special)}
                                > {special} </li>
                            ))}
                        </ul>
                    }
                </div>

            </div>

            {/* find doctor button */}
            {/* <div className='mt-16 flex justify-center'>
                <button className='btn bg-[#e74e84] px-10 py-1 rounded-full text-white hover:bg-accent'
                    disabled={!searchTerm}
                >
                    <Link
                        to={{
                            pathname: '/see-doctor',
                            state: { data: passingToData }
                        }}
                    >
                        Find Doctor
                    </Link>
                </button>

            </div> */}


            {
                passingToData.length === 0 && (searchTerm || specialItem) ?
                    <h1 className='bg-[#3f4079] p-6 text-white text-lg md:text-2xl font-semibold text-center my-32'> <span className='mr-4 text-3xl'>🙁</span> No Doctors Found In {searchTerm} Area </h1>
                    :
                    <NearAbout
                        data={passingToData}
                    ></NearAbout>
            }

        </div>

    );
};

export default SearchingField;