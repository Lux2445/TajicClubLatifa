import { Routes, Route } from "react-router-dom";
import Reasons from "../../module/reasons/reasons";
import FirstPage from "@/module/firstPage/firstPage.component";
import Menu from "@/module/menupage/menu";

type AppRoutesProps = { lang: "ru" | "en" };

export function AppRoutes({ lang }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<FirstPage lang={lang} />} />
      <Route path="/reasons" element={<Reasons lang={lang} />} />
      <Route path="/menu" element={<Menu lang={lang} />} />
    </Routes>
  );
}
