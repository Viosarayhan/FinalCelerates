import Navbar from "../../Components/Elements/Navbar/Navbar";
import Footer from "../../Components/Elements/Footer/Footer";
import ArtikelSampingList from "../../Components/Fragments/ArtikelSampingList/ArtikelSampingList";
import getAllArtikel from "../../Service/getAllArtikel";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const DetailArtikel = () => {
    const [artikels, setArtikels] = useState([]);
    const {slug} = useParams()
    const [artikel, setArtikel] = useState()


  useEffect(() => {
    const allArtikels = getAllArtikel();
    const selectedArtikel = allArtikels.find(artikel => artikel.slug === slug);
  
    if (selectedArtikel) {
      // Filter konten dari kategori yang sama, exclude slug terpilih
      const sameCategoryArtikels = allArtikels.filter(
        artikel => artikel.Categori === selectedArtikel.Categori && artikel.slug !== slug
      );
  
      // Jika kategori yang sama kurang dari 4, tambahkan konten acak dari kategori lain
      let otherCategoryContents = allArtikels.filter(
        artikel => artikel.Categori !== selectedArtikel.Categori
      );
  
      // Shuffle konten dari kategori lain secara random
      otherCategoryContents = otherCategoryContents.sort(() => Math.random() - 0.5);
  
      // Gabungkan konten kategori yang sama dengan konten acak, maksimum 4
      const finalArtikels = [
        ...sameCategoryArtikels,
        ...otherCategoryContents.slice(0, 4 - sameCategoryArtikels.length)
      ].slice(0, 4); // Pastikan total maksimal 4
  
      setArtikels(finalArtikels);
    }
  
    setArtikel(selectedArtikel);
  }, [slug]);
  
  

  if(!artikel) {
    return <>
              <h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">PRODUCT NOT FOUND.</h1>
          </>
  }


    return (
        <div>
            <Navbar />
            <div className=" absolute ml-[950px] top-[400px] w-[362px] h-[439px] flex-col justify-start items-start gap-[26px] inline-flex">
                <div className="self-stretch h-14 bg-[#fffff0] rounded-[10px] shadow justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 self-stretch p-1 justify-start items-center gap-1 flex">
                        <img src="/src/assets/menu.svg" className="w-10 h-10 flex-col justify-center items-center gap-2.5 inline-flex"/>
                        <div className="grow shrink basis-0 self-stretch justify-start items-center gap-2.5 flex">
                            <input
                                type="text"
                                name="search" 
                                placeholder='Hinted search text...'  
                                className="text-[#49454f] text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight h-[30px] w-[250px] bg-[#fffff0]"/>
                        </div>
                        <div className="justify-end items-center flex">
                            <img src="/src/assets/search.svg" className="w-8 h-8 flex-col justify-center items-center gap-2.5 inline-flex"/>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[357px] flex-col justify-start items-end flex">
                    <ArtikelSampingList artikels={artikels}/>
                </div>
            </div>
            <div className="mt-[62px] mb-[20px]">
            <img className=" mt-[62px] object-cover w-full h-[300px]" src={artikel.Img} />
             <div className="w-[750px] ml-[150px] mt-[20px] mb-[20px]">
             <h1 className="w-[750px] text-black text-[32px] font-semibold font-sans leading-[38.40px]">{artikel.Judul}</h1>
        <div className="mt-[35px] mb-[20px]">
            </div>
            {artikel.isi}
             </div>
            </div>
            <Footer/>
        </div>
    )
}
export default DetailArtikel