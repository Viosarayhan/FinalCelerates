import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";
import Input from "../Components/Elements/Input/Input";
import RadioButton from "../Components/Elements/RadioButton/RadioButton";
import { useState } from "react";
import EditMentor from "./EditMentor";
import { Link } from "react-router-dom";
import Button from "../Components/Elements/Button/Index";

const Datamentor = () => {
    const [showEditmentor, setShowEditmentor] = useState(false);

    const handleOpenOverlay = () => {
        setShowEditmentor(true);
    };

    const handleCloseOverlay = () => {
        setShowEditmentor(false);
    };

    const RadioButtonOpts = [
        {
            label: 'Review CV',
            value: 'Review CV'
        },
        {
            label: 'Review Portfolio',
            value: 'Review Portfolio'
        },
        {
            label: 'Latihan Interview',
            value: 'Latihan Interview'
        },
    ];

    const schedule = {
        date: "2024-12-15",
        time: "10:00 AM",
        zoomLink: "https://zoom.us/j/1234567890",
    };

    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px]">
                <h1 className="text-3xl font-semibold">Data Mentor</h1>
                <div className="flex flex-col mt-[20px] mb-[40px] justify-between gap-4">
                <button
    onClick={handleOpenOverlay}
    className="w-full rounded-lg flex flex-col gap-6 p-6 bg-[#f4f4f4] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
>
    <div className="flex flex-col items-start gap-4">
        {/* Profile Information */}
        <div className="flex justify-between items-center w-full gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="w-[82px] h-[82px] rounded-[10px] object-cover"
                    src="/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png"
                    alt="Mentor"
                />
                <div className="flex flex-col">
                    <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                        Tiara Dewi
                    </div>
                    <div className="text-[#4B4B4B] text-base font-normal font-['Plus Jakarta Sans']">
                        CV Consultant
                    </div>
                </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-[#4B4B4B] ml-[700px]">
                <div className="w-4 h-4 bg-[#15d0a3] rounded-full" />
                <div className="text-base font-normal font-['Plus Jakarta Sans']">
                    Aktif di 3 kelas
                </div>
            </div>
        </div>

        {/* Schedule Table */}
        <div className="w-full">
            <h1 className="text-xl font-semibold text-black mb-4 text-center">Jadwal</h1>
            <table className="min-w-full table-auto text-[#4B4B4B]">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-3 text-center">No.</th>
                        <th className="px-4 py-3 text-center">Tanggal</th>
                        <th className="px-4 py-3 text-center">Waktu</th>
                        <th className="px-4 py-3 text-center">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="px-4 py-3">1</td>
                        <td className="px-4 py-3">25 November 2024</td>
                        <td className="px-4 py-3">12.00 PM</td>
                        <td className="px-4 py-3">
                            <a
                                href="https://zoom.us/j/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                            >
                                https://zoom.us/j/1234567890
                            </a>
                        </td>
                    </tr>
                    {/* Add more rows here if needed */}
                </tbody>
            </table>
        </div>
    </div>
</button>


                    {/* Another Mentor */}
                    <button onClick={handleOpenOverlay} className="w-full h-[122px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-[37px] flex">
                                <img className="w-[82px] h-[82px] rounded-[10px]" src="/public/assetsvivit/2f1ba397127e4944daa182d5fa83e820.png" />
                                <div className="w-full flex-col justify-left items-left flex gap-1.5">
                                    <div className="self-stretch text-black text-lg font-semibold font-['Plus Jakarta Sans'] ">Siska Larasati</div>
                                    <div className="self-stretch text-black text-base font-normal font-['Plus Jakarta Sans'] ">CV Consultant</div>
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 bg-[#15d0a3] rounded-full" />
                                <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">Aktif di 1 kelas</div>
                            </div>
                        </div>
                    </button>

                    {/* Another Mentor */}
                    <button onClick={handleOpenOverlay} className="w-full h-[122px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-between items-center inline-flex">
                            <div className="justify-start items-center gap-[37px] flex">
                                <img className="w-[82px] h-[82px] rounded-[10px]" src="/public/assetsvivit/4d45e0232a205087c7b514010ab84cac.png" />
                                <div className="w-full flex-col justify-left items-left gap-1.5 flex">
                                    <div className="self-stretch text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Andi Wirawan</div>
                                    <div className="self-stretch text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">Portfolio Advisor</div>
                                </div>
                            </div>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="w-4 h-4 bg-[#9d9d9d] rounded-full" />
                                <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">Tidak Aktif</div>
                            </div>
                        </div>
                    </button>

                    {showEditmentor && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-3xl shadow-md relative h-auto w-[1000px]">
                                <button
                                    className="absolute top-2 right-2 text-gray-500"
                                    onClick={handleCloseOverlay}
                                >
                                    ✕
                                </button>
                                <EditMentor />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Datamentor;
