export default function App() {
    const data = {
        //Parametros compra (obligatorio)
        name: 'Vestido Mujer Primavera',
        description: 'Vestido Mujer Primavera',
        currency: 'cop',
        amount: '12000',
        tax_base: '0',
        tax: '0',
        country: 'co',
        lang: 'es',

        //Onpage="false" - Standard="true"
        external: 'false',

        //Atributos opcionales
        extra1: 'extra1',
        extra2: 'extra2',
        extra3: 'extra3',
        // confirmation: "http://secure2.payco.co/confirmation.php",
        //response: "http://secure2.payco.co/response.php",

        //Atributos cliente
        name_billing: 'Andres Perez',
        address_billing: 'Carrera 19 numero 14 91',
        type_doc_billing: 'cc',
        mobilephone_billing: '3050000000',
        number_doc_billing: '100000000',
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
