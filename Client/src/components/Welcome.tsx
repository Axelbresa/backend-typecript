import { Link } from "react-router-dom";
import '../stilos/bienvenida.css';

export default function Welcome() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground inicio">
      <main className="container mx-auto py-12 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        
        <img
            src="../../src/images/tipos-de-computadoras-1.webp"
            width="650"
            height="105"
            alt="Imagen de equipo informatico"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover"
          />

          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Bienvenido a gestion de equipos informaticos
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" id="texto">
    ¡Bienvenido a nuestra aplicación de gestión de inventario de equipos informáticos! Aquí podrás:
    <ul className="list-disc pl-5 mt-2">
        <li><strong>Ver:</strong> todos los productos disponibles.</li>
        <li><strong>Agregar:</strong> nuevos productos al inventario.</li>
        <li><strong>Actualizar:</strong> la información de los productos existentes.</li>
        <li><strong>Eliminar:</strong> productos que ya no estén en uso.</li>
    </ul>
    ¡Estamos encantados de que te unas a nosotros para gestionar el inventario de manera eficiente y sencilla!
</p>
            <div className="flex justify-center">
              <Link to="/login" className="btn">Ver más</Link>
            </div>
          </div>
        
        </div>
      </main>
    </div>
  );
}
