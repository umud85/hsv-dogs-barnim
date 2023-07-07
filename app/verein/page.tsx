import ScrollableTabsButtonAuto from "@/app/components/ScrollableTabs";
import Vorstand from "@/app/components/Vorstand";
import Mitglieder from "@/app/components/Mitglieder";
import Trainingszeiten from "@/app/components/Trainingszeiten";
import Dokumente from "@/app/components/Dokumente";

export default function VereinPage() {
  const titles = ["Vorstand", "Mitglieder", "Trainingszeiten", "Dokumente"];
  return (
    <ScrollableTabsButtonAuto titles={titles}>
      <Vorstand />
      <Mitglieder />
      <Trainingszeiten />
      <Dokumente />
    </ScrollableTabsButtonAuto>
  )
}