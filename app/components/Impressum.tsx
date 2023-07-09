"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Impressum() { 
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", marginTop: "3em" }}
        variant="h4"
        component="h1"
        gutterBottom>
        Impressum
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="body2">
          Herausgeber: HSV DOGS Barnim 09 e.V.
          <br />16225 Eberswalde
          <br />E-Mail ps@dogs-barnim.de
          <br />Verantwortlich für den Inhalt: H.-Peter Swidnitzky
          <br />Rechtliches:
          <br />Die Inhalte wurden vom Herausgeber sorgfältig recherchiert.
          Trotzdem wird keine Gewähr für die Richtigkeit, Vollständigkeit und
          Aktualität der Daten übernommen. Eine Haftung, insbesondere für
          eventuelle Schäden oder Konsequenzen, die aus der Nutzung des
          Angebotes entstehen, ist ausgeschlossen.  Der Herausgeber ist nicht
          für die Inhalte von Websites verantwortlich, auf die direkt oder
          indirekt per Link verwiesen wird.
          Datenschutz:
          <br />Wir beachten die Bestimmungen des Bundesdatenschutzgesetzes.
          Ihre Daten, die Sie uns über die Website oder per E-Mail zusenden,
          geben wir nicht an Dritte weiter und verwenden wir nur für den
          vorgesehenen Zweck.
          Copyright:
          <br />Der Herausgeber behält sich das Recht vor, Aktualisierungen,
          Änderungen oder Ergänzungen an den präsentierten Informationen und
          Daten unangekündigt vorzunehmen. Sowohl das Layout als auch Texte und
          Grafiken aller Seiten von www.hsv-dogs-barnim.de.tl unterliegen dem
          Copyright vom Herausgeber. Ohne vorherige schriftliche Zustimmung des
          Herausgebers dürfen keine Informationen oder Daten - insbesondere
          Texte, Textteile oder Bildmaterial  verwendet werden.
          <br />© Copyright 2009 D. Kleckers
        </Typography>
      </Container>
    </Box>
  )
}