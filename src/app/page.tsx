import { YaForm } from "@/components/yaform";

import Image from "next/image";
import Link from "next/link";
import sectionOneImage from "../../public/section-1.jpg";
import sectionYaMost from "../../public/section-yamost.jpg";

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
        <div className="absolute top-0 left-0 w-[100%] h-[100vh] flex backdrop-blur-sm bg-grey-500/10">
        </div>
        <div className="absolute top-0 left-0 p-4 sm:p-16 w-[100%] h-[100vh] flex items-center">
          <p className="text-6xl lg:text-8xl text-[#43a5a8] w-full sm:w-[50%] font-bold [text-shadow:_1px_1px_10px_rgb(0_0_0_/_50%)]">
            ИНЖЕНЕР<br />
            <span className="text-[#d09635]">В КАЖДЫЙ</span>
            <br />ДОМ
          </p>
        </div>
        <div className="absolute top-0 left-0 p-4 w-[100%] h-[100vh] flex items-end justify-end">
             <p className="text-4xl lg:text-5xl text-[#43a5a8] text-end w-full sm:w-[50%] font-bold [text-shadow:_1px_1px_10px_rgb(0_0_0_/_50%)] select-none">
           росмолодёжь 
          </p>
        </div>
      </div>
      <section
        id="event_program"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-white text-[#091f2c]"
      >
        <div className="text-4xl sm:text-5xl lg:text-6xl  w-full text-center lg:p-4">
          <p>Программа мероприятия</p>
        </div>
        <div className="flex px-4 lg:px-[10%] py-16 text-2xl text-justify lg:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold h-16">
                20 февраля &mdash; открытие смены
              </h1>
              <ul className="flex flex-col gap-6">
                <li className="list-disc">
                  основы талантливого мышления (лекция) &mdash; креатив-бой
                  (практика)
                </li>
                <li className="list-disc">
                  распределение командных проектов &mdash; работа над проектами
                  со студентами-наставниками
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold h-16">
                21 февраля
              </h1>
              <ul className="flex flex-col gap-6">
                <li className="list-disc">
                  что такое mvp? (лекция) &mdash; современные инженерные навыки
                  (встреча в студии)
                </li>
                <li className="list-disc">
                  разработка макета проекта &mdash; работа над проектами со
                  студентами-наставниками
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold h-16">
                22 февраля
              </h1>
              <ul className="flex flex-col gap-6">
                <li className="list-disc">
                  дизайн-мышление (лекция) &mdash; подготовка презентации
                  (практика)
                </li>
                <li className="list-disc">
                  защита проекта &mdash; подведение итогов (рефлексия)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-white text-[#091f2c]"
      >
        <div className="text-4xl sm:text-5xl lg:text-6xl w-full text-center p-4">
          <p>О проекте "Инженер в каждый дом"</p>
        </div>
        <div className="flex sm:px-[10%] lg:px-[20%] py-8 lg:py-16 text-2xl text-justify">
          <p>
            Проект направлен на вовлечение подростков в инновационную
            исследовательскую деятельность через создание интерактивной
            образовательной среды, способствующей формированию навыков
            разработки и реализации социально-ориентированных проектов в сфере
            технического творчества и биотехнологий.Программа хакатона включает
            в себя три дня, состоящих из трёх блоков: «Мы &mdash;
            исследователи», «Мы &mdash; изобретатели», «Мы &mdash; команда».
            Реализация проекта позволит участникам получить уникальный опыт в
            области разработки продукта и повысить уровень компетенций, которые
            будут востребованы в цифровом глобальном мире.
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
        />
        <div className="absolute top-0 left-0 w-[100%] h-[100vh] flex justify-center items-center backdrop-blur-lg bg-gray-500/30">
          <Link
            className="text-3xl px-4 py-2 sm:py-8 m-4 bg-white hover:bg-gray-100 text-[#091f2c] rounded-3xl text-center"
            href="https://telemost.yandex.ru/j/14417523326810823546581497604919376022"
          >
            Присоедениться к видеовстрече
          </Link>
        </div>
      </section>
      <section
        id="yform"
        className="min-h-[100vh] flex flex-col p-8 items-center justify-center bg-white"
      >
        <YaForm />
        <script src="https://yastatic.net/s3/frontend/forms/_/embed.js">
        </script>
      </section>
    </div>
  );
}
