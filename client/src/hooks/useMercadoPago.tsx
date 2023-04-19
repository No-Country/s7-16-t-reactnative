// import { useState } from "react";
// import * as WebBrowser from "expo-web-browser";
// import mercadopago from "mercadopago";
// import { useCartStore } from "../store/CartStore";

// mercadopago.configure({
//   access_token:
//     "TEST-6861632360489425-041603-22ae2c0892c116e737c07242ceacc0fc-1006696884",
// });

// const useMercadoPago = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const products = useCartStore((state) => state.products);

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const preference = {
//         items: products.map((product) => ({
//           title: product.name,
//           description: product.description,
//           quantity: product.amount,
//           currency_id: "ARS",
//           unit_price: product.price,
//         })),
//         // back_urls: {},
//         auto_return: "approved",
//       };
//       const response = await mercadopago.preferences.create(preference);
//       const paymentUrl = response.body.init_point;
//       // const result = await WebBrowser.openBrowserAsync(paymentUrl);
//       const result: WebBrowser.WebBrowserResultWithUrl =
//         await WebBrowser.openBrowserAsync(paymentUrl);

//       if (!result) {
//         console.log("La acción fue cancelada por el usuario");
//       } else if (result.type === "cancel") {
//         console.log("CANCELADO");
//       } else if (result.url && result.url.includes("success")) {
//         console.log("COMPLETADO");
//       } else if (result.url && result.url.includes("pending")) {
//         console.log("PENDIENTE");
//       }
//     } catch (err) {
//       setError(
//         "Ocurrio un error al procesar el pago. Por favor, intente nuevamente."
//       );
//     }
//     setLoading(false);
//   };
//   return { loading, error, handlePayment };
// };
// export default useMercadoPago;
