import { useState } from "react";
import {
  treeData,
  type TreeNode,
} from "../components/intermediatecheckbox/data";
import IntermediateCheckBox from "../components/intermediatecheckbox/IntermediateCheckBox";
import { STATUS } from "../components/intermediatecheckbox/constants";

function IntermediateCheckBoxPage() {
  const [checkboxState, setCheckboxState] = useState<TreeNode[]>(treeData);

  const computeState = (node: TreeNode) => {
    let checked = 0,
      unchecked = 0,
      indeterminate = 0;

    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => {
        if (child.status === STATUS.CHECKED) checked++;
        else if (child.status === STATUS.UNCHECKED) unchecked++;
        else indeterminate++;
      });

      if (checked === node.children.length) {
        node.status = STATUS.CHECKED;
      } else if (unchecked === node.children.length) {
        node.status = STATUS.UNCHECKED;
      } else {
        node.status = STATUS.INDETERMINATE;
      }
    }
  };

  const traverse = (
    targetId: string,
    rootNode: TreeNode,
    isDescendent?: boolean,
    ancestorStatus?: string
  ) => {
    if (targetId === rootNode.id) {
      if (rootNode.status === STATUS.CHECKED) {
        rootNode.status = STATUS.UNCHECKED;
      } else {
        rootNode.status = STATUS.CHECKED;
      }
    }

    if (isDescendent) {
      rootNode.status = ancestorStatus!;
    }

    if (rootNode.children && rootNode.children.length > 0) {
      rootNode.children.forEach((node) =>
        traverse(
          targetId,
          node,
          targetId === rootNode.id || isDescendent,
          rootNode.status
        )
      );
    }

    computeState(rootNode);
  };

  const handleChange = (targetId: string) => {
    const cloneCheckboxState = JSON.parse(
      JSON.stringify(checkboxState)
    ) as TreeNode[];

    cloneCheckboxState.map((rootNode) => traverse(targetId, rootNode));
    setCheckboxState(cloneCheckboxState);
  };

  return (
    <div className="m-5">
      <IntermediateCheckBox
        checkboxState={checkboxState}
        handleChange={handleChange}
      />
    </div>
  );
}
export default IntermediateCheckBoxPage;
