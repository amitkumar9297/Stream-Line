import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import DoughnutChart from '../components/DoughnutChart';
import Map from '../components/Map';


import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2"
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)



const Dashboard = () => {
    const [coordinates, setCoordinates] = useState({
        lat: 51.5074,
        lng: -0.1278,
    });
    const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const view = [500, 510, 530, 545, 576, 534, 565, 687, 623, 645, 711, 723, 845, 856, 877];
    const Earning = [5500, 7000, 2700];
    const platform = ["instagram", "youtube", "snap"];
    const data = {
        labels: date,
        datasets: [{
            label: `no of followers`,
            data: view,
            borderColor: "rgb(254,152,28)",
            backgroundColor: "rgba(255,99,132,0.5)"
        }]
    }

    const EARN = {
        labels: platform,
        datasets: [{
            label: 'My First Dataset',
            data: Earning,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };

    const age = ["0-10", "10-18", "18-30", "30-45", "45-60"]
    const ageGroup = {
        labels: age,
        datasets: [{
            label: 'User engagement by Age',
            data: [65, 59, 80, 81, 56],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const UserBase = {
        labels: [
            'Asia',
            'Europr',
            'Africa',
            'North-America',
            'Australia',
            'Antartica',
            'South-America'
        ],
        datasets: [{
            label: 'Instagram',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: 'Youtube',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    };


    return (
        <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "white", display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: "20vw", height: '100vh', backgroundColor: '#0F123F', borderTopRightRadius: "2rem", borderBottomRightRadius: "2rem", display: 'flex', flexDirection: 'column', alignItem: 'center' }}>
                <div style={{ display: 'flex', flexDirection: "row", padding: '3rem' }}>
                    <img src={logo} alt='logo' style={{ height: '2rem', width: '2rem', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                    <p style={{ fontSize: '1.5rem', color: "white" }}>Streamline</p>
                </div>
                <div style={{ paddingLeft: '3rem', paddingBottom: '1rem' }}>
                    <p style={{ fontSize: '1.5rem', color: "white" }}>Instagram</p>
                </div>
                <div style={{ paddingLeft: '3rem', paddingBottom: '1rem' }}>
                    <p style={{ fontSize: '1.5rem', color: "white" }}>FaceBook</p>
                </div>
                <div style={{ paddingLeft: '3rem', paddingBottom: '1rem' }}>
                    <p style={{ fontSize: '1.5rem', color: "white" }}>Twitter</p>
                </div>
                <div style={{ paddingLeft: '3rem', paddingBottom: '1rem' }}>
                    <p style={{ fontSize: '1.5rem', color: "white" }}>Youtube</p>
                </div>
            </div>
            <div style={{ width: '76vw', minHeight: '100vh', backgroundColor: 'white', marginLeft: '2vw', marginRight: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontSize: '2.2rem', color: 'black', marginBottom: '2rem' }}>Welcome Back, Anthony</p>
                </div>
                <div style={{ width: "76vw", height: "4rem", display: 'flex', flexDirection: "row", gap: '1rem', marginBottom: "2rem" }}>
                    <div style={{ width: '15rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 10px #D9D9D9', padding: '1rem' }}>
                        <p style={{ fontSize: "1.4rem", letterSpacing: '0.2rem' }}>89,933</p>
                        <p style={{ fontSize: "1rem" }}>Followers</p>
                    </div>
                    <div style={{ width: '15rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 10px #D9D9D9', padding: '1rem' }}>
                        <p style={{ fontSize: "1.4rem", letterSpacing: '0.2rem' }}>₹ 23,283.05</p>
                        <p style={{ fontSize: "1rem" }}>Revenue</p>
                    </div>
                    <div style={{ width: '15rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 10px #D9D9D9', padding: '1rem' }}>
                        <p style={{ fontSize: "1.4rem", letterSpacing: '0.2rem' }}> 35 </p>
                        <p style={{ fontSize: "1rem" }}>Age Group</p>
                    </div>
                </div>
                <div style={{ width: '76vw', display: 'flex', flexDirection: 'row', gap: "2rem" }}>
                    <div style={{ width: '49vw', height: '40vh', boxShadow: '0 4px 10px #D9D9D9', borderRadius: '1.5rem' }}>
                        <Line
                            options={{
                                responsive: true
                            }}
                            data={data}
                        />
                    </div>
                    <div style={{ width: '27vw', height: '40vh', boxShadow: '0 4px 10px #D9D9D9', borderRadius: '1.5rem' }}>
                        <PolarArea
                            options={{
                                responsive: true,
                            }}
                            data={EARN}
                        />
                    </div>
                </div>
                <div style={{ width: '76vw', display: 'flex', flexDirection: 'row', gap: "2rem", marginTop: '2rems' }}>

                    <div style={{ width: '27vw', height: '40vh', boxShadow: '0 4px 10px #D9D9D9', borderRadius: '1.5rem' }}>
                        <Radar
                            options={{
                                responsive: true,
                            }}
                            data={UserBase}
                        />
                    </div>
                    <div style={{ width: '49vw', height: '40vh', boxShadow: '0 4px 10px #D9D9D9', borderRadius: '1.5rem' }}>
                        <Bar
                            options={{
                                responsive: true,
                            }}
                            data={ageGroup}
                        />
                    </div>
                </div>
                {/* <div style={{ width: '80vw' }}>
                    <Map coordinates={coordinates} />
                </div> */}
            </div>
        </div >
    )
}

export default Dashboard