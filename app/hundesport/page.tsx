import ScrollableTabs from "@/app/components/ScrollableTabs";
import IgpSport from "@/app/components/IgpSport";
import Agility from "@/app/components/Agility";
import RallyObedience from "@/app/components/RallyObedience";

export default function VereinPage() {
  const titles = ["IGP-Sport", "Agility", "Rally Obedience"];
  return (
    <ScrollableTabs titles={titles}>
      <IgpSport />
      <Agility />
      <RallyObedience />
    </ScrollableTabs>
  )
}