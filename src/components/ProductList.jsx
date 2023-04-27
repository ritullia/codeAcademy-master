import { ListItem } from "./ListItem";
import { Svarbumas, TernaryListItem } from "./TernaryListItem";
import { LogicalOperatorItem } from "./LogicalOperatorItem";
import { LogicalOrOperatorItem } from "./LogicalOperatorItem";
import { SupakuotasArNe } from "./TernaryListItem";

export const ProductList = () => {
  return (
    <div>
      <ul>
        <ListItem productName="Batonas" isBought={true} />
        <ListItem productName="Sviestas" isBought={false} />
        <ListItem productName="Pienas" isBought={false} />
        <ListItem productName="Suris" isBought={true} />
      </ul>
      {/* <ul>
        <TernaryListItem productName="Batonas" isBought={true} />
        <TernaryListItem productName="Sviestas" isBought={false} />
        <TernaryListItem productName="Pienas" isBought={false} />
        <TernaryListItem productName="Suris" isBought={true} />
      </ul> */}
      <ul>
        <LogicalOperatorItem productName="Batonas" isBought={true} />
        <LogicalOperatorItem productName="Sviestas" isBought={false} />
        <LogicalOperatorItem productName="Pienas" isBought={false} />
        <LogicalOperatorItem productName="Suris" isBought={true} />
      </ul>
      <ul>
        <LogicalOrOperatorItem productName="Batonas" />
        <LogicalOrOperatorItem productName="Sviestas" />
        <LogicalOrOperatorItem productName="Pienas" />
        <LogicalOrOperatorItem productName="Suris" />
      </ul>
      <ul>
        <SupakuotasArNe name="Suknele" isPacked={true} />
        <SupakuotasArNe name="Basutes" isPacked={false} />
        <SupakuotasArNe name="Sortai" isPacked />
        <SupakuotasArNe name="Akiniai nuo saules" />
      </ul>
      <ul>
        <Svarbumas name={"Suknele"} importance={9} isPacked={true} />
        <Svarbumas name="Basutes" importance={5} />
        <Svarbumas name="Sortai" importance={-1}/>
        <Svarbumas name="Akiniai nuo saules" importance={0} />
      </ul>
    </div>
  );
};
