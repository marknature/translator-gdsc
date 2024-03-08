import axios from "axios";

let response: any

async function query(
    data: { inputs: string },
    translation: "en-rn" | "rn-en" = "en-rn"
  ) {
    try {
      const endpoint =
        translation === "rn-en"
          ? "https://api-inference.huggingface.co/models/icep0ps/rn-en"
          : "https://api-inference.huggingface.co/models/icep0ps/marian-finetuned-kde4-en-to-rw";

      const response = await axios.post(
        endpoint,
        {
          inputs: data.inputs,
          options: {
            wait_for_model: true,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_MODEL_API_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("error occured " + error);
    }
  }
