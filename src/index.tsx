import { ActionPanel, Form, Action, showToast } from "@raycast/api";
import fs from "fs";

interface Values  {
  folders:any
};

export default function Command() {
  function handleSubmit(values: Values) {
    const folder = values.folders[0];
    if (!fs.existsSync(folder) || fs.lstatSync(folder).isDirectory()) {
      return false;
    }
    console.log(folder);
    showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit Name" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.FilePicker id="folders" allowMultipleSelection={false} canChooseDirectories canChooseFiles={false} />
    </Form>
  );
}
