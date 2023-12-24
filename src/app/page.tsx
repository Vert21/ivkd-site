import { YaForm } from "@/components/yaform";

import Image from "next/image";
import Link from "next/link";
import sectionOneImage from "../../public/section1.jpg";
import sectionYaMost from "../../public/section-yamost.jpg"

export default function Home() {
  return (
    <div className="text-white">
      <div className="h-[100vh] relative">
        <Image
          alt=""
          width={1920}
          height={1080}
          src={sectionOneImage.src}
          className="h-[100vh] object-cover"
        />
        <div className="absolute top-0 left-0 w-[100%] h-[100vh] flex justify-center items-center backdrop-blur-sm bg-purple-500/10">
          <p className="text-5xl lg:text-6xl text-white text-center">
            ИНЖЕНЕР В КАЖДЫЙ ДОМ
          </p>
        </div>
      </div>
      <section
        id="event_program"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-[#a288d9] text-[#091f2c]"
      >
        <div className="text-4xl sm:text-5xl lg:text-6xl  w-full text-center lg:p-4">
          <p>Программа мероприятия</p>
        </div>
        <div className="flex lg:px-[10%] py-16 text-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">
                Lorem ipsum dolor
              </h1>
              <p>
                Некий текст
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">
                Lorem ipsum dolor
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas odio praesentium a dolorum veniam doloremque, expedita
                iure atque laudantium fugiat deserunt iusto velit nulla harum
                aliquid! Fugit commodi est et. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas odio praesentium a
                dolorum veniam doloremque
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">
                Lorem ipsum dolor
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas odio praesentium a dolorum veniam doloremque, expedita
                iure atque laudantium fugiat deserunt iusto velit nulla harum
                aliquid! Fugit commodi est et. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptas odio praesentium a
                dolorum veniam doloremque
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-[#f5b1cc] text-[#091f2c]"
      >
        <div className="text-4xl sm:text-5xl lg:text-6xl w-full text-center p-4">
          <p>О конференции</p>
        </div>
        <div className="flex sm:px-[10%] lg:px-[20%] py-8 lg:py-16 text-2xl text-justify">
          <p>
            Конференция "Биотехнологии - драйвер развития терриотрий" проводится
            Правительством Вологодской области, Обществом биотехнологов России
            им. Ю.А. Овчинникова и Вологодским государственным университетом
            ежегодно, начиная с 2018 года. Сегодня Конференция является важной
            межрегиональной площадкой сотрудничества и коммуникаций
            предпринимательского сообщества, представителей науки и образования,
            властных структур и ведущих экспертов в сфере биотехнологий.
            Конференция проводится при поддержке Министерства образования и
            науки Российской Федерации, Технологической платформы
            «Биоэнергетика», Евразийской биотехнологической платформы
            «ЕвразияБИО», рабочей группы рынка FoodNet НТИ, компании «Хеликон» и
            компании Genotek.
          </p>
        </div>
      </section>
      <section
        id="stream"
        className="h-[100vh] relative flex flex-col items-center justify-center bg-[#222222] text-[#fff]"
      >
        <Image
          alt=""
          width={1920}
          height={1080}
          src={sectionYaMost.src}
          className="h-[100vh] object-cover"
        /><div className="absolute top-0 left-0 w-[100%] h-[100vh] flex justify-center items-center backdrop-blur-lg bg-gray-500/30">
            <Link className="text-3xl px-4 py-2 sm:py-8 m-4 bg-white hover:bg-gray-100 text-[#091f2c] rounded-lg text-center" href="https://telemost.yandex.ru/j/14417523326810823546581497604919376022">Присоедениться к видеовстрече</Link> 

        </div>

      </section>
      <section
        id="yform"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-[#93e8d3] text-[#fff]"
      >
        <YaForm />
        <script src="https://yastatic.net/s3/frontend/forms/_/embed.js">
        </script>
      </section>
    </div>
  );
}
