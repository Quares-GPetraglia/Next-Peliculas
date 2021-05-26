import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    props.setTitle('Principal');
  });

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 dark:bg-gray-800 text-white">
          <div className="text-center flex justify-between mx-auto mt-2">
            <div className="text-center text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"> Busca tus peliculas o series preferidas</div>
          </div>
        </div>
      </div>
    </div>
  )
}
