import Input from "../Components/Elements/Input/Index";
import RadioButton from "../Components/Elements/RadioButton/RadioButton";

const EditMentor = () => {
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
        <div className="w-full h-auto rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch p-5 bg-[#d2d2d2] rounded-[20px] justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[10px] inline-flex">
                <div className="self-stretch justify-start items-center gap-[37px] inline-flex">
                    <img className="w-[146px] h-[146px] rounded-[10px]" src="/public/assetsvivit/5d9783cb0a04030c4556d7079ddf57af.png" />
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
                        <div className="self-stretch justify-start items-center gap-[37px] flex flex-row">
                            <div className="mt-6 grow shrink basis-0 flex-col justify-center items-start gap-2">
                                <div className="">
                                    <Input
                                    title="Nama Lengkap"
                                    name="name"
                                    placeholder="Tiara Dewi"
                                    type="text"
                                    classname2="self-stretch w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black"
                                    classname=""
                                    />
                                </div>
                            </div>
                            <div className="mt-6 grow shrink basis-0 flex-col justify-center items-start gap-2">
                                <Input
                                    title="Pekerjaan"
                                    name="name"
                                    placeholder="CV Consultant"
                                    type="text"
                                    classname2="text-3xl self-stretch w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                    classname="text-3xl"
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
                                <div className="">
                                    <Input
                                    title="Tambahkan Tanggal"
                                    name="date"
                                    placeholder=""
                                    type="Date"
                                    classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                    classname=""
                                    />
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2">
                                <div className="">
                                    <Input
                                    title="Tambahkan Waktu"
                                    name="time"
                                    placeholder=""
                                    type="Time"
                                    classname2="w-full h-[42px] px-5 py-2.5 bg-white rounded-[5px] flex-col justify-start items-start gap-1.5 flex placeholder:text-black placeholder:opacity-100"
                                    classname=""
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
    </div>
    );
}

export default EditMentor
