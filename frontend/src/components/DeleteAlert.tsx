"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { TaskType } from "@/Types/task";

type DeleteTaskDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
  task: TaskType | null;
};

const DeleteAlert = ({ isOpen, onClose, onConfirmDelete, task }: DeleteTaskDialogProps) => {
  if (!task) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-slate-800">Are you sure you want to delete this task?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-slate-500" onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirmDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
