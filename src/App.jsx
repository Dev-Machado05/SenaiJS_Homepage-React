import Card from "./components/card/index.jsx";

/* import Home from "./pages/home/index"
 
export default function App() {
   return (
     <Home />
   )
 } */

export default function App() {
  return (
    <Card 
      title="Titulo"
      description="Descrição" 
      url="https://picsum.photos/200/300"
      imgAlt="sla q imagem é essa"
    />
  )
}