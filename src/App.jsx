import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Api } from "./api/api";

function App() {
  // const java = {
  //   nome: "Java",
  //   imagem: "https://www.salvatore.academy/devmon/1_java.png",
  //   evoluiPara: "Kotlin"
  // };
  // const kotlin = {
  //   nome: "Kotlin",
  //   imagem: "https://www.salvatore.academy/devmon/2_kotlin.png",
  //   evoluiPara: "Android"
  // };
  // const android = {
  //   nome: "Android",
  //   imagem: "https://www.salvatore.academy/devmon/3_android.png",
  //   evoluiPara: "C",
  // };
  // const c = {
  //   nome: "C",
  //   imagem: "https://www.salvatore.academy/devmon/4_c.png",
  //   evoluiPara: "C++",
  // };
  // const cplusplus = {
  //   nome: 'C++',
  //   imagem: 'https://www.salvatore.academy/devmon/5_cpp.png',
  //   evoluiPara: 'C#'
  // }

  // const devmons = [java, kotlin, android, c, cplusplus];

  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = Api.personagem.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)

    if (response.ok){
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de DevMons.')
    }
  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />;
        })}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
