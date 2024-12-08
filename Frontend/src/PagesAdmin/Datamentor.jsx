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
      ]
    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px]">
            <h1 className="text-3xl font-semibold">Data Mentor</h1>
            <div className="flex flex-col mt-[20px] mb-[40px] justify-between gap-4">
                <button onClick={handleOpenOverlay} className="w-full h-[122px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-[37px] flex">
                            <img className="w-[82px] h-[82px] rounded-[10px]" src="/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png" />
                            <div className="w-full flex-col justify-start items-start gap-1.5">
                                <div className="self-stretch text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Tiara Dewi</div>
                                <div className="self-stretch text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">CV Consultant</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                            <div className="w-4 h-4 bg-[#15d0a3] rounded-full" />
                            <div className="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">Aktif di 3 kelas</div>
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 px-[6.41px] justify-center items-center inline-flex" />
                            </div>
                        </div>
                    </div>
                </button>
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
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 px-[6.41px] justify-center items-center inline-flex" />
                            </div>
                        </div>
                    </div>
                </button>
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
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 px-[6.41px] justify-center items-center inline-flex" />
                            </div>
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
                {/* <div className="w-full h-[458px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-start items-start gap-4 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[37px] inline-flex">
                            <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                                <img className="w-[146px] h-[146px] rounded-[10px]" src="/public/assetsvivit/Tiara.png" />
                                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                                    <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Nama Mentor</div>
                                            <div className="">
                                                <Input
                                                title="Nama Lengkap"
                                                name="name"
                                                placeholder="Tiara Dewi"
                                                type="text"
                                                classname="self-stretch w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black"
                                                />
                                            </div>
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Pekerjaan</div>
                                            <Input
                                                title="Nama Lengkap"
                                                name="name"
                                                placeholder="CV Consultant"
                                                type="text"
                                                classname="self-stretch w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Kelas</div>
                                            <div className="justify-start items-start gap-2 inline-flex">
                                                <RadioButton  options={RadioButtonOpts} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                                <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                                    <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-2">
                                            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] mb-2 leading-snug">Tambahkan Tanggal</div>
                                            <div className="">
                                                <Input
                                                title="Nama Lengkap"
                                                name="name"
                                                placeholder="CV Consultant"
                                                type="Date"
                                                classname2="w-"
                                                classname="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-center items-start gap-2">
                                            <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] mb-2 leading-snug">Tambahkan Waktu</div>
                                            <div className="">
                                                <Input
                                                title="Nama Lengkap"
                                                name="name"
                                                placeholder="CV Consultant"
                                                type="Time"
                                                classname2=""
                                                classname="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-[26px] justify-start items-center gap-2 flex">
                            <div className="w-6 h-6 origin-top-left rotate-180 justify-center items-center flex">
                                <div className="w-6 h-6 px-[6.41px] justify-center items-center inline-flex" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Datamentor;
