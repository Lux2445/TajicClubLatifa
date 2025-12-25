import Header from "../ui-components/header/header.component";
import { AppRoutes } from "./route/app.route";
import { useState } from "react";

export default function App() {
  const [lang, setLang] = useState<"ru" | "en">("ru");

  return (
    <div>
      <Header lang={lang} onChangeLang={setLang} />
      <AppRoutes lang={lang} />
    </div>
  );
}
