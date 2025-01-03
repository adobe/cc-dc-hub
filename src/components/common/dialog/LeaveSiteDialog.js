import React from "react";
import { AlertDialog, DialogContainer } from "@adobe/react-spectrum";

const ConfirmExternalDialog = ({ isOpen, primaryAction, cancelAction }) => {

    return (
        <DialogContainer onDismiss={() => console.log("dismissed")}>
            {isOpen && 
                <AlertDialog
                    title="Leaving Site"
                    variant="destructive"
                    primaryActionLabel="Continue"
                    cancelLabel="Cancel"
                    onCancel={cancelAction}
                    onPrimaryAction={primaryAction}
                >
                    <p>You're about to leave our website and head over to a GitHub repository maintained by a third party. Please note that any software you obtain there is under separate license, and our terms of use and privacy policy will no longer apply.</p>
                    <p>Click "Continue" to proceed, or "Cancel" to stay here.</p>
                </AlertDialog>
            }
        </DialogContainer>
    )
}

export default ConfirmExternalDialog;