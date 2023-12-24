"use client";

import { FC } from "react";

export const YaForm: FC<{}> = () => {
  return (
    <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
      <iframe
        src="https://forms.yandex.ru/u/6562318ee010db5695ea17e8/?iframe=1"
        name={"ya-form-6562318ee010db5695ea17e8"}
        width={"100%"}
        height="650"
      >
      </iframe>
    </div>
  );
};
