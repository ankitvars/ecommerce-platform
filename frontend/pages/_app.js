import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (
      !token &&
      router.pathname !== "/login" &&
      router.pathname !== "/signup"
    ) {
      router.push("/login");
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname !== "/login" && router.pathname !== "/signup"}
      <Component {...pageProps} />
    </>
  );
}
