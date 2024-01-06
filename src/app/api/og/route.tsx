import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const bg = fetch(new URL("./o.jpg", import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            width: "100%",
            height: "100%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#43a5a8",
              textAlign: "left",
            }}
          >
            ИНЖЕНЕР
          </p>
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#d09635",

              textAlign: "left",
            }}
          >
            В КАЖДЫЙ
          </p>
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#43a5a8",
              textAlign: "left",
            }}
          >
            ДОМ
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    // eslint-disable-next-line no-console
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
