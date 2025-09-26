import { GraficoBarras } from "@/components/ui/GraficoBarras"
import { GraficoRadar } from "@/components/ui/GraficoRadar"
import { Button } from "@/components/ui/button"

export default function Relatorios() {

  function handleClick(){
    alert("clicou!");
  }

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button onClick={handleClick}>Click me</Button>
        <div class="grid grid-cols-3">
          <GraficoRadar/>
          <GraficoBarras/>
        </div>
      </div>
    </div>
  );
}
