import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { useTranslation } from "@/app/i18n";

async function page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
    <Header lng={lng} />
    <section className="impressum">
        <div className="container">
      <h1>Impressum</h1>
<br />
<br />
      <div>
        <h2>Angaben gemäß § 5 TMG:</h2>
    
        <p>
          Auto China
          <br />
          Umm Suqeim - Al Quoz
          <br />
          Dubai, Vereinigte Arabische Emirate
        </p>
        <br />
        <br />
      </div>

      <div>
        <h2>Kontakt:</h2>
     
        <p>
          Telefon: +971 58 572 8686
          <br />
          E-Mail:{" "}
          <a href="mailto:impressum@auto-china.com">impressum@auto-china.com</a>
        </p>
        <br />
        <br />
      </div>

      <div>
        <h2>Vertreten durch:</h2>
     
        <p>Die Geschäftsführung von Auto China</p>
        <br />
        <br />
      </div>

      <div>
        <h2>Haftungsausschluss (Disclaimer):</h2>
        <br />
        <br />
        <h3>Haftung für Inhalte</h3>
        <br />
<br />
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <br />
        <br />
        <h3>Haftung für Links</h3>
        <br />
<br />
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <br />
        <br />
        <h3>Urheberrecht</h3>
        <br />
<br />
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem Urheberrecht der Vereinigten Arabischen
          Emirate. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
        <br />
        <br />
        <h3>Streitbeilegung</h3>
        <br />
<br />
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <br />
<br />
        <p>Stand: Januar 2025</p>
      </div>
    </div>
    </section>
    <Footer lng={lng} />
    </>
  );
}

export default page;
