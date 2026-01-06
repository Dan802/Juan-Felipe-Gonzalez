import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';

export default function About() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full mb-[30px]" id='aboutMe'>
      <h2
        id="sobreMi"
        className="mb-1 md:mb-10 text-3xl md:text-5xl font-black text-white mt-12"
      >
        {translation.developer.aboutMe}
      </h2>

      <div className="">
        <div data-aos="fade-up">
          {translation.developer.aboutText.map((text, index) => (
            <p key={index} className="font-['Open_Sans',sans-serif] text-[1.7rem] md:text-[2rem] text-white leading-[1.8] text-justify">{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
