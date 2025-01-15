import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { useTranslation } from "@/app/i18n";

async function page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
    <Header lng={lng} sticky={true} />

<p dangerouslySetInnerHTML={{ __html: t('impressum') }}></p>
    <Footer lng={lng} />
    </>
  );
}

export default page;
