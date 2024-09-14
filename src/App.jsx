// import Card from "./components/card/index.jsx";
import Count from "./class/hooks/useState/count/index.jsx";
import Accordion from "./class/hooks/useState/accordion/index.jsx";
import Example from "./class/hooks/useEffect/example/index.jsx";
import CountEffect from "./class/hooks/useHooks/CountEffect/index.jsx";
import PokemonAPI from "./class/hooks/useHooks/PokemonAPI/index.jsx";
/* import Home from "./pages/home/index"
 
export default function App() {
   return (
     <Home />
   )
 } */

// export default function App() {
//   return (
//     <Card 
//       title="Titulo"
//       description="Descrição" 
//       url="https://picsum.photos/200/300"
//       imgAlt="sla q imagem é essa"
//     />
//   )
// }

export default function App() {
  return (
    <>
      <Count/><br /><br />
      <Accordion/><br /><br />
      <Example/><br /><br /><br />
      <h3>Ao clicar no botão aparecera um mensagem no console</h3>
      <CountEffect/><br /><br /><br />
      <PokemonAPI/>
    </>
  )
}