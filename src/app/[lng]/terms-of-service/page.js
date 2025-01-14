import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { useTranslation } from "@/app/i18n";

async function page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} />
      <section>
        <div className="container">
          
          
          <h1>Impressum</h1>
          <br />
          <br />
          <p>Angaben gemäß § 5 TMG:</p>
          <p>
          <ul>
            <li>
              <strong>Auto China</strong>
              <ul>
                <li>Umm Suqeim - Al Quoz</li>
                <li>Dubai, Vereinigte Arabische Emirate</li>
              </ul>
            </li>
          </ul>
          </p>
          <br />
          <br />
          <p>Kontakt:</p>
        <p>
        <ul>
            <li>Telefon: +971 58 572 8686</li>
            <li>E-Mail: impressum@auto-china.com</li>
          </ul>
        </p>
          <br />
          <br />
          <p>Vertreten durch:</p>
          <p>
          <ul>
            <li>Die Geschäftsführung von Auto China</li>
          </ul>
          </p>
          <br />
          <br />
          <h2>Haftungsausschluss (Disclaimer)</h2>
          <br />
          <br />
          <p>
          <ol>
            <li>
              Haftung für Inhalte
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich...
              </p>
            </li>
            <li>
              Haftung für Links
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                wir keinen Einfluss haben...
              </p>
            </li>
          </ol>
          </p>
          <br />
          <br />
          <h2>Urheberrecht</h2>
          <br />
          <br />
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem Urheberrecht der Vereinigten Arabischen Emirate...
          </p>
          <br />
          <br />
          <h2>Streitbeilegung</h2>
          <br />
          <br />
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit: <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>
            <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <br />
          <br />
          <p>Stand: Januar 2025</p>
          

        </div>
      </section>
      <Footer lng={lng} />
    </>
  );
}

export default page;
