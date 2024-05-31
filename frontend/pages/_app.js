import { useRouter } from "next/router";
import { useEffect } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [router.pathname]);

  return (
    <>
      {router.pathname !== "/login"}
      <Component {...pageProps} />
    </>
  );
}
