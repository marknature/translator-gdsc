"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("");
  const [english, setEnglish] = useState("");

  const translate = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnglish(lang)
  };

  const handleEnglishChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLang(e.target.value);
  };

  return (
    <>
      <nav className="flex py-5 justify-center">
        <h1 className="text-3xl font-bold">Translator</h1>
      </nav>
      <div className=" flex w-full justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-6 w-full mt-5">
          <div>
            <h2 className="text-2xl font-bold">English</h2>
            <form action="" className="flex items-center space-x-5">
              <textarea
                name="english"
                id="english"
                cols={30}
                rows={10}
                className="border-2 border-black"
                onChange={handleEnglishChange}
              ></textarea>
              <button type="submit" onClick={translate} className="bg-red-500 p-1 rounded-md ">
                submit
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Language</h2>
            <form action="">
              <textarea 
              name="lang" 
              id="lang" 
              cols={30} 
              rows={10} 
              className="border-2 border-black"
              value={english}
              readOnly
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
