import CenteredTabs from "@/app/components/CenteredTabs";
import Vorstand from "@/app/components/Vorstand";
import Mitglieder from "@/app/components/Mitglieder";

export default function VereinPage() {
  const titles = ["Vorstand", "Mitglieder"];
  return (
    <CenteredTabs titles={titles}>
      <Vorstand />
      <Mitglieder />
    </CenteredTabs>
  )
}