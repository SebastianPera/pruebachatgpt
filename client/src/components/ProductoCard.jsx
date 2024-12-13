export function ProductoCard({ producto }) {
  const fotoPrincipal = producto.fotos.find((foto) => foto.principal)?.foto;

  return (
   
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform transition-transform hover:scale-105">
      {/* Imagen principal */}
      {fotoPrincipal && (
        <div className="w-full h-48 flex justify-center items-center bg-white rounded-t-lg overflow-hidden">
          <img
            src={fotoPrincipal}
            alt={`Imagen de ${producto.producto}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* Título y descripción */}
      <h1 className="text-xl font-bold text-center text-DeFrance mt-4" >
        {producto.producto}
      </h1>
      <p className="text-gray-700 mt-2">{producto.descripcion}</p>

      {/* Código del producto */}
      <div className="mt-4 text-center">
        <span className="inline-block bg-DeFrance text-white text-sm font-semibold px-4 py-2 rounded"
        
        >
          Código: {producto.coditem}
        </span>
      </div>

      {/* Imágenes de combinaciones */}
      {producto.combinaciones?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-md font-semibold text-gray-600 mb-2">Combinaciones:</h2>
          <div className="flex justify-center gap-2 overflow-x-auto">
            {producto.combinaciones.map((comb) => (
              <div
                key={comb.id}
                className="w-16 h-16 flex-shrink-0 rounded border border-gray-200 overflow-hidden bg-white"
              >
                <img
                  src={comb.foto}
                  alt={`Combinación ${comb.coditem_bas}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grilla de configuraciones */}
      {producto.configuraciones?.length > 0 && (
  <div className="mt-6">
    <h2 className="text-md font-semibold text-gray-600 mb-2">Configuraciones:</h2>
    <div className="w-full border border-gray-200 rounded-md overflow-hidden">
      {producto.configuraciones.map((config, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-4 ${
            index % 2 === 0 ? 'bg-gray-100 shadow-md' : 'bg-white shadow'
          }`}
        >
          <span className="text-gray-600 font-medium">{config.set_nombre}</span>
          <span className="text-gray-700">{config.valor}</span>
        </div>
      ))}
    </div>
  </div>
)}


    </div>
  );
}

