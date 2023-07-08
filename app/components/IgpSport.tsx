"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
  
function IgpSport() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        IGP-Sport
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Die Internationale Prüfungsordnung für Gebrauchshunde (IGP) beinhaltet
        laut Prüfungsordnung des Verbandes für das Deutsche Hundewesen (VDH):
        <br /> Abteilung A -> Fährtenarbeit
        <br /> Abteilung B -> Unterordnung
        <br /> Abteilung C -> Schutzdienst
        <br /> Zugelassen sind Hunde aller Rassen und Mischlinge nach
        bestandener Begleithundeprüfung.
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Bei der <strong>Abteilung A/ Fährtenarbeit</strong> muss der Hund
        mithilfe seines Geruchssinns eine Fährte ausarbeiten und Gegenstände
        finden und verweisen. Hierbei variiert Länge der Fährte und Anzahl der
        90°-Winkel und Gegenstände je nach Prüfungsstufe.
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Bei der <strong>IGP 1</strong>-Prüfung legt der Hundeführer eine
        Eigenfährte von mindestens 300 Schritt mit 2 Winkeln und 2 Gegenständen.
        Bevor der Hund dann 15 Minuten Zeit für die Ausarbeitung hat, muss die
        Fährte mindestens 20 Minuten liegen.
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Bei der <strong>IGP 2</strong>-Prüfung muss der Hund eine mindestens
        400 Schritt lange Fremdfährte finden, die zwar ebenfalls 2 Winkel und 2
        Gegenstände beinhaltet, aber mindestens 30 Minuten alt ist. Auch hier
        hat der Hund 15 Minuten Ausarbeitungszeit.
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Bei der <strong>IGP 3</strong>-Prüfung ist die Fremdfährte schon
        mindestens 600 Schritt lang und der Hund muss innerhalb von 20 Minuten
        4 Winkel und 3 Gegenstände finden. Die Fährte ist dann mindestens 60
        Minuten alt.
      </Typography>
      <Typography className='mt-3' gutterBottom>
        Die <strong>Abteilung B/ Unterordnung</strong> ist ein Gehorsamstraining
        und somit eine Erweiterung zur Begleithundeausbildung. Hier wird neben
        der Freifolge und der Schussgleichgültigkeit auch das Sitz aus der
        Bewegung, Ablegen in Verbindung mit Herankommen, das Bringen auf ebener
        Erde, über eine Hürde und über eine Schrägwand, das Voraussenden mit
        Hinlegen und das Ablegen unter Ablenkung beurteilt.
        Bei der IGP 2- Prüfung kommt noch das Stehen aus dem Schritt und bei der 
        IGP 3- Prüfung das Stehen aus dem Laufschritt  hinzu. 
      </Typography>
      <Typography className='mt-3' gutterBottom>
        In der <strong>Abteilung C/ Schutzdienst</strong> wird der natürliche
        Beutetrieb des Hundes ausgebildet, bei dem der Ärmel des Helfers als
        Beute angesehen wird. Entgegen mancher Meinungen, die Hunde würden beim
        Schutzdienst „scharf“ gemacht, lernen sie hier nicht, den Menschen zu
        beißen, sondern sind ausschließlich auf dem Ärmel fixiert.
        Einem Hund, der voll im Trieb steht, ist schwer Gehorsam zu vermitteln.
        Hier lernt er, in Extremsituationen völlig gehorsam und abrufbar zu
        sein. Dadurch wird der Hund auch im Alltag bei neuen, ungewohnten
        Situationen selbstsicherer, ruhiger und nervenfester umgehen können,
        als ein nicht ausgebildeter Artgenosse.
        Die Prüfung der Abteilung C beinhaltet das Revieren nach dem Helfer mit
        anschließendem Stellen und Verbellen, das Verhindern eines
        Fluchtversuches des Helfers, die Abwehr eines Angriffs aus der
        Bewachungsphase und den Angriff auf den Hund aus der Bewegung.
        Später kommen noch der Rückentransport und der Überfall auf den Hund
        aus eben diesem Rückentransport hinzu.
      </Typography>
    </Box>
  )
}

export default IgpSport