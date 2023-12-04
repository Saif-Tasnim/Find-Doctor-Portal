import React from 'react';
import Banner from '../../component/Home/Banner/Banner';
import OnlineAppointment from '../../component/Home/OnlineAppointment/OnlineAppointment';
import MostViewedDoctor from '../../component/Home/MostViewedDoctor/MostViewedDoctor';
import DoctorAddress from '../../component/Home/DoctorAddress/DoctorAddress';
import FindApp from '../../component/FindApp/FindApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineAppointment></OnlineAppointment>
            <MostViewedDoctor></MostViewedDoctor>
            <DoctorAddress></DoctorAddress>
            <FindApp></FindApp>
        </div>
    );
};

export default Home;