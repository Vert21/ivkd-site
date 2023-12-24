"use client";

import { FC } from "react";

export const YaForm: FC<{}> = () => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
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
