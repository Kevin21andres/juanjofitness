export default function Legal() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-black mb-8">
          Aviso Legal
        </h1>

        <p className="mb-6">
          En cumplimiento con el deber de información recogido en la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se facilitan a
          continuación los siguientes datos:
        </p>

        <ul className="mb-6 space-y-2">
          <li><strong>Responsable:</strong> Juan Jose Hidalgo Pomes</li>
          <li><strong>Domicilio:</strong> Tarragona, España</li>
          <li><strong>Correo electrónico:</strong> jjhp2026@outlook.es</li>
          <li>
            <strong>Actividad:</strong> Entrenamiento personal y asesoramiento deportivo
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-10 mb-4">
          Condiciones de uso
        </h2>
        <p className="mb-6">
          El acceso y uso de este sitio web atribuye la condición de usuario e
          implica la aceptación plena de las presentes condiciones. El usuario
          se compromete a hacer un uso adecuado de los contenidos y servicios
          ofrecidos.
        </p>

        <h2 className="text-xl font-semibold text-black mt-10 mb-4">
          Propiedad intelectual
        </h2>
        <p className="mb-6">
          Todos los contenidos de esta web (textos, imágenes, logotipos,
          diseño, estructura y código fuente) son propiedad de Juan Jose
          Hidalgo Pomes o cuentan con licencia para su uso, quedando prohibida
          su reproducción total o parcial sin autorización expresa.
        </p>

        <h2 className="text-xl font-semibold text-black mt-10 mb-4">
          Legislación aplicable
        </h2>
        <p>
          La relación entre el titular y el usuario se regirá por la normativa
          española vigente, sometiéndose cualquier controversia a los juzgados
          y tribunales competentes de Tarragona.
        </p>
      </div>
    </main>
  );
}
