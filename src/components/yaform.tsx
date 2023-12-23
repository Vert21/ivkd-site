"use client";

import { FC, useEffect, useState } from "react";

export const YaForm: FC<{}> = () => {
  const [width, setWidth] = useState<string | number | undefined>("");

  console.log(window.innerWidth);

  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth < 480) {
      setWidth("95%");
    } else if (
      windowWidth < 720
    ) {
      setWidth("90%");
    } else setWidth("80%");
  });
  return (
    <iframe
      src="https://forms.yandex.ru/u/6562318ee010db5695ea17e8/?iframe=1"
      name="ya-form-6562318ee010db5695ea17e8"
      width={width}
      height="650"
    >
    </iframe>
  );
};
