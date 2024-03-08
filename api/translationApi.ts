import axios from "axios";

//let translation: any

export default async function query(
    data: { inputs: string },
    translation: string
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