export default function App() {
  const data = {
    //Parametros compra (obligatorio)
    amount: 10000,
    name: 'Vestido Mujer Primavera',
    description: 'Vestido Mujer Primavera',
    currency: 'cop',
    country: 'co',

    //Onpage="false" - Standard="true"
    external: 'false',
    // confirmation: 'https://kb43j3v4-3000.use2.devtunnels.ms/api/v1/payments',
    // response: 'https://kb43j3v4-5500.use2.devtunnels.ms/epayco.html',
  };

  const handler = ePayco.checkout.configure({
    key: 'aabdfb50003765835312485cfb1622f2',
    test: true,
  });

  return (
    <div>
      <button onClick={() => handler.open(data)}>Pagar</button>
    </div>
  );
}
