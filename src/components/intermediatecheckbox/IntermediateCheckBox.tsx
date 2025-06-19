import CheckBox from "./CheckBox";
import type { TreeNode } from "./data";

interface Props {
  checkboxState: TreeNode[];
  handleChange: (targetId: string) => void;
}

function IntermediateCheckBox({ checkboxState, handleChange }: Props) {
  return (
    <div>
      {checkboxState.map((node) => (
        <div key={node.id} className="ml-5">
          <CheckBox
            id={node.id}
            label={node.label}
            status={node.status}
            handleChange={handleChange}
          />

          {node.children && (
            <IntermediateCheckBox
              checkboxState={node.children}
              handleChange={handleChange}
            />
          )}
        </div>
      ))}
    </div>
  );
}
export default IntermediateCheckBox;
